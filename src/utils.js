import React from 'react'
export class OnReady extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.callback()
  }
  render() {
    return this.props.children || null
  }
}
