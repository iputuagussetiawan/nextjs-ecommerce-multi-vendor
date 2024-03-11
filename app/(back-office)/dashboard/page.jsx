import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import React from 'react'

export default function page() {
    return (
        <div>
            <Heading title ="Dashboard Overview"/>
            {/* Large Card */}
            <LargeCards/>
            {/* small card */}
            <SmallCards/>
            {/* Carts */}
            {/* Recents Order Table */}
        </div>
    )
}
