import React from 'react'
import { Company } from '../components/Company'
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div >
            <Company/>
            <div className='max-w-2xl mx-auto mb-4 p-5'>

            <h2 className='text-2xl text-gray-700 text-center p-2'>Contacts</h2>
            <form className='flex flex-col gap-5' onChange={handleSubmit}>

                <input type="text"
                    placeholder='name'
                />
                <input type="text"
                    placeholder='email'
                />

                <textarea name="" id="" cols="30" rows="10" className='p-3  text-lg border border-solid border-gray-300 bg-white text-black rounded shadow-md outline-none transition-all duration-200 ease-linear focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200' />
                <button className='self-center rounded-xl w-32 md:w-48 bg-gray-900 p-4 text-gray-200 font-medium hover:opacity-90'>Submit</button>
            </form>
            </div>
        </div>
    )
}
export default Contact