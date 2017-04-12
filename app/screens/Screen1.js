import React, { Component } from 'react';
import { Text, Button, Platform } from 'react-native';

import Container from '../components/Container';
import { connectAlert } from '../components/Alert';

class Screen extends Component {
  static navigationOptions = {
    title: 'Screen #1',
  }

  handleAlert = () => {
    this.props.alertWithType('info', 'Hey!', 'Alerting peopleis useful.');
  }

  render() {
    return (
      <Container
        backgroundColor="#027c50"
        onPress={() => this.props.navigation.navigate('Screen2')}
      >
        <Button
          title="Alert the Thing"
          onPress={this.handleAlert}
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      </Container>
    );
  }
}

export default connectAlert(Screen);
