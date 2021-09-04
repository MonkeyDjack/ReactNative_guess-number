import React from "react";
import { View, StyleSheet, Text, TextInput, Button} from "react-native";

const StartGameScreen = props =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Start a new Game</Text>
            <View style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={()=> {}} />
                    <Button title="Confirm" onPress={()=> {}} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },

    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,

    }
})

export default StartGameScreen;