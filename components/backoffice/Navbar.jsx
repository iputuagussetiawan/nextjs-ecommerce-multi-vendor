import { AlignJustify, Bell, Menu, Sun, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
    return (
        <div className='flex items-center justify-between bg-slate-800 text-slate-50 h-20 px-8 py-8 fixed top-0 left-60 right-0'>
            {/* icon */}
            <button><AlignJustify/></button>
            {/* 3 icon */}

            <div className="flex space-x-">
                <button><Sun className='text-green-600'/></button>
                <button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg focus:outline-none">
                    <Bell className='text-green-600'/>
                    <span class="sr-only">Notifications</span>
                    <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6">20</div>
                </button>
                <button>
                    <Image src='/image-profile.jpg' alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                </button>
                <DropdownMenu>
                    <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
