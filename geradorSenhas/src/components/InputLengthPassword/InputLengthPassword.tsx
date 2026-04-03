import { TextInput } from "react-native";
import { styles } from "./InputLengthPasswordStyles";

interface InputLengthProps {
    length: string;
    setLength: (value: string) => void;
}

export function InputLengthPassword({ length, setLength }: InputLengthProps){
    return(
        <TextInput
            placeholder="Largura da senha"
            placeholderTextColor={'#cecece'}
            style={styles.input}
            value={length}
            onChangeText={setLength}
            keyboardType="numeric"
        />
    );
}