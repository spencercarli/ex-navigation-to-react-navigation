import React, { Component } from 'react';
import { Text, Button, Platform } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static route = {
    navigationBar: {
      title: 'Screen #1',
    }
  }

  handleAlert = () => {
    this.props.navigator.showLocalAlert('Alerts are useful', {
      text: { color: '#fff' },
      container: { backgroundColor: '#F44336' },
    });
  }

  render() {
    return (
      <Container
        backgroundColor="#027c50"
        onPress={() => this.props.navigator.push('screen2')}
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

export default Screen;
