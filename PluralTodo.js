// TODO: update deprecated component see https://facebook.github.io/react-native/docs/navigation.html}
import React from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

export default class PluralTodo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native 2',
        },
        {
          task: 'Learn Redux',
        },
      ],
    };

    this.onCancel = this.onCancel.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onAddStarted = this.onAddStarted.bind(this);
    this.onDone = this.onDone.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform',
    });
  }

  onCancel() {
    this.nav.pop();
  }

  onAdd(task) {
    this.state.todos.push({ task });
    this.setState({
      todos: this.state.todos,
    });
    this.nav.pop();
  }

  onDone(todo) {
    const filteredTodos = this.state.todos.filter(filterTodo => filterTodo !== todo);
    this.setState({
      todos: filteredTodos,
    });
  }

  configureScene() { // eslint-disable-line
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  renderScene(route) {
    switch (route.name) {
      case 'taskform': {
        return (
          <TaskForm
            onCancel={this.onCancel}
            onAdd={this.onAdd}
          />
        );
      }
      default:
        return (
          <TaskList
            onAddStarted={this.onAddStarted}
            onDone={this.onDone}
            todos={this.state.todos}
          />
        );
    }
  }

  render() {
    return (
      <Navigator
        ref={((nav) => { this.nav = nav; })}
        configureScene={this.configureScene}
        initialRoute={{ name: 'tasklist', index: 0 }}
        renderScene={this.renderScene}
      />
    );
  }
}
