import { AlignJustify, Bell, Menu, Sun, User } from 'lucide-react'
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between bg-slate-800 text-slate-50 h-16 px-8 py-4 fixed top-0 left-60 right-0'>
            {/* icon */}
            <button><AlignJustify/></button>
            {/* 3 icon */}

            <div className="flex space-x-3">
                <button><Sun/></button>
                <button><Bell/></button>
                <button><User/></button>
            </div>
        </div>
    )
}
