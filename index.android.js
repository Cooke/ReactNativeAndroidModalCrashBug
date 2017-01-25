import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Modal, ActivityIndicator } from 'react-native';

export default class Crasher extends Component {
  constructor() {
    super();
    this.state = { showModal: false };
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.showModal} title="DONT CLICK ME!" color="red" />
        <Modal visible={this.state.showModal} style={styles.modal} onRequestClose={() => { } }>
          <Text>Master, I'm here to serve...</Text>
        </Modal>
      </View>
    );
  }

  showModal = () => {
    this.setState({ showModal: true });
    setTimeout(this.hideModal, 1);
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('RNCrashBug', () => Crasher);
