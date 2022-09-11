import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='bg-slate-700' id='contacts'>
        <div className='w-10/12 m-auto h-80 t-32'>
          <div className='flex items-center justify-center'>
            <div className='flex items-center justify-between mt-20'>
              <div className='flex flex-col items-center'>
                <h1 className='font-extrabold text-3xl mb-14 uppercase'>Contact</h1>
                <p className='font-extrabold text-xl uppercase mb-5'>Email: 1337vovalenovo@gmail.com</p>
                <p className='font-extrabold text-xl uppercase'>Phone: +375291303323</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
