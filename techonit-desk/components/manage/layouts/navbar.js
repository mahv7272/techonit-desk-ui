import Image from 'next/image'
import Link from 'next/link'

const Navbar = ({ handleToggleMenu, handleToggleThemeMode }) => {
    return (
        <nav className="bg-slate-100 dark:bg-slate-800 dark:text-gray-200 dark:shadow-md border-gray-600 px-2 sm:px-4 rounded-b select-none">
            <div className="flex flex-wrap justify-between">
                <div className='flex'>
                    <div className="grid">
                        <button className="nav-link px-3 py-2 rounded text-gray-400 hover:text-gray-300 dark:hover:text-gray-100 dark:text-gray-300" onClick={handleToggleMenu}>
                            <i className="fa fa-list"></i>
                        </button>
                    </div>
                    <ul className='flex text-sm mr-3'>
                        <li className='h-full flex flex-col justify-center'>
                            <Link href='/manage/user/new'>
                                <a className='flex items-center p-4 cursor-pointer h-full text-gray-600 hover:text-gray-400 dark:text-slate-300 dark:hover:text-slate-50 '>
                                    New User
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <div className="md:w-auto">
                        <ul className="flex flex-row-reverse text-lg md:font-medium">
                            {/* Notification */}
                            <li>
                                <a href="#" className="block relative p-4 text-gray-600 hover:text-gray-400 dark:text-slate-300 dark:hover:text-slate-50 bg-blue-700 rounded" aria-current="page">
                                    <i className='far fa-bell'></i>
                                    <span className='absolute text-xs font-bold text-center bg-rose-600 rounded-full text-white min-h-[20px] min-w-[20px] max-w-[40px] px-1.5 py-0.5 top-[38px] left-[50%] translate-x-[-50%] truncate ltr'>
                                        6
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button type="button" className="flex ml-3 text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="/assets/images/profile/default.png" alt="user" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;