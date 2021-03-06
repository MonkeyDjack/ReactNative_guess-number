import React, {useState, useRef, useEffect} from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";


const generateRandomBetween = (min, max, exclude) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max-min) + min);

    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else{
        return rndNum;
    }
}

const GameScreen = props =>{
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice)
    );

    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentGreat = useRef(99);

    const {userChoice, onGameOver} = props;

    useEffect (() => {
        if( currentGuess === userChoice){
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);
    const nextGuessHandler = direction =>{
        if((direction === "lower" && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice )){
            Alert.alert('Don\'t cheat!', ' Did you forget your number?', [{text: 'Sorry!', style: 'cancel'}
        ]);
        return;
        }
        
        if(direction === 'lower') {
            currentGreat.current = currentGuess;
        }
        else{
            currentLow.current = currentGuess;
        }
       const nextNumber = generateRandomBetween(currentLow.current, currentGreat.current, currentGuess);
       setCurrentGuess(nextNumber);
       setRounds(curRounds => curRounds +1);
    };
    
    return(
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <Button title="Lower" onPress={nextGuessHandler.bind(this, 'lower')}></Button>
                <Button title="Greater" onPress={nextGuessHandler.bind(this, 'greater')}></Button>

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        alignContent: 'center',
        maxWidth: '80%'
    }
});

export default GameScreen;