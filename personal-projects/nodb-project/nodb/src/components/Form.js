import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className='input-boxes'>
                <input type="text" placeholder='Title'/><br/>
                <input type="text" placeholder='Director'/><br/>
                <input type="text" placeholder='Release Date'/><br/>
                <input type="text" placeholder='Image'/>
                <button>Submit</button>
            </div>
        )
    }
}