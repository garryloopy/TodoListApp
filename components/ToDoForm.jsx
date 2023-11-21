import { useState } from "react";
import {
    View,
    Button,
    TextInput
} from "react-native";

export default function ToDoForm( {styles, addTask} ) {
    const [taskText, setTaskText] = useState("");

    const handleOnButtonPress = () => {
        addTask(taskText);
        setTaskText("");
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
            <Button title="Add" onPress={handleOnButtonPress}/>
        </View>
    )
}