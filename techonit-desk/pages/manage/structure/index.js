import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
    return (
        <>
            <div className='text-center px-8 flex flex-col justify-center h-[100vh] gap-24'>
                <div>
                    <div>
                        {/* Image */}
                        <Image src='/assets/smart-home.svg' width={300} height={300} />
                    </div>
                    <div className='px-10'>
                        <p className='font-semibold'>You don't have any structures yet! click the + button below to create a new one 🎉.</p>
                    </div>
                </div>
                <div className='mt-12'>
                    <Link href='structure/new'>
                        <a className='px-3 pb-2 text-3xl bg-gradient-to-tr from-primary-100 to-primary-500 rounded-lg'>+</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

Index.layout = 'manage';
Index.title = 'My structures overview';