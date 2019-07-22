import React from 'react'

export default function Header(props) {
    return (
        <div className='header'>    
            <h1 className='app-title'>Top Movies</h1>
            <button onClick={() => props.showForm()}className='add-btn'>Add Title</button>
        </div>
    )
} 