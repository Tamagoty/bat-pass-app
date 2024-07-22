import React from "react";
import { TextInput } from "react-native";
import { styles } from "./BatTextInputStyles";

interface BatTextInputProps {
  pass: string;
}

export function BatTextInput(porps: BatTextInputProps) {
  return (
    <TextInput style={styles.container} placeholder="pass" value={porps.pass} />
  );
}
