import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = props =>{

    const [enteredNumber, setEnteredNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState();
    const numberInputHandler = inputText => {
        setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () =>{
        setEnteredNumber('');
    }

    const confirmInputHandler = () =>{
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!', 'Number has to be a number between 1-99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
           
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber)
        setEnteredNumber('');
        Keyboard.dismiss();
    }

    let confirmedOutput;
    if(confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title='START GAME' onPress={() => props.onStartGame(selectedNumber)}></Button>
            </Card>
        )
    }

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
                    <View style={styles.flexBtn}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent} /></View>
                    <View style={styles.flexBtn}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} /></View>
                </View>
            </Card>
            {confirmedOutput}
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
    },

    summaryContainer:{
        marginTop: 20,
        alignItems: 'center',
    }
})

export default StartGameScreen;