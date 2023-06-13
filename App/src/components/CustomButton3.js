import {Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustomButton3 = ({ onPress, text }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>
            {text}
            </Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3b71f3',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        padding: 15,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 10
    }
});

export default CustomButton3;