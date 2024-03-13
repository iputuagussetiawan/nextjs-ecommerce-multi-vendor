import { X } from 'lucide-react'
import React from 'react'

export default function FormHeader({title}) {
    return (
        <div className="flex item-center justify-between py-6 px-12 text-slate-800 dark:text-white bg-white dark:bg-slate-600 rounded-lg">
            <h2 className='text-xl'>{title}</h2>
            <button className=''>
                <X/>
            </button>
        </div>
    )
}
