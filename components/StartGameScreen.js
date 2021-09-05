import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard} from "react-native";
import Card from "./Card";
import Colors from "../constants/Colors";
import Input from "./Input";

const StartGameScreen = props =>{

    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = inputText => {
        setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.container}>
            <Text style={styles.title}>Start a new Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input style={styles.input} 
                blurOnSubmit 
                autoCapitilize='none' 
                autoCorrect={false} 
                keyboardType='number-pad' 
                maxLength={2}
                onChangeText={numberInputHandler}
                value = {enteredNumber}  />
                <View style={styles.buttonContainer}>
                    <View style={styles.flexBtn}><Button title="Reset" onPress={()=> {}} color={Colors.accent} /></View>
                    <View style={styles.flexBtn}><Button title="Confirm" onPress={()=> {}} color={Colors.primary} /></View>
                </View>
            </Card>
        </View>
        </TouchableWithoutFeedback>
    );
};

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
    },

    input: {
        width: 50,
        textAlign: 'center'
    }
})

export default StartGameScreen;