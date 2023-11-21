import {
    View,
    Text,
    StyleSheet
} from "react-native";

const styles = StyleSheet.create(
    {
        container: {
            borderTopWidth: 2,
            marginTop: 20,
            paddingTop: 20
        }
    }
)

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text>This is a footer</Text>
        </View>
    )
}