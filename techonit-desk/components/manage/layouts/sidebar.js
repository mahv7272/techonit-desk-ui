import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'

const Sidebar = ({ handleToggleMenu, isShowMenu }) => {
  const router = useRouter();
  function isCurrentPage(href) {
    return router.pathname === href ? "text-slate-100 bg-primary-500 dark:bg-indigo-500 shadow-lg shadow-primary-500/40 dark:shadow-slate-500/40 rounded-xl text-md font-bold" : "text-sm";
  }

  return (
    <div
      className="menu-fixed main-menu min-h-screen border-l text-navygreen-700 bg-slate-100 border-slate-200 dark:text-slate-200 dark:bg-slate-900 dark:border-slate-700"
      style={{ touchAction: "none", userSelect: "none" }}>
      <div className="mobile-header mb-3">
        <div className="w-full px-2">
          <button className="close p-3 pt-3.5 text-2xl" onClick={handleToggleMenu}>
            <span className="h4 m-0" aria-hidden="true">
              &times;
            </span>
          </button>
        </div>
        {/* <div className="h4 w-50 text-center mr-auto ml-auto mt-2">
                    Admin Dashboard
                </div> */}
      </div>
      <div className="d-none d-sm-block">
        <div className="grid h-[60px] dark:shade-slate">
          <Link href="/">
            <a className="flex justify-center text-center m-0">
              <div className="flex px-5">
                <div className="flex flex-col justify-center">
                  <Image className="w-[50px] h-[50px]"
                    src='/TechOnIt-Logo.png'
                    width={50}
                    height={50}
                    alt="Techonit logo"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="extra mr-2 truncate font-bold">Technology On It</span>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="pr-sm-0 pl-sm-0 mt-3 text-primary-900/50 dark:text-gray-300">
        <ul className={`nav flex flex-col ${isShowMenu === true ? '' : 'px-6'}`}>
          <li className="nav-item py-1">
            <Link href="/manage">
              <a className={`nav-link ${isCurrentPage("/manage")} dark:hover:text-slate-100 p-3`}>
                <i className="far fa-tachometer-alt dark:text-slate-300"></i>
                <div className="extra truncate">Overview</div>
              </a>
            </Link>
          </li>
          <li className="nav-item py-1">
            <Link href="/manage/structure">
              <a className={`nav-link ${isCurrentPage("/manage/structure")} dark:hover:text-slate-100 p-3`}>
                <i className="far fa-home dark:text-slate-300"></i>
                <div className="extra truncate">Structures</div>
              </a>
            </Link>
          </li>
          <li className="nav-item py-1">
            <Link href="/manage/user">
              <a className={`nav-link ${isCurrentPage("/manage/user")} dark:hover:text-slate-100 p-3`}>
                <i className="far fa-users dark:text-slate-300"></i>
                <div className="extra truncate">Users</div>
              </a>
            </Link>
          </li>
          <li className="nav-item py-1">
            <Link href="/manage/role">
              <a className={`nav-link ${isCurrentPage("/manage/role")} dark:hover:text-slate-100 p-3`}>
                <i className="fa fa-certificate dark:text-slate-300"></i>
                <div className="extra truncate">Roles & Permissions</div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
