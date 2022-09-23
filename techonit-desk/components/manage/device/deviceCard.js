const DeviceCard = ({ name, icon, isActive }) => {
    const handleToggleSwitch = () => {
        isActive = !isActive;
        console.log(isActive)
    };
    return (
        <div className='bg-slate-100 rounded-2xl w-[165px] h-[125px] p-4' onClick={handleToggleSwitch}>
            <div className='flex flex-col justify-between h-full'>
                <div className='flex justify-between'>
                    <div className="flex">
                        {/* Icon */}
                        <span className='flex flex-col justify-center rounded-full bg-slate-200 text-slate-600 text-center
                        w-[40px] h-[40px]'>
                            <i className={icon}></i>
                        </span>
                    </div>
                    <div>
                        {/* Switch */}
                        <label className="flex items-center cursor-pointer h-full">
                            <div className="relative">
                                <input type="checkbox" className="sr-only" />
                                <div className="block bg-primary-500 dark:bg-slate-700 w-10 h-6 rounded-full"></div>
                                <div className="dot absolute left-1 top-1 bg-gray-100 dark:bg-slate-300 w-4 h-4 rounded-full transition"></div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        {/* Name */}
                        <label>{name}</label>
                    </div>
                    <div>
                        {/* Status */}
                        <span className='font-light text-sm'>Off</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeviceCard;