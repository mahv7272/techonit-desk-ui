import Image from 'next/image'
import Link from 'next/link'

const SuggestForNew = () => {
  return (
    <div className='text-center px-8 flex flex-col justify-center min-h-[80vh] gap-24'>
      <div>
        <div>
          {/* Image */}
          <Image src='/assets/smart-home.svg' width={300} height={300} />
        </div>
        <div className='px-10'>
          <p className='font-semibold'>You don't have any structures yet! click the + button below to create a new one 🎉.</p>
        </div>
      </div>
      <div className='mt-10'>
        <Link href='structure/new'>
          <a className='md:hidden btn btn-legendary'>
            <i className='fa fa-plus'></i>
          </a>
        </Link>
        <Link href='structure/new'>
          <a className='hidden md:inline btn btn-legendary'>
            New Structure
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SuggestForNew;