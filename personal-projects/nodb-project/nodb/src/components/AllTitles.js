import React, { Component } from 'react'
import MovieCard from './MovieCard'

export default class AllTitles extends Component {
    render() {
        const mappedMovies = this.props.movieArr.map(element => (
            <MovieCard
                deleteTitle={this.props.deleteTitle}
                editTitle={this.props.editTitle}
                key={element.id}
                title={element.title}
                director={element.director}
                releaseDate={element.releaseDate}
                image={element.image}
                id={element.id}
                movie={element}
            />

        ))
        return (
            <div className='cards'>
                {mappedMovies}
            </div>
        )
    }
}