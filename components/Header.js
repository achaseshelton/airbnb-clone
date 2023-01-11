import Image from 'next/image';
import { MagnifyingGlassIcon, GlobeAltIcon, UserCircleIcon, UsersIcon, Bars3Icon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange, DateRangePicker } from 'react-date-range';

function Header(){
  const [searchInput, setSearchInput] = useState("");
  const [starDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: starDate,
    endDate: endDate,
    key: 'selection'
  }

  const dateRange = (ranges) => {
    setStartDate(ranges.selection.starDate)
    setEndDate(ranges.selection,endDate)
  }
  
    return (
      <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        {/* Left */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image
                src="https://links.papareact.com/qd3"
                layout='fill'
                objectFit='contain'
                objectPosition='left'
            />
        </div>

        {/* Middle */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
            <input 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text" placeholder="Start your search" className='pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400' />
            <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center justify-end'>
            <p className='hidden md:inline cur'>Become a host</p>
            <GlobeAltIcon className='h-6 cursor-pointer' />

            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                <Bars3Icon className='h-6 cursor-pointer' />
                <UserCircleIcon className='h-6 cursor-pointer' />
            </div>
        </div>

        {searchInput && (
          <div className='flex flex-col col-span-3 mx-auto'>
            <DateRangePicker 
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={dateRange}
            />
          </div>
        )}
      </header>
    )
  }


export default Header