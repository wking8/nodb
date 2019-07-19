import React, { Component } from 'react'
import MovieCard from './MovieCard'

export default class AllTitles extends Component {
    render() {
        const mappedMovies = this.props.movieArr.map(element => (
            <MovieCard key={element.id} title={element.title}/>
        ))
        return (
            <div className='cards'>
                {mappedMovies}
            </div>
        )
    }
}