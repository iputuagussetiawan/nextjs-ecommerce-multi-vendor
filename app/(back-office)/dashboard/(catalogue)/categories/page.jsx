
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import React from 'react'
export default function page() {
    return (
        <div>
            {/* Header */}
            <PageHeader heading="Categories" href="/dashboard/categories/new" linkTitle="New Category" />
            {/* Table Action */}
            {/* Export Search Bulk delete */}
            <TableActions/>

            <div className="py-8">
                <h2>Table</h2>
            </div>
        </div>
    )
}
