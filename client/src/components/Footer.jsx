import React from 'react'

import logo from '../../images/logo.png'

const date = new Date().getFullYear()

const Footer = () => (
  <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
    <div className='w-full items-center my-4'>
      <div className=' justify-center items-center'>
        <img
          src={logo}
          alt='logo'
          className='w-52 cursor-pointer mx-auto display-block'
        />
      </div>
    </div>

    <div className='flex justify-center items-center flex-col mt-5'>
      <button
        class='block text-[#ffe082]  font-medium  text-md px-5 py-2.5 text-center '
        type='button'
        data-modal-toggle='defaultModal'
      >
        About us
      </button>

      <div
        id='defaultModal'
        aria-hidden='true'
        class='hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0'
      >
        <div class='relative px-4 w-full max-w-2xl h-full md:h-auto'>
          <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div class='flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600'>
              <h3 class='text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white'>
                Wild Roots
              </h3>
              <button
                type='button'
                class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-white-600 dark:hover:text-white'
                data-modal-toggle='defaultModal'
              >
                <svg
                  class='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>

            <div class='p-6 space-y-6 bg-dark'>
              <p class='text-base leading-relaxed'>
                Wildroots tech is an American African based platform designed to
                enable easy transfer of etherum by simply connecting your
                wallet, gain access by using ether within centralized
                applications. Excluding the usual gas fee charged, wildroots
                tech is completely free to use.
              </p>
            </div>
            <div class='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'></div>
          </div>
        </div>
      </div>
      <p className='text-[#ffe082] text-sm text-center'>info@wildroots.tech</p>

      <p className='text-[#ffe082] text-sm text-center font-medium mt-2'>
        Copyrights &copy; {date}
      </p>
    </div>

    <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 ' />

    <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
      <p className='text-[#ffe082] text-left text-xs'>
        created by Wild Developers
      </p>
      <p className='text-[#ffe082] text-right text-xs'>All rights reserved</p>
    </div>
  </div>
)

export default Footer
