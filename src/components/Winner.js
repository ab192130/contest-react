import React from 'react'

const Winner = ({ data }) => {
    return (
        <div className="justify-center text-center text-4xl space-y-3 shadow-md border border-gray-50 p-10 rounded-3xl">
            <img src={`https://i.pravatar.cc/150?u=${data.email}`} 
            className="bg-gray-100 w-20 h-20 rounded-full mx-auto select-none" alt="" />

            <div className="font-bold">
                {data.email}
            </div>
        </div>
    )
}

export default Winner
