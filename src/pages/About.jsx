import React from 'react'
import { Outlet } from 'react-router'
import { Link } from "react-router";
export default function About() {
  return (
    <div className='flex gap-5'>
        <div className=' m-5  pl-5'>

            <ul>
                <il>
                    <Link className='p-3 border hover:bg-gray-400' to={'/About/company'}>Aout US</Link>
                </il>
                <il>

                    <Link className='p-3 border  hover:bg-gray-400' to={'/About/people'}>Aout people</Link>
                </il>
            </ul>
        </div>

        <Outlet/>    
    </div>
  )
}
