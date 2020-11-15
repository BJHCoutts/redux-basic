import React from 'react'

export default class App extends React.Component {
  render () {
    return(
      <main>
        <h1>
          {this.props.geod.title || 'Hello World!'}
        </h1>
        {this.props.geod.title ? (
          <button onClick={this.props.closeGeod}>Exit Geod</button>
        ):(
          <button onClick={() => (
            this.props.activateGeod({
              title: 'I am Geo Dude!'
            })
          )}>Click Me!</button>
        )}
      </main>
    )
  }
}