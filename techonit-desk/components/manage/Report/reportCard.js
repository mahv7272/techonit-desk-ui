import { useState } from "react";

const ReportCard = ({ name, icon, value, scale }) => {
    return (
        <div className='bg-slate-100 rounded-2xl w-[165px] h-[125px] p-4 cursor-pointer select-none'>
            <div className='flex flex-col justify-between h-full'>
                <div className='flex justify-between'>
                    <div className="flex">
                        {/* Icon */}
                        <span className={`flex flex-col text-2xl justify-center rounded-full  text-center
                        w-[40px] h-[40px]`}>
                            <i className={icon}></i>
                        </span>
                    </div>
                    <div>
                        {/* Switch */}
                        <span className="flex items-center h-full">
                            <div className="relative">
                                <input type="checkbox" className="sr-only" />
                                <div className={`block dark:bg-slate-700 w-10 h-6 rounded-full`}></div>
                                <div className={`dot absolute top-1 bg-white dark:bg-slate-300 w-4 h-4 rounded-full`}></div>
                            </div>
                        </span>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        {/* Name */}
                        <span>{name}</span>
                    </div>
                    <div className="relative">
                        {/* Status */}
                        <span className='font-light text-sm'>On</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportCard;