import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static navigationOptions = {
    title: 'Screen #2',
  }

  render() {
    return (
      <Container
        backgroundColor="#c95e0c"
        onPress={() => this.props.navigation.navigate('Screen3')}
      />
    );
  }
}

export default Screen;
