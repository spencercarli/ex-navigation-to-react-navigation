import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static route = {
    navigationBar: {
      title: 'Screen #1',
    }
  }

  handleAlert = () => {
    this.props.navigator.showLocalAlert('Alertin the alerters', {
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
          color="#fff"
        />
      </Container>
    );
  }
}

export default Screen;
