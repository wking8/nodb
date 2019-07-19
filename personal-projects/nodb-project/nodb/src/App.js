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
      showAdd: false
    }
  }
  AddTitle(body) {
    axios.post('/api/movies', body).then(res => {
      this.setState({ movieArr: res.data })
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
        <Header />
        <AllTitles movieArr={this.state.movieArr} />
        {this.state.showAdd ?
          (<Form />)
          :
          (null)}
        <Footer />
      </div>
    )
  }
}

export default App;
