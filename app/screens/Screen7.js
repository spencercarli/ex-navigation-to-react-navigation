import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static navigationOptions = {
    title: 'Screen #7',
  }

  render() {
    return (
      <Container
        backgroundColor="#a108cc"
        onPress={() => this.props.navigation.navigate('Screen8')}
      />
    );
  }
}

export default Screen;
