import React, {useState} from "react";
import { TextInput, StyleSheet } from 'react-native';


const InputText = (prop) => {
    const [borderColor, setBorderColor] = useState("gray");
    return(
        <TextInput style={[styles.input, {borderColor: borderColor}]} 
        placeholder={prop.placeholder}
        onFocus={()=> setBorderColor("#c527d6")}
        onBlur={() => setBorderColor("gray")}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,

    }
});

export default InputText