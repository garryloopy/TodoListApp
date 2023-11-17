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
  Alert
} from 'react-native';

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  unfinished: {
    backgroundColor: '#f9f9f9',
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

  const handleAddTask = (task) => {
    if (tasks.some((currentTask) => currentTask === task)) {
      return Alert.alert(
        'Duplicate task',
        `${task} is already on your list`,
        [
          {
            text: 'Sounds good',
            style: 'cancel',
          },
        ],
      );
    }

    setTasks(
      [...tasks, task]
    )
  }

  const handleOnTaskDelete = (tasksToBeDeleted) => {
    setTasks(
      tasks.filter((currentTask) => !tasksToBeDeleted.includes(currentTask))
    );
  }

  return (
    <SafeAreaView>
      <TodoList styles={styles} tasks={tasks} onTaskDelete={handleOnTaskDelete}/>
      <ToDoForm styles={styles} addTask={handleAddTask}/>
    </SafeAreaView>
  );
}