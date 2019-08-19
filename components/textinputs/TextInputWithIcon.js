import React from 'react';
import {Image, StyleSheet, TextInput, View, TouchableOpacity} from "react-native";

const TextInputWithIcon = props => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={props.placeholder}/>
            <TouchableOpacity onPress={props.onIconPress}>
                <Image style={styles.image} source={props.src}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
    },

    image: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        paddingLeft: 15
    },
});

export default TextInputWithIcon;