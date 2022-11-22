import React, { useContext } from 'react'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'

import { Loader } from './'
import { TransactionContext } from '../context/TransactionContext'
import { shortenAddress } from '../utils/shortenAddress'

const companyCommonStyles =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-white-100 text-sm font-light text-[#ffe082]'

// we use parenthesis instead of curly braces since the arrowcfunctionn will return some jsx code
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step='0.0001'
    value={value}
    onChange={(e) => handleChange(e, name)}
    className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
  />
)

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext)

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData
    // usually, when we sumbit a form, the page reloads. so the line of code below prevents that from happening
    e.preventDefault()
    // if the user doent fill the inputs, leave the form, dont submit anything
    if (!addressTo || !amount || !keyword || !message) return
    // else if the user successfully fils all the fields, we can call in the sendTransaction()
    sendTransaction()
  }

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
        {/* this is the left side of the website on the desktop size */}
        <div className='flex flex-1 justify-start items-start flex-col mf:mr-10'>
          <h1 className='text-3xl sm:text-5xl text-[#ffe082] text-white py-1'>
            Send Crypto For Free <br />
            From Anywhere To Anywhere!
          </h1>
          <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base text-gradient'>
            Join the Fastest Growing Crypto universe.
          </p>

          {/* what this is saying is if our account is already connected, no need to render the button. hence it will hide the button if and once our account is connected */}
          {!currentAccount && (
            <button
              type='button'
              onClick={connectWallet}
              className='flex flex-row justify-center items-center my-5 bg-[#f1c052] p-3 rounded-full cursor-pointer hover:bg-[#fff]'
            >
              <p className=' text-[#212121] text-base font-semibold'>
                Connect Wallet
              </p>
            </button>
          )}

          <a
            className='text-left mt-5 text-base text-white font-mono md:w-9/12 w-11/12'
            href='/map.html'
          >
            Click Here to Register for the
            <span className='text-[#f1c052]'>
              <em> Miss African Pride </em>
            </span>
            Pageant 2022.
          </a>

          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
            <div className={`tooltip rounded-tl-2xl ${companyCommonStyles}`}>
              Job Plus
              <span className='tooltiptext'>Job Recruitment</span>
            </div>
            <div className={`tooltip ${companyCommonStyles}`}>
              <a href='/map.html'>
                Miss African Pride Pageant
                <span className='tooltiptext'>Beauty Pageant</span>
              </a>
            </div>
            <div className={`tooltip ${companyCommonStyles}`}>
              Wild Pay
              <span className='tooltiptext'>Transfer Money Effortlessly</span>
            </div>
            <div className={` ${companyCommonStyles}`}>
              Forex and Crypto News
            </div>
            <div className={`tooltip ${companyCommonStyles}`}>NFT's</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              <a href='#'>Web 3.0</a>
            </div>
          </div>
        </div>

        {/* this is the right side of the website on desktop size */}
        <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
          {/* the etheruem card */}
          <div className='p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism '>
            <div className='flex justify-between flex-col w-full h-full'>
              <div className='flex justify-between items-start'>
                {/* wrapper for the etherum icon */}
                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                  {/* ethereum icon */}
                  <SiEthereum fontSize={21} color='#ffe082' />
                </div>
                {/* the info icon by the right of the card */}
                <BsInfoCircle fontSize={17} color='#ffe082' />
              </div>
              <div>
                <p className='text-white font-light text-sm'>
                  {/* here we will render the the adress of the blockchain that is connected to our ethereum */}
                  Your Address: {shortenAddress(currentAccount)}
                </p>
                <p className='text-[#ffe082] font-semibold text-lg mt-1'>
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          {/* this is our form */}
          <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
            <Input
              placeholder='Address To'
              name='addressTo'
              type='text'
              handleChange={handleChange}
            />
            <Input
              placeholder='Amount (ETH)'
              name='amount'
              type='number'
              handleChange={handleChange}
            />
            <Input
              placeholder='Keyword (Gif)'
              name='keyword'
              type='text'
              handleChange={handleChange}
            />
            <Input
              placeholder='Enter Message'
              name='message'
              type='text'
              handleChange={handleChange}
            />
            {/* the gray line in the form */}
            <div className='h-[1px] w-full bg-gray-400 my-2' />

            {/* the loading state and the send button */}
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type='button'
                onClick={handleSubmit}
                className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#ffe082] hover:text-[#212121] rounded-full cursor-pointer'
              >
                Send now
              </button>
            )}
          </div>
          {/* end of the form */}
        </div>
      </div>
    </div>
  )
}

export default Welcome
