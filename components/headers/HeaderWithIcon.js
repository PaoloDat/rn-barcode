import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";

const HeaderWithIcon = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
            <TouchableOpacity onPress={props.onIconPress}>
                <Image style={styles.image} source={props.src}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#4478ff',
        height: 50,
        marginBottom: 10,
        borderRadius: 10
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 15,
        resizeMode: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    text: {
        color: 'white',
        paddingLeft: 20,
        fontSize: 15
    }
});

export default HeaderWithIcon;