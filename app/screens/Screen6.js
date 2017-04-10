import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static route = {
    navigationBar: {
      title: 'Screen #6',
    }
  }

  render() {
    return (
      <Container
        backgroundColor="#58960c"
        onPress={() => this.props.navigator.push('screen7')}
      />
    );
  }
}

export default Screen;
