/**
 * My To Do List App
 *
 * @format
 */

import { 
  React, useState
} from 'react';

import ToDoForm from './ToDoForm';
import TodoList from './ToDoList';

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

const hardCodedTasks = [
  'Do laundry',
  'Go to gym',
  'Walk dog',
  "Cry in the bathroom"
];

export default function App() {
  const [tasks, setTasks] = useState(hardCodedTasks);

  return (
    <SafeAreaView>
      <TodoList styles={styles} tasks={tasks}/>
      <ToDoForm styles={styles}/>
    </SafeAreaView>
  );
}