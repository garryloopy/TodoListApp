import { useState } from "react";
import {
    View,
    Button,
    TextInput
} from "react-native";

import tasks from "../data/tasks.json"

export default function ToDoForm( {styles, addTask} ) {
    const [taskText, setTaskText] = useState("");

    const [randomTasks, setRandomTasks] = useState(tasks.tasks);

    const handleOnButtonPress = () => {
        addTask(taskText);
        setTaskText("");
    }

    const handleOnAddRandomTask = () =>{
        const randomPos = Math.floor(Math.random() * randomTasks.length);
        setTaskText(randomTasks[randomPos]);
    }
    return (
        <View style={styles.form}>
            <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            onChangeText={
                (text) => setTaskText(text)
            }
            value={taskText}
            />
            <View style={{display: "flex", flexDirection: "column", gap: 10}}>
                <Button title="Add" onPress={handleOnButtonPress}/>
                <Button title="Generate random task" onPress={handleOnAddRandomTask}/>
            </View>
        </View>
    )
}