import Image from 'next/image'
import Link from 'next/link'
import DeviceCard from '../../components/manage/device/deviceCard'

export default function Index() {
    return (
        <>
            <div className='mb-5'>
                <label className='text-xl font-extrabold'>Overview</label>
            </div>

            <div>
                <label className='flex mb-3 text-lg font-semibold'>Devices</label>
                <div className='flex flex-wrap gap-3'>
                    <DeviceCard icon='far fa-lightbulb' name='TV Main' />
                    <DeviceCard icon='far fa-wifi' name='Wifi' />
                </div>
            </div>
        </>
    )
}

Index.layout = 'manage';
Index.title = 'Overview';