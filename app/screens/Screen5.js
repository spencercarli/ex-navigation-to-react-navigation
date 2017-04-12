import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static navigationOptions = {
    title: 'Screen #5',
  }

  render() {
    return (
      <Container
        backgroundColor="#067a46"
        onPress={() => this.props.navigation.navigate('Screen6')}
      />
    );
  }
}

export default Screen;
