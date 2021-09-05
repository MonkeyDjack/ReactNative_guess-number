import React from "react";
import { View, StyleSheet, Text, TextInput, Button} from "react-native";
import Card from "./Card";

const StartGameScreen = props =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Start a new Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <View style={styles.flexBtn}><Button title="Reset" onPress={()=> {}} color="#c717fc" /></View>
                    <View style={styles.flexBtn}><Button title="Confirm" onPress={()=> {}} color="#f7287b" /></View>
                </View>
            </Card>
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

    },
    flexBtn:{
        width: '40%',
        textAlign: 'center',
        alignItems: 'center',
    }
})

export default StartGameScreen;