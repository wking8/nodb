import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            director: '',
            releaseDate: '',
            image: ''
        }
    }
    handleAddTitle = (event) => {
        this.setState({ title: event.target.value })
    }
    handleAddDirector = (event) => {
        this.setState({ director: event.target.value })
    }
    handleaddReleaseDate = (event) => {
        this.setState({ releaseDate: event.target.value })
    }
    handleAddImage = (event) => {
        this.setState({ image: event.target.value })
    }
    render() {
        return (    
            <div className='input-boxes'>
                <input type="text" value={this.state.value} onChange={this.handleAddTitle} placeholder='Title' /><br />
                <input type="text" value={this.state.value} onChange={this.handleAddDirector} placeholder='Director' /><br />
                <input type="text" value={this.state.value} onChange={this.handleaddReleaseDate} placeholder='Release Date' /><br />
                <input type="text" value={this.state.value} onChange={this.handleAddImage} placeholder='Image' />
                <button
                    onClick={() => this.props.addTitle(this.state)}
                    >Submit</button>
            </div>
        )
    }
}