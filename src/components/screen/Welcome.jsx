import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import File from '../file/CV.pdf'



const Welcome = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => (
            tick()
        ), delta)
        return () => {clearInterval(ticker)}
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updateText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2);

        }
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
  return (
    <section className='Welcome pb-48'>
        <div className='w-full pt-36'>
            <div className=' m-auto w-10/12'>
                <div className='flex items-center flex-row justify-center'>
                    <div className='flex flex-col w-3/5 items-center'>
                        <h1 className='text-5xl pb-10 font-bold'>{`Hi,  I'm `}<span className='text-5xl pb-10'>{text}</span></h1>
                        <p className='pb-10 font-semibold'>My age is 15 years old .I am a motivated person. I have a lot of experience in Frontend
                            development. I have experience working in a team.I can spend a lot of time at work.
                            I can think strategically and flexibly to solve a problem in a project.
                        </p>
                        <button className='pt-3 pb-3 pl-4 pr-4 border-0 rounded-xl bg-slate-800 w-2/5 font-semibold'><a href={File}>Download CV</a></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}   

export default Welcome
