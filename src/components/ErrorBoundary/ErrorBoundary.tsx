import React, {Component} from 'react';

import {ErrorIndicator} from './components/ErrorIndicator';

type IState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
};

type IProps = {
  children: React.ReactNode;
};

export class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render(): React.ReactNode {
    const {error, errorInfo, hasError} = this.state;

    if (hasError) {
      return <ErrorIndicator error={error} errorInfo={errorInfo} />;
    }
    return this.props.children;
  }
}
