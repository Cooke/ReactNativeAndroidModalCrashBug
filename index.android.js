import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Modal, ActivityIndicator } from 'react-native';
import { CustomModal } from "./workaroundModal";

export default class Crasher extends Component {
  constructor() {
    super();
    this.state = { showModal: false, showWorkAroundModal: false };
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.showModal} title="DONT CLICK ME!" color="red" />
        <Button onPress={this.showWorkAroundModal} title="SAFE TO CLICK ME!" color="green" />
        <Modal visible={this.state.showModal} onRequestClose={() => { } }>
          <Text>Master, I`m here to serve...</Text>
        </Modal>
        <CustomModal visible={this.state.showWorkAroundModal} onRequestClose={() => { } }>
          <Text>Master, I`m here to serve...</Text>
        </CustomModal>
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

  showWorkAroundModal = () => {
    this.setState({ showWorkAroundModal: true });
    setTimeout(this.hideWorkAroundModal, 1);
  }

  hideWorkAroundModal = () => {
    this.setState({ showWorkAroundModal: false });
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
