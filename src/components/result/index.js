import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import { styles } from "./style";

export default function ResultIMC(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC é de: " + props.IMC
    });
  };

  return (
    <View style={styles.formContext}>
      <Text style={styles.textMsg}>Seu IMC é de: </Text>
      <Text style={styles.textIMC}>{props.IMC}</Text>

      <TouchableOpacity style={styles.buttonShare} onPress={onShare}>
        <Text style={styles.textButton}>Compartilhar</Text>
      </TouchableOpacity>
    </View>
  );
}
