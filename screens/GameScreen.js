import React, { useState } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import NumberContainer from'../components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return rndNum;
    }
}

const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
        );

        return (
            <View style = {styles.screen}>
                <Text> Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style= {styles.container}>
            <Button title = "LOWER" onPress={() => {}}/>
            <Button title = "GREATER" onPress={() => {}}/>
        </View>

            </View>
        )
    };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
        shadowColor: 'black',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 8,
        padding: 20,
        borderRadius: 10
    },
    screen:{
        flex:1,
        padding: 10,
        alignItems: 'center'
    }

});

export default GameScreen;