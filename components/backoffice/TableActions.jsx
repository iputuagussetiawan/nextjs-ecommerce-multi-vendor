import { Download, Search, Trash2 } from 'lucide-react'
import React from 'react'
export default function TableActions() {
    return (
        <div>
            <div className="flex gap-8 items-center justify-between py-6 px-6 bg-white dark:bg-slate-700  rounded-lg mt-8">
                <button className="relative inline-flex items-center justify-center py-2 px-4 space-x-3 overflow-hidden text-sm font-medium text-lime-500 rounded-lg group bg-white dark:bg-slate-800 dark:hover:text-white border border-lime-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <Download className='w-5 h-5'/> 
                    <span>Export</span>
                </button>
                <div className=" flex-grow">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <Search className='w-5 h-5 text-lime-500 dark:text-white'/>
                        </div>
                        <input type="text" id="table-search" className="block w-full pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500" placeholder="Search for items"/>
                    </div>
                </div>
                <button className='relative inline-flex items-center justify-center py-2 px-4 space-x-3 overflow-hidden text-sm font-medium text-white rounded-lg group bg-red-600 dark:bg-red-600 dark:hover:text-white border border-red-600 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                    <Trash2 className='w-5 h-5'/>
                    <span>Delete</span>
                </button>
            </div>
        </div>
    )
}
