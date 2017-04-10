import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static route = {
    navigationBar: {
      title: 'Screen #7',
    }
  }

  render() {
    return (
      <Container
        backgroundColor="#a108cc"
        onPress={() => this.props.navigator.push('screen8')}
      />
    );
  }
}

export default Screen;
