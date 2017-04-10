import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static route = {
    navigationBar: {
      title: 'Screen #4',
    }
  }

  render() {
    return (
      <Container
        backgroundColor="#9e0f12"
        onPress={() => this.props.navigator.push('screen5')}
      />
    );
  }
}

export default Screen;
