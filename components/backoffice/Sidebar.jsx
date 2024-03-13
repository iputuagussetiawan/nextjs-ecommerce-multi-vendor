"use client"
import { Box, BoxIcon, Boxes, Building2, ChevronDown, ChevronRight, CircleDollarSign, Layout, LayoutGrid, LayoutList, ListOrdered, LogOut, Map, MonitorPlay, ScanSearch, SendToBack, Settings, Store, Tractor, User, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function Sidebar({showSidebar, setShowSidebar}) {
    const pathname=usePathname();
    const [openMenu,setOpenMenu]=useState(false)
    const sidebarLinks=[
        {
            title:"Catalogue",
            icon:Box,
            link:"/dashboard/catalogue"
        },
        {
            title:"Customers",
            icon:Users,
            link:"/dashboard/customers"
        },
        {
            title:"Markets",
            icon:Map,
            link:"/dashboard/markets"
        },
        {
            title:"Farmers",
            icon:Tractor,
            link:"/dashboard/farmers"
        },
        {
            title:"Order",
            icon:ListOrdered,
            link:"/dashboard/order"
        },
        {
            title:"Staff",
            icon:User,
            link:"/dashboard/staff"
        },
        {
            title:"Settings",
            icon:Settings,
            link:"/dashboard/settings"
        },

        {
            title:"Community",
            icon: Building2,
            link:"/dashboard/community"
        },
        {
            title:"Wallet",
            icon:CircleDollarSign,
            link:"/dashboard/wallet"
        },



        {
            title:"Online Store",
            icon:Store,
            link:"/dashboard/store"
        },
    ]

    const catalogueLinks=[
        {
            title:"Products",
            icon:Boxes,
            link:"/dashboard/products"
        },
        {
            title:"Categories",
            icon:LayoutList,
            link:"/dashboard/categories"
        },
        {
            title:"Attributes",
            icon:SendToBack,
            link:"/dashboard/attributes"
        },
        {
            title:"Coupons",
            icon:ScanSearch,
            link:"/dashboard/coupons"
        },
        {
            title:"Store Slider",
            icon:MonitorPlay,
            link:"/dashboard/sliders"
        }
    ]
    return (
        <div className={showSidebar?"sm:block fixed mt-20 sm:mt-0 left-0 top-0 bg-white text-slate-700 dark:bg-slate-700 space-y-6 w-64 h-screen dark:text-slate-50 shadow-md overflow-y-auto":"hidden sm:block fixed mt-20  sm:mt-0 left-0 top-0 bg-white text-slate-700 dark:bg-slate-700 space-y-6 w-64 h-screen dark:text-slate-50 shadow-md overflow-y-auto"}>
            <Link className='mb-6 p-3' href="">
                <Image width={270} height={60} alt='logo' src="/logo.png"/>
            </Link>
            <div className="flex flex-col space-y-3">
                <Link onClick={()=>setShowSidebar(false)} href="/dashboard" className={pathname==="/dashboard"?"flex items-center space-x-3 py-2 px-6 border-l-8 border-lime-500 text-lime-500" :"flex items-center space-x-3 py-2 px-6"}>
                    <LayoutGrid />
                    <span>Dashboard</span>
                </Link>
                <Collapsible className='py-2 px-6'>
                    <CollapsibleTrigger onClick={()=>setOpenMenu(!openMenu)}>
                        <div className='flex items-center space-x-6 py-2'>
                            <div className="flex  items-center space-x-3">
                                <BoxIcon/>
                                <span>Catalogue</span>
                            </div>
                            {openMenu? <ChevronDown/>: <ChevronRight/>}
                        </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className='px-4 py-4 pl-6 bg-slate-100  dark:bg-slate-800 rounded-md'>
                        {
                            catalogueLinks.map((item,i)=>{
                                const Icon=item.icon
                                return(
                                    <Link onClick={()=>setShowSidebar(false)} key={i} href={item.link} className={item.link===pathname?"flex items-center text-sm space-x-3 py-2  text-lime-500" :"flex text-sm items-center space-x-3 py-2"}> 
                                        <Icon className='w-4 h-4' />
                                        <span>{item.title}</span>
                                    </Link>
                                )
                            })
                        }
                    </CollapsibleContent>
                </Collapsible>
                {
                    sidebarLinks.map((item,i)=>{
                        const Icon=item.icon
                        return(
                            <Link onClick={()=>setShowSidebar(false)} key={i} href={item.link} className={item.link===pathname?"flex items-center space-x-3 py-2 px-6 border-l-8 border-lime-500 text-lime-500" :"flex items-center space-x-3 py-2 px-6"}>
                                <Icon />
                                <span>{item.title}</span>
                            </Link>
                        )
                    })
                }
                <div className='py-2 px-6'>
                    <button className='w-full bg-red-500 text-white flex items-center space-x-3 px-6 py-2 rounded-md'>
                        <LogOut/>
                        <span>Logout</span>
                    </button>
                </div>
                
            </div>

        </div>
    )

}
