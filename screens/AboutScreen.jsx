import {
    View,
    Text,
} from "react-native";

import {
    useState
} from "react";

import MainLayout from "../layouts/MainLayout"

export default function AboutScreen() {
    const [counter, setCounter] = useState(15);

    return (
        <MainLayout>
            <View>
                <Text>This is the about page</Text>
                <Text onPress={() => setCounter(counter + 5)}
                      style={
                        {
                            fontSize: counter
                        }}>
                    App made by: Garry Jr Dayag
                    </Text>
            </View>
        </MainLayout>
    )
}