'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

type Props = {
    params:{
        id:string
    }
}

function Report({params}: Props) {
    const query = useSearchParams();
  return (
    <div>
        <Link href={'/'}>&larr; Home</Link>
        <h1>Report</h1>
        <div>Report id:{params.id}</div>
        <p>Query String: {query.get('search')}</p>
        <p>Query String: {query.get('cat')}</p>
    </div>
  )
}

export default Report