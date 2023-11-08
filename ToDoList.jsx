import {
    Pressable,
    ScrollView,
    Text,
    View,
} from "react-native";


export default function TodoList( {styles, tasks} ) {

    return (
        <ScrollView>

            {
                tasks.map(
                    (task) => (
                        <Pressable>
                            <View style={[styles.task, styles.completed]}>
                                <Text style={styles.taskText}>{task}</Text>
                            </View>
                        </Pressable>
                    )
                )
            }
        </ScrollView>
    )
}