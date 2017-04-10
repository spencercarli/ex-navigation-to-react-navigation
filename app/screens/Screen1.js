import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static route = {
    navigationBar: {
      title: 'Screen #1',
    }
  }

  render() {
    return (
      <Container
        backgroundColor="#027c50"
        onPress={() => this.props.navigator.push('screen2')}
      />
    );
  }
}

export default Screen;
