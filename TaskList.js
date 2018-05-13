import React from 'react';
import PropTypes from 'prop-types';
import {
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import TaskRow from './TaskRow/Component';

import {
  ALABASTER,
  CERULEAN_1,
  WILD_SAND_1,
  MINE_SHAFT_1,
} from './colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: WILD_SAND_1,
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    height: 60,
    borderColor: CERULEAN_1,
    borderWidth: 2,
    backgroundColor: MINE_SHAFT_1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: ALABASTER,
    fontSize: 20,
    fontWeight: '600',
  },
});

class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(props.todos),
    };
  }

  componentWillReceiveProps(nextProps) {
    const dataSource = this
      .state
      .dataSource
      .cloneWithRows(nextProps.todos);

    this.setState({ dataSource });
  }

  renderRow = todo =>
    (<TaskRow
      onDone={this.props.onDone}
      todo={todo}
    />);


  render() {
    return (
      <View style={styles.container}>
        <ListView
          key={this.props.todos}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
        <TouchableHighlight
          onPress={this.props.onAddStarted}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add one</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TaskList.propTypes = {
  onAddStarted: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskList;
