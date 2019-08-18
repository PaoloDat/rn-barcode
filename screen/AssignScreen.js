import React from 'react';
import {Button, StyleSheet, Text, TextInput, View, Image} from "react-native";

const AssignScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Assign - 1792</Text>
                <Image style={styles.image} source={require('../assests/img/home.png')}/>
            </View>
            <View style={styles.searchSection}>
                <TextInput style={styles.input1} placeholder="Product Code"/>
                <Image style={styles.searchIcon} source={require('../assests/img/square-transparent-dotted.png')}/>
            </View>
            <TextInput style={styles.input} placeholder="Product Name"/>

            <View style={styles.searchSection}>
                <TextInput style={styles.input1} placeholder="Label Code"/>
                <Image style={styles.searchIcon} source={require('../assests/img/square-transparent-dotted.png')}/>
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: {
        width: '90%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },

    input1: {
        width: '90%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        transform: [
            { translateX:  15},
        ],
    },
    buttonContainer: {
        width: '90%',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: 'blue',
        width: '90%',
        height: '10%',
        marginBottom: 10,
        borderRadius: 10
    },
    text: {
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        color: 'white',
        paddingLeft: 20,
        fontSize: 15
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 20
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchIcon: {
        width: 30,
        height: 30,
        transform: [
            { translateX: - 30},
            { translateY: - 5},
        ],
    }
});

export default AssignScreen;