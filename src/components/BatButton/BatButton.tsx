import React from "react";
import { View, Button, Text, Pressable } from "react-native";

import { styles } from "./BatButtonStyles";

export function BatButton() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          console.log("Olá");
        }}
        title="Clique aqui"
        accessibilityLabel="click em mim"
        color={"#831584"}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          console.log("Fui pressionado");
        }}
      >
        <Text style={styles.text}>🔃GENERATE</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.log("Fui pressionado");
        }}
      >
        <Text style={styles.text}>⚡COPY</Text>
      </Pressable>
    </View>
  );
}
