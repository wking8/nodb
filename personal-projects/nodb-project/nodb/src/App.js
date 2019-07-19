import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import AllTitles from './components/AllTitles'
import Footer from './components/Footer'
import Form from './components/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieArr: [],
      showForm: false
    }
  }
  addTitle(body) {
    axios.post('/api/movies', body)
      .then(res => {
        this.setState({ movieArr: res.data })
      })
  }
  deleteTitle(id) {
    axios.delete(`/api/movies/${id}`)
      .then(res => {
        this.setState({ movieArr: res.data })
      })
  }
  editTitle(id, body) {
    axios.put(`/api/movies/${id}`, body)
      .then(res => {
        this.setState({ movieArr: res.data })
      })
  }
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }
  componentDidMount() {
    axios.get('/api/movies')
      .then(res => {
        this.setState({
          movieArr: res.data
        })
      })
  }
  render() {
    return (
      <div className="App">
        <Header showForm={this.toggleForm} />
        {this.state.showForm ? (<Form />) : (null)}
        <AllTitles movieArr={this.state.movieArr} />
        <Footer />
      </div>
    )
  }
}

export default App;
