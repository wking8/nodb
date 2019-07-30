import React from 'react';
import './App.css';
import axios from 'axios'
import { async } from 'q';

class App extends React.Component {
  state = {
    username: '',
    input: '',
    points: null
  }
  handleChange = e => {
    this.setState({
      input: e.target.value
    })
  }
  login = async () => {
    const res = await axios.post('/auth/login', { username: this.state.input })
    this.setState({
      username: res.data
    })
  }
  getPoints = async () => {
    try {
      const res = await axios.get('/api/points')
      this.setState({ points: res.data })
    } catch (error) {
      console.log(error.message)
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.username ? (
          <h1>{this.state.username}</h1>
        ) : (
            <h1>Login here</h1>
          )}
        <input
          type="text"
          placeholder='Username'
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={this.login}>Login</button>

        {this.state.username ? (
          <div>
            <button onClick={() => this.getPoints}>Get points!</button>
            {this.state.points ? (
              <div>
                <h2>Points</h2>
                <h3>{this.state.points}</h3>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
