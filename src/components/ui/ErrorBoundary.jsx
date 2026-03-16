import { Component } from 'react';
import ErrorFallback from './ErrorFallback';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error}
          resetErrorBoundary={() => this.setState({ hasError: false, error: null })}
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
