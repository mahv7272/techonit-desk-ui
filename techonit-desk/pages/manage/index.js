import Image from 'next/image'
import Link from 'next/link'
import DeviceControler from '../../components/manage/device/deviceControlerCard'
import ReportCard from '../../components/manage/Report/reportCard'

export default function Index() {
    return (
        <>
            <div className='mb-5'>
                <label className='text-xl font-extrabold'>Overview</label>
            </div>

            <div>
                <label className='flex mb-3 text-lg font-bold'>Sensor Reports</label>
                <div className='flex flex-wrap gap-3'>
                    <ReportCard name='Thermometer' icon='' value={15} scale='C' />
                </div>
            </div>
            <div>
                <label className='flex mb-3 text-lg font-bold'>Devices</label>
                <div className='flex flex-wrap gap-3'>
                    <DeviceControler icon='far fa-lightbulb' name='TV Main' />
                    <DeviceControler icon='far fa-wifi' name='Wifi' />
                    <DeviceControler icon='far fa-fan' name='Innter Fan' />
                    <DeviceControler icon='fas fa-thermometer-half' name='Heater' />
                </div>
            </div>
        </>
    )
}

Index.layout = 'manage';
Index.title = 'Overview';