import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static navigationOptions = {
    title: 'Screen #10',
  }

  render() {
    return (
      <Container
        backgroundColor="#01446b"
        onPress={() => this.props.navigation.navigate('Screen1')}
      />
    );
  }
}

export default Screen;
