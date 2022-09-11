import React from 'react'
import {BsBookmarkCheckFill} from 'react-icons/bs'



const FrontEndItem = ({title}) => {
    return (
        <div className='flex items-center'>
            <BsBookmarkCheckFill size={40} className='pb-3 pr-5'/>
            <li className='pb-3 list-none font-semibold'>{title}</li>
        </div>  
    )
}

const FrontEnd = () => {
  return (
    <section className='FrontEnd mt-56 pb-52' id='front'>
        <div>
            <div className='w-10/12 m-auto flex flex-col justify-center items-center'>
                <h1 className='font-extrabold text-3xl mb-24 mt-24 uppercase'>What I know</h1>
                <div className='flex flex-col w-4/12  border-4 pt-10 pb-10 pr-10 pl-10 rounded-2xl ease-in-out duration-300 text-black shadow-black shadow-xl hover:bg-slate-600 hover:text-white border-slate-700'>
                    <h1 className='font-bold text-3xl pb-10'>Front End</h1>
                    <ul className='grid justify-items-start'>
                        {['HTML','CSS/SASS/SCSS','JavaScript','React Js','Figma','Bootstrap'].map((item,ind) => (
                            <FrontEndItem title={item} key={item + ind}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FrontEnd
