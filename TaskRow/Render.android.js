import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';


export default function (styles) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>android: {this.props.todo.task}</Text>
      <TouchableHighlight
        onPress={this.onDonePressed}
        style={styles.buttonDone}
      >
        <Text>Done</Text>
      </TouchableHighlight>
    </View>
  );
}
