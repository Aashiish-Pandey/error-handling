import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("logging", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>SomeThing went wrong</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
