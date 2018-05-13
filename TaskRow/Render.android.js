import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import doneImg from '../images/done.png';
import { ALTO_2 } from '../colors';

const localStyle = StyleSheet.create({
  doneButton: {
    borderRadius: 5,
    padding: 5,
  },
});

export default function (styles) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>android: {this.props.todo.task}</Text>
      <TouchableHighlight
        onPress={this.onDonePressed}
        style={localStyle.doneButton}
        underlayColor={ALTO_2}
      >
        <Image
          source={doneImg}
        />
      </TouchableHighlight>
    </View>
  );
}
