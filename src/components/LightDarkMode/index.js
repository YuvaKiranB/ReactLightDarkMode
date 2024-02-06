// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'light'}

  changeMode = () => {
    const {mode} = this.state

    if (mode === 'light') {
      this.setState(() => ({mode: 'dark'}))
    } else {
      this.setState(() => ({mode: 'light'}))
    }
  }

  getContent = mode => {
    if (mode === 'light') {
      return (
        <div className="card cardLight">
          <h1 className="h1 h1Light">Click To Change Mode</h1>
          {
            // eslint-disable-next-line
            <button className="button buttonLight" onClick={this.changeMode}>
              Light Mode
            </button>
          }
        </div>
      )
    }
    return (
      <div className="card cardDark">
        <h1 className="h1 h1Dark">Click To Change Mode</h1>
        {
          // eslint-disable-next-line
          <button className="button buttonDark" onClick={this.changeMode}>
            Dark Mode
          </button>
        }
      </div>
    )
  }

  render() {
    const {mode} = this.state

    return <div className="main">{this.getContent(mode)}</div>
  }
}

export default LightDarkMode
