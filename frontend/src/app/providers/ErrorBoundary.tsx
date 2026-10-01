import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  message: string;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    message: '',
  };

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      message: error.message || 'خطای غیرمنتظره‌ای رخ داد',
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Unhandled UI error', error, info);
  }

  private handleReset = () => {
    this.setState({ hasError: false, message: '' });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="app-canvas mx-auto flex min-h-screen max-w-lg flex-col justify-center gap-4 px-4">
          <Alert variant="error" title="خطای برنامه">
            {this.state.message}
          </Alert>
          <Button onClick={this.handleReset}>تلاش برای بازیابی</Button>
        </div>
      );
    }

    return this.props.children;
  }
}
