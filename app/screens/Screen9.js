import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static route = {
    navigationBar: {
      title: 'Screen #9',
    }
  }

  render() {
    return (
      <Container
        backgroundColor="#028e15"
        onPress={() => this.props.navigator.push('screen10')}
      />
    );
  }
}

export default Screen;
