import {
    Pressable,
    Text,
    View
} from "react-native";

export default function Task( {styles, task, onTaskSelect, isSelected} ) {
    const handleOnTaskSelect = () => {
        onTaskSelect(task);
    }

    return (
        <Pressable onPress={handleOnTaskSelect}>
                        <View style={[styles.task, isSelected ? styles.completed : styles.unfinished]}>
                            <Text style={styles.taskText}>{task}</Text>
                        </View>
        </Pressable>
    );
}