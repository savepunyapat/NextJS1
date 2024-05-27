import React from 'react'
import Link from 'next/link'

type Props = {}

function notfound({}: Props) {
  return (
    <div className='flex min-h-screen items-center justify-center'>
        <div className='flex flex-col space-y-4 w-96 text-start'>
            404 Not found
        </div>
        

    </div>
  )
}

export default notfound