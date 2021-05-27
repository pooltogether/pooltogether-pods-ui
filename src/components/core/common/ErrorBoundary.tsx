import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      I
      return <h3 className='font-normal text-3xl text-white'>Something went wrong.</h3>
    }

    return this.props.children
  }
}

export default ErrorBoundary
