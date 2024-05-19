import React from 'react'

const Loading = () => {
    return (
        <div className="layout-height flex  w-full items-center justify-center bg-neutral-100">
            <div className="h-10 w-10 animate-spin rounded-full border-t-8 border-blue-200 bg-neutral-100 outline outline-1"></div>
        </div>
    )
}

export default Loading
