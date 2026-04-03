import React from "react";
import { TextInput } from "react-native";

import { styles } from "./InputPasswordStyles";

interface InputPassProps{
    pass:string
}

export function InputPassword(props: InputPassProps){
    return(
        <TextInput
            placeholder="PASSWORD"
            placeholderTextColor={'#cecece'}
            style={styles.inputPass}
            value={props.pass}
        />
    )
}