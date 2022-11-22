// this function is giong to execute and deploy our contract in transactions.sol
const main = async () => {
  // this is like a function factory or class that will generate instances of that specific contract
  const transactionsFactory = await hre.ethers.getContractFactory(
    'Transactions'
  )
  const transactionsContract = await transactionsFactory.deploy()

  await transactionsContract.deployed()

  console.log('Transactions address: ', transactionsContract.address)
}

// this function above will be called here
const runMain = async () => {
  try {
    await main()
    process.exit(0) // this means the process went successfully
  } catch (error) {
    console.error(error)
    process.exit(1) // this means there was a error
  }
}

runMain()

// how this will work is it will call the runMain() which will run the function 'runMain' and this will use the 'main' async function to deploy our smart contract
