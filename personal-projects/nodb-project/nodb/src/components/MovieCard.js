import React, { Component } from 'react'

export default class MovieCard extends Component {
    render() {
        return (
            <div className='movie-card'>
                <p>
                    {this.props.title}
                </p>
            </div>
        )
    }
}