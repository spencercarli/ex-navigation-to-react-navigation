import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static navigationOptions = {
    title: 'Screen #4',
  }

  render() {
    return (
      <Container
        backgroundColor="#9e0f12"
        onPress={() => this.props.navigation.navigate('Screen5')}
      />
    );
  }
}

export default Screen;
