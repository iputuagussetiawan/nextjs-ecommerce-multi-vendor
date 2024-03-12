"use client"
import { AlignJustify, Bell, LayoutDashboard, LogOut, Menu, Settings, Sun, User, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeSwitcherBtn from '../ThemeSwitcherBtn'


export default function Navbar({setShowSidebar, showSidebar}) {
    return (
        <div className='fixed top-0 left-0 flex items-center justify-between   sm:left-64 right-0  bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-50 h-20 px-8 py-4 shadow-sm z-50 '>
            {/* icon */}
            <button onClick={()=>setShowSidebar(!showSidebar)} className='text-lime-700 dark:text-lime-500'><AlignJustify/></button>
            {/* 3 icon */}

            <div className="flex space-x-3">
                <ThemeSwitcherBtn/>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg focus:outline-none">
                            <Bell className='text-lime-700 dark:text-lime-500'/>
                            <span className="sr-only">Notifications</span>
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6">20</div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="px-4 py-2 pr-8">
                        <DropdownMenuLabel>Notification</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <div className='flex items-center space-x-2'>
                                <Image src='/image-profile.jpg' alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                                <div className="flex flex-col space-y-1">
                                    <p>teste notification</p>
                                    <div className="flex items-center space-x-2">
                                        <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                                        <p>Dec 12 2024 - 12:40PM</p>
                                    </div>
                                </div>
                                <button><X/></button>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <div className='flex items-center space-x-2'>
                                <Image src='/image-profile.jpg' alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                                <div className="flex flex-col space-y-1">
                                    <p>teste notification</p>
                                    <div className="flex items-center space-x-2">
                                        <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                                        <p>Dec 12 2024 - 12:40PM</p>
                                    </div>
                                </div>
                                <button><X/></button>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <div className='flex items-center space-x-2'>
                                <Image src='/image-profile.jpg' alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                                <div className="flex flex-col space-y-1">
                                    <p>teste notification</p>
                                    <div className="flex items-center space-x-2">
                                        <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                                        <p>Dec 12 2024 - 12:40PM</p>
                                    </div>
                                </div>
                                <button><X/></button>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                    <div className='focus:outline-none'>
                        <Image src='/image-profile.jpg' alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                    </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="px-4 py-2 pr-8">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <button className='flex items-start space-x-2'>
                                <LayoutDashboard className='mr-2 h-4 w-4'/>
                                <span>Profile</span>
                            </button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button className='flex items-start space-x-2'>
                                <Settings className='mr-2 h-4 w-4'/>
                                <span>Setting</span>
                            </button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button className='flex items-start space-x-2'>
                                <LogOut className='mr-2 h-4 w-4'/>
                                <span>Logout</span>
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
