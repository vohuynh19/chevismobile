import type {ReactNode} from 'react';
import {Component} from 'react';
import {setJSExceptionHandler} from 'react-native-exception-handler';

import {log} from '~core/logger';
import {ErrorScreen} from '~core/ui';

type Props = {
  children: ReactNode;
};

type State = {
  error: Error | null;
};

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    error: null,
  };

  componentDidMount() {
    setJSExceptionHandler(error => {
      this.setState({error});
      log.error(error);
    }, false);
  }

  static getDerivedStateFromError(error: Error) {
    return {error};
  }

  componentDidCatch(error: Error) {
    this.setState({error});
    log.error(error);
  }

  render() {
    const {children} = this.props;
    const {error} = this.state;

    if (error) {
      return (
        <ErrorScreen
          subTitle={error.toString()}
          onClose={() => this.setState({error: null})}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
