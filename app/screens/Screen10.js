import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static route = {
    navigationBar: {
      title: 'Screen #10',
    }
  }

  render() {
    return (
      <Container
        backgroundColor="#01446b"
        onPress={() => this.props.navigator.push('screen1')}
      />
    );
  }
}

export default Screen;
