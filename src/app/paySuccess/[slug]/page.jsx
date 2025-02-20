"use client";
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams();
    console.log(params)
  return (
    <div className='text-9xl pt-40'>Payment Succes of {params.reference_id}</div>
  )
}

export default page