import React from 'react'

function Form() {
  return (
    <>
    <div className=" border border-white w-[80%] max-sm:w-[98%] max-lg:w-[80%] max-md:w-[80%] 4k2:w-[60%] h-[60vh] max-sm:h-[70%] max-md:h-[80%] 4k2:h-[60%] z-10 relative bg-white text-black rounded-3xl flex flex-col justify- e items-start pl-8 py-8 4k2:pl-16 4k2:py-16 gap-5 max-sm:gap-0  ">

      <div className='flex flex-col gap-1 max-sm:h-[15%] max-md:h-[10%] max-lg:h-[20%] hd:h-[20%] max-sm:w-[80%] max-md:w-[80%] 4k2:gap-5'>
            <h1 className='max-sm:text-2lg max-lg:text-lg hd:text-3xl 4k2:text-6xl'> <b>Contact Form</b></h1>
            <p className='max-sm:text-base max-lg:text-lg hd:text-2xl hd:w-[80%] 4k2:text-5xl'>Please fill out the form below, and we'll get back to you within 24 hours</p>
      </div>
        
                <div className='input_txt_container flex flex-row flex-wrap gap-7 h-[80%] max-sm:h-[85%] max-md:h-[90%] max-lg:h-[80%] hd:h-[80%] max-lg:gap-7 hd:gap-20'>

                        <div className="input_container flex flex-col h-auto justify-between max-sm:gap-1 ">

                              <div className='flex flex-col h-auto hd:gap-3 '>
                                <label htmlFor="" className='max-sm:text-2lg max-lg:text-lg hd:text-2xl 4k2:text-5xl'>Full Name</label>
                                <input type="text" className='border border-gray-400 w-52 hd:w-[100%] hd:h-10 4k2:h-[4rem] rounded'/>
                              </div>

                                      <div className='flex flex-col h-auto hd:gap-3 '>
                                        <label htmlFor="" className='max-sm:text-2lg max-lg:text-lg hd:text-2xl 4k2:text-5xl'>Email</label>
                                        <input type="text" className='border border-gray-400 w-52 hd:w-[100%] hd:h-10 4k2:h-[4rem] rounded'/>
                                      </div>

                                            <div className='flex flex-col h-auto hd:gap-3 '>
                                              <label htmlFor="" className='max-sm:text-2lg max-lg:text-lg hd:text-2xl 4k2:text-5xl'>Phone Number</label>
                                              <input type="text" className='border border-gray-400 w-52 hd:w-[100%] hd:h-10 4k2:h-[4rem] rounded'/>
                                            </div>

                              <div className='flex flex-col h-auto hd:gap-3 '>
                                <label htmlFor="" className='max-sm:text-2lg max-lg:text-lg hd:text-2xl 4k2:text-5xl'>Company/Organisation</label>
                                <input type="text" className='border border-gray-400 w-52 hd:w-[100%] hd:h-10 4k2:h-[4rem] rounded'/>
                              </div>
                        </div>

                        <div className="txt_container flex flex-col justify-between max-sm:gap-1 max-sm:w-[90%]">
                          <p className='max-sm:text-2lg max-lg:text-lg hd:text-2xl 4k2:text-5xl'>interested in:</p>
                          <p className='max-sm:text-2lg max-lg:text-lg hd:text-2xl 4k2:text-5xl'>Select all that apply</p>
                          
                              <div className=' flex gap-1 items-center justify-start'>
                                  <input type='checkbox'  />
                                  <p><b className='max-sm:text-base hd:text-2xl 4k2:text-5xl'>Customised Transcription Services</b></p>
                              </div>

                                    <div className='flex gap-1 items-center justify-start' >
                                        <input type='checkbox' />
                                      <p><b className='max-sm:text-base hd:text-2xl 4k2:text-5xl'>Request a Demo</b></p>
                                    </div>

                                          <div className=' flex gap-1 items-center justify-start'>
                                              <input type='checkbox' />
                                            <p><b className='max-sm:text-base hd:text-2xl 4k2:text-5xl'>Other</b></p>
                                          </div>
                          <textarea className='text-black border border-gray-500 rounded 4k2:h-[9rem]' cols="auto" rows="auto"></textarea>
                          
                          <button className='w-[40%] 4k2:text-5xl hd:text-2xl text-white rounded-lg bg-black py-2 px-2 4k2:py-6'>Submit</button>


                        </div>

                </div>
      </div>
    </>
  )
}

export default Form