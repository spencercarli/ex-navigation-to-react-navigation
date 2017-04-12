import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static navigationOptions = {
    title: 'Screen #8',
  }

  render() {
    return (
      <Container
        backgroundColor="#bc5e0b"
        onPress={() => this.props.navigation.navigate('Screen9')}
      />
    );
  }
}

export default Screen;
