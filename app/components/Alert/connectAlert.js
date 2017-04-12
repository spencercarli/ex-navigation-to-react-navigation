import React, { PropTypes, Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

const connectAlert = (WrappedComponent) => {
  class ConnectedAlert extends Component {
    render() {
      const { props, context } = this;
      return (
        <WrappedComponent
          {...props}
          alertWithType={context.alertWithType}
          alert={context.alert}
        />
      );
    }
  }

  ConnectedAlert.contextTypes = {
    alertWithType: PropTypes.func,
    alert: PropTypes.func,
  };

  return hoistNonReactStatic(ConnectedAlert, WrappedComponent);
}

export default connectAlert;
