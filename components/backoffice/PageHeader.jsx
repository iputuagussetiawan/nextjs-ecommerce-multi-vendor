import React from 'react'
import Heading from '@/components/backoffice/Heading'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default function PageHeader({heading,linkTitle, href}) {
    return (
        <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 py-4">
            <Heading title={heading}/>
            <Link  href={href} className='text-white bg-lime-600 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-600 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-lime-600 me-2'>
                <Plus/>
                <span>{linkTitle}</span>
            </Link>
        </div>
    )
}
