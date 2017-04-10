import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static route = {
    navigationBar: {
      title: 'Screen #3',
    }
  }

  render() {
    return (
      <Container
        backgroundColor="#ad081e"
        onPress={() => this.props.navigator.push('screen4')}
      />
    );
  }
}

export default Screen;
