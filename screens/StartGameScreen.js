import React, { useState } from 'react';
import {
    StyleSheet,
    Text, View,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHadler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
       const chosenNumber = (parseInt(enteredValue));
       if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber > 99){
           Alert.alert('Invalid number!','Number has to be a number between 1 to 99.',
           [{text: 'Okay', style: 'destructive',onPress: resetInputHandler}]
           ) ;
           return;
       }
       setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();

    };

    let confirmedOutput;

    if(confirmed){
        confirmedOutput = (
        <View style={styles.result}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/>
       
        </View>
        );

    }



    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>

                <View style={styles.inputContainer}>
                    <Text> Select a Number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCurrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHadler}
                        value={enteredValue}
                    />

                    <View style={styles.buttonContainer}>
                        <View style={styles.butttonn}>
                            <Button title="Reset" onPress={resetInputHandler} color='#c717fc' />
                        </View>
                        <View style={styles.butttonn}>
                            <Button title="Confirm" onPress={confirmInputHandler} color='#f7287b' />
                        </View>
                    </View>

                </View>

                {confirmedOutput}

            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10

    },
    inputContainer: {
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
    result:{
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
        borderRadius: 10,
        alignItems: 'center'


    },
    buttonContainer: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        paddingHorizontal: 15

    },
    butttonn: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }

});

export default StartGameScreen;