import React,{useState} from 'react'
import './NavBar.styles.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {GrClose} from 'react-icons/gr'
import menu from './menu'
import {Link} from 'react-scroll'



const NavBarItem = ({title,href}) => {
    return (
        <Link to={href} spy={true} smooth={true} offset={50} duration={500} className='pr-5 pl-5 cursor-pointer'>{title}</Link>
    )
}


const NavBar = () => {
    const [showWindow, setShowWindow] = useState(false)

    const showModalWindow = () => {
        if(showWindow){
            setShowWindow(false)
        }
        else{
            setShowWindow(true)
        }
    }
  return (
    <header>
        <div className='mirror backdrop-blur h-20'>
            <div className='pt-3 '> 
                <div className='flex justify-end w-full'>
                    <div className='flex justify-around w-9/12'>
                    <ul className='flex items-center'>
                            {menu.map((item, index) => (
                                <NavBarItem key={item + index} title={item.name} href={item.link} />
                            ))}
                        </ul>
                    <button className='border-0 rounded-xl pr-6 pl-6 pt-3 pb-3 bg-slate-800' onClick={() => showModalWindow()}>Find me</button>
                    </div>
                </div>
            </div>
        </div>
            <div className='fixed w-full flex flex-col items-center justify-center'>
                <div className={`${showWindow ? 'block' : 'hidden'} mirror backdrop-blur pt-12 pb-16 pl-16 pr-16 rounded-2xl absolute top-40`}>
                    <GrClose size={30} className='absolute top-8 right-5 cursor-pointer' onClick={() => showModalWindow()} />
                    <div className='flex flex-col items-center'>
                        <h1 className='mb-10 text-black text-2xl uppercase font-extrabold'>Find me in</h1>
                        <div className='flex flex-row items-center justify-evenly w-1/2'>
                            <a className='cursor-pointer pr-5' href='https://github.com/VovaPolyakov' ><BsGithub size={30} color='black'/></a>
                            <a className='cursor-pointer' href='https://www.linkedin.com/in/vova-polyakov-013010243/'><BsLinkedin size={30} color='black'/></a>
                        </div>
                    </div>
                </div>
            </div>

    </header>
  )
}

export default NavBar
