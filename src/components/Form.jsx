import React from 'react'

function Form() {
  return (
    <>
    <div className=" border border-white w-[60%] max-sm:w-full h-full max-sm:h-[45%]  z-10 relative bg-white text-black rounded-3xl flex flex-col justify- e items-start pl-8 py-8 gap-5 ">
      <div className='flex flex-col gap-1'>
            <h1 className=''> <b>Contact Form</b></h1>
            <p className=''>Please fill out the form below, and we'll get back to you within 24 hours</p>
      </div>
        
                <div className='flex flex-row flex-wrap gap-10 h-[15rem]'>

                        <div className="input_container flex flex-col h-auto justify-between max-sm:gap-2">

                              <div className='flex flex-col h-auto '>
                                <label htmlFor="" className=''>Full Name</label>
                                <input type="text" className='border border-gray-400 w-52 rounded'/>
                              </div>

                                      <div className='flex flex-col h-auto '>
                                        <label htmlFor="">Email</label>
                                        <input type="text" className='border border-gray-400 w-52 rounded'/>
                                      </div>

                                            <div className='flex flex-col h-auto '>
                                              <label htmlFor="">Phone Number</label>
                                              <input type="text" className='border border-gray-400 w-52 rounded'/>
                                            </div>

                              <div className='flex flex-col h-auto '>
                                <label htmlFor="">Company/Organisation</label>
                                <input type="text" className='border border-gray-400 w-52 rounded'/>
                              </div>
                        </div>

                        <div className="txt_container flex flex-col justify-between max-sm:gap-2">
                          <p>interested in:</p>
                          <p>Select all that apply</p>
                          
                              <div className=' flex gap-1 items-center justify-start'>
                                  <input type='checkbox'  />
                                  <p><b className='max-sm:text-sm'>Customised Transcription Services</b></p>
                              </div>

                                    <div className='flex gap-1 items-center justify-start' >
                                        <input type='checkbox' />
                                      <p><b className='max-sm:text-sm'>Request a Demo</b></p>
                                    </div>

                                          <div className=' flex gap-1 items-center justify-start'>
                                              <input type='checkbox' />
                                            <p><b className='max-sm:text-sm'>Other</b></p>
                                          </div>
                          <textarea className='text-black border border-gray-500 rounded' cols="auto" rows="auto"></textarea>
                          
                          <button className='w-[40%]  text-white rounded-lg bg-black py-2 px-2'>Submit</button>


                        </div>

                </div>
      </div>
    </>
  )
}

export default Form