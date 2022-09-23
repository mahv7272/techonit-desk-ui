import Image from 'next/image'
import Link from 'next/link';
export default function Signin() {
    return (
        <>
            <div className="flex flex-col justify-center h-[100%] px-8 md:px-[20%] lg:px-[35%]">
                {/* Image And Text */}
                <div className="text-center flex flex-col mb-12">
                    <div className='grid mb-3'>
                        <Image src="/assets/Sun rise-cuate.svg" alt="Nature view" width={100} height={200} />
                    </div>
                    <div>
                        <label className="text-primary-500 text-2xl font-bold">Welcome</label>
                        <p>Enter your phone number to signin or signup!</p>
                    </div>
                </div>
                {/* Form And Button */}
                <div>
                    <div className="mb-9">
                        <input
                            className='text-center tracking-wider bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            maxLength={11}
                            type='text'
                            placeholder='Phone Number' />
                    </div>
                    <div className='text-center flex justify-center gap-3'>
                        <Link href='/'>
                            <a className='px-3 py-2'>Back</a>
                        </Link>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

Signin.layout = 'auth';
Signin.title = 'Login or create account!';