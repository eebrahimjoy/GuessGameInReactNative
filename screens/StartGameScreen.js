import React from 'react';
import {StyleSheet,Text, View, Button} from 'react-native';
import Input from '../components/Input';

const StartGameScreen = props => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>

            <View style={styles.inputContainer}>
                <Text> Select a Number</Text>
                <Input 
                style = {styles.input}
                 blurOnSubmit 
                 autoCapitalize='none' 
                 autoCurrect = {false} 
                 keyboardType = "number-pad" 
                 maxLength = {2}/>

                <View style={styles.buttonContainer}>
                   <View style={styles.butttonn}>
                        <Button title = "Reset" onPress={() => {}} color = '#c717fc'/>
                   </View>
                   <View style={styles.butttonn}>
                        <Button title = "Confirm" onPress={() => {}} color = '#f7287b'/>
                 </View>
                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title:{
        fontSize: 20,
        marginVertical: 10

    },
    inputContainer:{
        width:300,
        maxWidth: '80%',
        shadowColor: 'black',
        alignItems: 'center',
        shadowOffset: {width:0, height:2},
        shadowRadius:6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation:8,
        padding:20,
        borderRadius:10

    },
    buttonContainer:{
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        paddingHorizontal: 15

    },
    butttonn:{
        width:100
    },
    input:{
        width:50,
        textAlign:'center'
    }

});

export default StartGameScreen;