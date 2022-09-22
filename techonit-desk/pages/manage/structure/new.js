import Image from 'next/image'
import Link from 'next/link'
export default function New() {
    return (
        <>
            <div className='flex flex-col justify-center min-h-[100vh]'>
                <div className='px-10'>
                    <div>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='mb-2 font-bold text-xs'>Type</label>
                        <select className='py-2 px-4 pr-8 rounded bg-gray-200 border border-gray-200 text-gray-700'>
                            <option>Home</option>
                            <option>Agriculture</option>
                            <option>Aviculture</option>
                        </select>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='mb-2 font-bold text-xs'>Name</label>
                        <input className='py-2 px-3 rounded-md' type='text' />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='mb-2 font-bold text-xs'>Description</label>
                        <textarea className='py-2 px-3 rounded-md'></textarea>
                    </div>
                    <div className='mt-20'>
                        <button className='py-2 w-[100%] bg-primary-500 rounded-md'>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

New.layout = 'manage';
New.title = 'New structure';