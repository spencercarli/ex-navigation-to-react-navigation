import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static navigationOptions = {
    title: 'Screen #3',
  }

  render() {
    return (
      <Container
        backgroundColor="#ad081e"
        onPress={() => this.props.navigation.navigate('Screen4')}
      />
    );
  }
}

export default Screen;
