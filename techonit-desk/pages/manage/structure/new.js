export default function New() {
    return (
        <>
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
                <button className='btn btn-primary w-full'>Add</button>
            </div>
        </>
    )
}

New.layout = 'manage';
New.title = 'New structure';