import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = React.createContext()

// the ethereum window object
const { ethereum } = window

//this will fetch our ethereum contrac
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum) // here we pass in the ethereum window object
  const signer = provider.getSigner()
  // the parameters is filled with things we need to fetch our contract
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )
  return transactionContract
}

// every context provider needs to get one thing from the props and that is 'children' in this case.
export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('')

  // we use this to pass in the form data
  const [formData, setformData] = useState({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem('transactionCount')
  )

  const [transactions, setTransactions] = useState([])

  // all handlechange functions that interacts with input accepts the keypress event (e)
  const handleChange = (e, name) => {
    // this will dynamicly update the form data
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }))
  }

  // the getalltransaction is a special funtion we created on our smart card thats going to get all transactions
  const getAllTransactions = async () => {
    try {
      // check if the user has metamask installed
      if (!ethereum) return alert('Welcome to Wild Roots!')
      const transactionsContract = getEthereumContract()
      const availableTransactions =
        await transactionsContract.getAllTransactions()

      // to show all the transactions
      const structuredTransactions = availableTransactions.map(
        (transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        })
      )

      console.log(structuredTransactions)

      setTransactions(structuredTransactions)
    } catch (error) {
      console.log(error)
    }
  }

  // this function checks if the wallet is connected at the start of the website
  const checkIfWalletIsConnected = async () => {
    try {
      //if there is no ethereum object, it gives an alert saying to install metamask else this wont work
      if (!ethereum) return alert('Welcome to Wild Roots!')

      // and then we get our metamask connected accounts
      const accounts = await ethereum.request({ method: 'eth_accounts' })

      // check if there is an account
      if (accounts.length) {
        // this will give us access to our prelogged in accounts
        setCurrentAccount(accounts[0])
        // and it will get  us all our transactions
        getAllTransactions()
      } else {
        // if there is no account, log ;
        console.log('No accounts found')
      }
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  // we use this to retrieve the list of all the trnsactions that was sent to our network
  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        // we get the transaction contract
        const transactionsContract = getEthereumContract()
        // we get the number of transactions
        const currentTransactionCount =
          await transactionsContract.getTransactionCount()

        window.localStorage.setItem('transactionCount', transactionCount)
      }
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  // this activates the connect wallet button and ultimately a function for connecting the account
  const connectWallet = async () => {
    // we will use the try method so that we make sure the users suceed
    try {
      // here we will request a metamask account
      if (!ethereum) return alert('Welcome to Wild Roots!')
      //we will get all the metamask accounts and the user will select one
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      // this will connect the first account
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  // this is where our entire logic for sending and storing transactions will be
  const sendTransaction = async () => {
    try {
      // we check if the user has metamask installed
      if (!ethereum) return alert('Welcome to Wild Roots!')

      //  get the data from the form
      const { addressTo, amount, keyword, message } = formData
      // we use this variable to call all our contract related functions
      const transactionContract = getEthereumContract()
      // this converts the ethereum amount to GWEI(like pennies and dollars) or decimal
      const parsedAmount = ethers.utils.parseEther(amount)

      //sending ethereum
      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: '0x5208', //21000 GWEI or 0.00021 ETHEREUM
            value: parsedAmount._hex,
          },
        ],
      })

      // to store every transactions made
      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      )
      // this function above is from the Transaction.sol file in the contract folder

      setIsLoading(true)
      console.log(`Loading - ${transactionHash.hash}`)
      await transactionHash.wait() // this will wait for the transaction to be finished
      console.log(`Success - ${transactionHash.hash}`)

      setIsLoading(false)

      const transactionCount = await transactionContract.getTransactionCount()

      setTransactionCount(transactionCount.toNumber())
      // will automatically reload after every successful transaction
      window.reload()
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  //this will call the function checkIfWalletIsConnected() and it will happen only at the start of the application
  useEffect(() => {
    checkIfWalletIsConnected()
    checkIfTransactionsExists()
  }, [])

  return (
    // this wraps all the react application we will pass through this.
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setformData,
        handleChange,
        sendTransaction,
        transactions,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
