import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static route = {
    navigationBar: {
      title: 'Screen #8',
    }
  }

  render() {
    return (
      <Container
        backgroundColor="#bc5e0b"
        onPress={() => this.props.navigator.push('screen9')}
      />
    );
  }
}

export default Screen;
