import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static route = {
    navigationBar: {
      title: 'Screen #5',
    }
  }

  render() {
    return (
      <Container
        backgroundColor="#067a46"
        onPress={() => this.props.navigator.push('screen6')}
      />
    );
  }
}

export default Screen;
