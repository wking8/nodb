import React, { Component } from 'react'

export default class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieArr: [],
            editing: false,
            title: this.props.title,
            director: this.props.director,
            releaseDate: this.props.releaseDate,
            image: ''
        }
    }
    handleChangeTitle = (event) => {
        this.setState({ title: event.target.value })
    }
    handleChangeDirector = (event) => {
        this.setState({ director: event.target.value })
    }
    handleChangeReleaseDate = (event) => {
        this.setState({ releaseDate: event.target.value })
    }
    handleChangeImage = (event) => {
        this.setState({ image: event.target.value })
    }
    toggleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }
    render() {
        console.log(this.props)
        return (
            <section className='movie-card'>
                <p>
                    {this.props.title}
                </p>
                <p>
                    {this.props.director}
                </p>
                <p>
                    {this.props.releaseDate}
                </p>
                <img src={this.props.image} alt="" />

                {this.state.editing ?
                    <div className='editing-box'>
                        <input type="text" value={this.state.title} onChange={this.handleChangeTitle} placeholder='Title' /><br />
                        <input type="text" value={this.state.director} onChange={this.handleChangeDirector} placeholder='Director' /><br />
                        <input type="text" value={this.state.releaseDate} onChange={this.handleChangeReleaseDate} placeholder='Release Date' /><br />
                        <input type="text" value={this.state.image} onChange={this.handleChangeImage} placeholder='Image' />
                        <button
                            onClick={() => {this.props.editTitle(this.props.id, this.state); this.toggleEdit()}}>
                            Save
                        </button>
                    </div>
                    :
                    <div>
                        <button
                            onClick={() => this.toggleEdit()}
                            className='edit-btn'>Edit
                        </button>
                    </div>}
                <button
                    onClick={() => this.props.deleteTitle(this.props.id)}
                    className='delete-btn'>X
                </button>
            </section>
        )
    }
}