import React, { Component } from 'react';
import { Text, Platform } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static navigationOptions = {
    title: 'Screen #1',
  }

  render() {
    return (
      <Container
        backgroundColor="#027c50"
        onPress={() => this.props.navigation.navigate('Screen2')}
      />
    );
  }
}

export default Screen;
