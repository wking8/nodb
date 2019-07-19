import React from 'react'

export default function Header(props) {
    console.log(props)
    return (
        <div className='header'>
            <div className='add-btn'></div>
            <h1 className='app-title'>Top Movies</h1>
            <button onClick={() => props.showForm()}className='add-btn'>Add Title</button>
        </div>
    )
} 