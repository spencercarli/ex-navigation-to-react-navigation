import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static navigationOptions = {
    title: 'Screen #9',
  }

  render() {
    return (
      <Container
        backgroundColor="#028e15"
        onPress={() => this.props.navigation.navigate('Screen10')}
      />
    );
  }
}

export default Screen;
