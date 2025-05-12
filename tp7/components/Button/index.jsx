import React from "react";
import {TouchableOpacity, StyleSheet, Text} from 'react-native'

const Boton = (props) => {
    return(
        <TouchableOpacity style={styles.boton}>
            <Text style={{color: 'white', fontWeight: "bold"}}> {props.titulo} </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#c527d6',
        borderRadius: 5,


    }
});

export default Boton