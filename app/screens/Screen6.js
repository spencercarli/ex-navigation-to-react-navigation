import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static navigationOptions = {
    title: 'Screen #6',
  }

  render() {
    return (
      <Container
        backgroundColor="#58960c"
        onPress={() => this.props.navigation.navigate('Screen7')}
      />
    );
  }
}

export default Screen;
