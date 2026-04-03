import React, { useState } from "react";
import { View, Button, Text, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./SecButtonStyles";

import { InputPassword } from "../InputPassword/InputPassword";

import { InputLengthPassword } from "../InputLengthPassword/InputLengthPassword";

import { passwordService } from "../../services/passswordService";

export function SecButton() {
  const [pass, setPass] = useState("");
  const [passwordLength, setPasswordLength] = useState("8");

  function handleGenPassword() {
    const length = parseInt(passwordLength) || 8; 
    let token = passwordService(length); 
    setPass(token);
  }

  function handleCopy() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      {/*<Button
                title="GERAR SENHA 🙊"
                onPress={Pressionar}
            />*/}

      <InputLengthPassword
        length={passwordLength}
        setLength={setPasswordLength}
      />

      <InputPassword pass={pass} />

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleGenPassword}
      >
        <Text style={styles.texto}>GERAR SENHA 🙊</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleCopy}
      >
        <Text style={styles.texto}>COPIAR 🗒️</Text>
      </Pressable>
    </>
  );
}
