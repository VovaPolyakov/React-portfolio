import React from 'react'


const Information= () => {

  return (
    <section className='Information' id='about'>
        <div className='pt-20 flex flex-col items-center'>
            <h1 className='font-extrabold text-3xl mb-36 uppercase'>About me</h1>
            <div className='flex items-center justify-around flex-row '>
                <div className='w-2/5 border-4 pt-10 pb-10 text-black pr-10 pl-10 rounded-2xl ease-in-out duration-300 shadow-black shadow-xl hover:bg-slate-600 hover:text-white border-slate-700'>
                    <h1 className='font-bold text-3xl pb-10' >Information</h1>
                    <div>
                        <h1 className='font-bold text-xl pb-5 text-left'>Core Skills</h1>
                        <p className='pb-10 text-left font-semibold'>Ability to work in a team. I can be the souk of the company.
                            I learned quicklu from mistakes
                        </p>
                    </div>
                    <div>
                        <h1 className='font-bold text-xl pb-10 pt-5 text-left'>Additional Information</h1>
                        <div className='flex items-center text-left font-semibold'>
                            <p>I want to become a specialized
                                Frontend developer and improve in the
                                field of programming. I want to learn
                                other programming languages
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-2/5 border-4 pt-10 pb-10 pr-10 pl-10 rounded-2xl ease-in-out duration-300 text-black shadow-black shadow-xl hover:bg-slate-600 hover:text-white border-slate-700'>
                <h1 className='font-bold text-3xl pb-10'>Experience</h1>
                    <div>
                        <div className='pb-5'>
                            <p className='pt-3 pb-3 text-left'>September 2020 - May 2021</p>
                            <h1 className='font-bold text-xl pb-5 text-left'>
                                Frontend developer courses "html/css"
                            </h1>
                            <p className='pb-3 pt-3 text-left font-semibold'>During courses, I learned how to make layouts with Figma.
                                Learned how to wotk with SASS/SCSS preprocessors. Learned how
                                to work with flex
                            </p>
                        </div>
                        <div>
                            <p className='pb-3 pt-3 text-left'>September 2021 - May 2022</p>
                            <h1 className='font-bold text-xl pb-5 text-left'>
                                Frontend developer courses "JavaScript"
                            </h1>
                            <p className='pb-3 pt-3 flex text-left justify-start font-semibold'>In JavaScript courses , I studied working with arrays, function, BOM-DOM, arrow function, working with API, Figma, etc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Information
