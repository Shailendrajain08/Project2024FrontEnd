import { Component, ErrorInfo } from 'react';

export class ApplicationErrorBoundary extends Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): { hasError: boolean } {
    // Update state so the next render will show the fallback UI.
    console.group('ApplicationErrorBoundary');
    console.error(error);
    console.groupEnd();
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.group('ApplicationErrorBoundary ErrorInfo');
    console.error(error);
    console.error(errorInfo);
    console.groupEnd();
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
