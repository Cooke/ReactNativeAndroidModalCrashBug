import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Modal, ActivityIndicator } from 'react-native';

// This is a work around to https://github.com/facebook/react-native/issues/10845
export class CustomModal extends React.Component {
  updateVisibleStateTimer;

  constructor(props) {
    super();
    this.state = { isVisible: props.visible };
  }

  componentWillReceiveProps(nextProps) {
    if (this.updateVisibleStateTimer !== null) {
      clearTimeout(this.updateVisibleStateTimer);
    }

    this.updateVisibleStateTimer = setTimeout(this.updateVisibleState, 100);
  }

  render() {
    let props = this.props;

    return (
      <Modal {...props} ref={undefined} visible={this.state.isVisible}>
        {props.children}
      </Modal>
    )
  }

  updateVisibleState = () => {
    this.setState({ isVisible: this.props.visible });
    this.updateVisibleStateTimer = null;
  }
}