import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useState } from "react";

export default function Layout({ children }) {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const handleToggleMenu = () => {
        setIsShowMenu(isShowMenu === true ? false : true);
      };
    return (
        <>
            <div id="app" role="main" className="bg-noise-light dark:bg-noise-dark">
                <div className={"flex flex-col h-screen overflow-auto" +
                    (isShowMenu == true ? " menu-collapsed" : "")
                }
                >
                    <Sidebar
                        handleToggleMenu={handleToggleMenu}
                        isShowMenu={isShowMenu}
                    />
                    <div className="flex flex-col min-h-screen content">
                        <Navbar
                            handleToggleMenu={handleToggleMenu}
                        />
                        <main
                            role="main"
                            className="w-full min-h-full px-5 pt-4 md:px-8 md:pt-5 pb:12 bg-noise-light dark:bg-noise-dark"
                        >
                            {/* <div className="w-[100%] h-[100%] bg-center bg-cover rounded-lg  grid bg-transparent">
                                <div className="m-auto">
                                    <div className="w-5 h-5 border-t-2 border-r-2 border-black rounded-full animate-spin"></div>
                                </div>
                            </div> */}
                            { children }
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}  