import {
    ScrollView,
    Button
} from "react-native";

import Task from "./Task";

import { useState } from "react";

export default function TodoList( {styles, tasks, onTaskDelete} ) {
    const [selectedTasks, setSelectedTasks] = useState([]);

    const handleOnTaskSelect = (task) => {
        if (selectedTasks.includes(task)) {
            setSelectedTasks(
                selectedTasks.filter((currentTask) => currentTask != task)
            )
            return;
        }

        setSelectedTasks(
            [
                ...selectedTasks,
                task
            ]
        )
    }

    const handleOnTaskDelete = () => {
        onTaskDelete(selectedTasks);
        setSelectedTasks([]);
    }

    return (
        <ScrollView>
            {
                tasks.map(
                    (task) => (
                        <Task styles={styles} 
                              task={task} 
                              key={task}
                              isSelected={selectedTasks.includes(task)}
                              onTaskSelect={handleOnTaskSelect}/>
                    )
                )
            }
            <Button title={selectedTasks.length <= 0 ? "No tasks selected" : `Delete ${selectedTasks.length} tasks`}  onPress={handleOnTaskDelete}/>
        </ScrollView>
    )
}