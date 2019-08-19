import React from 'react';
import {Button, StyleSheet, Text, TextInput, View, Image} from "react-native";

import TextInputWithIcon from "../components/textinputs/TextInputWithIcon";
import HeaderWithIcon from "../components/headers/HeaderWithIcon";

const AssignScreen = title => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderWithIcon title={title}
                                src={require('../assests/img/home.png')}
                                onIconPress={() => alert("Icon clicked")}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInputWithIcon placeholder="Product Code"
                                   src={require('../assests/img/square-transparent-dotted.png')}
                                   onIconPress={() => alert("Icon clicked")}
                />
                <TextInput style={styles.input} placeholder="Product Name"/>
                <TextInputWithIcon placeholder="Label Code"
                                   src={require('../assests/img/square-transparent-dotted.png')}
                                   onIconPress={() => alert("Icon clicked")
                                   }/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => alert("clicked")}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    header: {
        width: '90%',
    },

    inputContainer: {
        width: '90%',
        marginVertical: 15
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        paddingLeft: 15,
        marginVertical: 10,
    },
    buttonContainer: {
        width: '90%',
        height: 40,
    }
});

export default AssignScreen;