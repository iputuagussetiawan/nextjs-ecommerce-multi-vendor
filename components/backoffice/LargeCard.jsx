import { Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({data}) {
    return (
        <div className={`flex items-center flex-col rounded-lg shadow-md p-8 text-white ${data.color}`}> 
            <Layers/>
            <h4>{data.period}</h4>
            <h2 className='text-2xl lg:text-3xl'>{data.sales}</h2>
        </div>
    )
}
