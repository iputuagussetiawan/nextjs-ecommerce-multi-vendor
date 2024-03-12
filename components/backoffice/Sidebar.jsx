import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
    return (
        <div className='bg-slate-100 text-slate-700 dark:bg-slate-700 space-y-6 w-60 h-screen dark:text-slate-50 fixed left-0 top-0 shadow-md'>
            <Link className='mb-6' href="">Logo</Link>
            <div className="flex flex-col space-y-3 p-3">
                <Link href="">Dashboard</Link>
                <Link href="">Catalogue</Link>
                <Link href="">Customers</Link>
                <Link href="">Markets</Link>
                <Link href="">Farmers</Link>
                <Link href="">Order</Link>

                <Link href="">Staff</Link>
                <Link href="">Settings</Link>
                <Link href="">Online Store</Link>
            </div>

        </div>
    )

}
