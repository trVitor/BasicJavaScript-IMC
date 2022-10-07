import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  FlatList
} from "react-native";
import { styles } from "./style";
import ResultIMC from "../result/";

export default function Form() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [imc, setImc] = useState(null);
  const [msgErroAltura, setMsgErroAltura] = useState(null);
  const [msgErroPeso, setMsgErroPeso] = useState(null);
  const [imcList, setImcList] = useState([]);

  function validarValores() {
    console.warn("Altura: " + altura + " | Peso: " + peso);
    if (peso != null && altura != null) {
      // se houver valores
      calcularIMC();
      setMsgErroAltura(null);
      setMsgErroPeso(null);
    } else {
      // se faltar valores
      mensagensErro();
      setImc(null);
    }
  }

  function calcularIMC() {
    let tempAltura = altura.replace(",", ".");
    let tempPeso = peso.replace(",", ".");
    let tempIMC = tempPeso / (tempAltura * tempAltura);
    tempIMC = tempIMC.toFixed(1);
    setImc(tempIMC);
    setAltura(null);
    setPeso(null);

    let tempId = new Date().getTime();
    setImcList((arr) => [...arr, { id: tempId, imc: tempIMC }]);
  }

  function mensagensErro() {
    if (peso == null) {
      setMsgErroPeso("Campo obrigatório*");
      Vibration.vibrate();
    } else {
      setMsgErroPeso(null);
    }
    if (altura == null) {
      setMsgErroAltura("Campo obrigatório*");
      Vibration.vibrate();
    } else {
      setMsgErroAltura(null);
    }
  }

  function mostrarFormulario() {
    setImc(null);
    setAltura(null);
    setPeso(null);
    setMsgErroAltura(null);
    setMsgErroPeso(null);
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        //se for verdadeiro
        <View>
          <Text style={styles.textTitle}>Formulário</Text>
          <Text style={styles.textForm}>Altura</Text>
          <Text style={styles.msgErro}>{msgErroAltura}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex: 1.75 metros"
            keyboardType="numeric"
            onChangeText={setAltura}
          ></TextInput>

          <Text style={styles.textForm}>Peso</Text>
          <Text style={styles.msgErro}>{msgErroPeso}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex: 75 Kg"
            keyboardType="numeric"
            onChangeText={setPeso}
          ></TextInput>

          <TouchableOpacity
            style={styles.button}
            onPress={() => validarValores()}
          >
            <Text style={styles.textButton}>Calcular IMC</Text>
          </TouchableOpacity>
        </View>
      ) : (
        //se for falso
        <View>
          <ResultIMC IMC={imc}></ResultIMC>
          <TouchableOpacity
            style={styles.button}
            onPress={() => mostrarFormulario()}
          >
            <Text style={styles.textButton}>Calcular Novamente</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        style={styles.FlatList}
        data={imcList}
        KeyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <Text style={styles.flatListItem}>IMC : {item.imc}</Text>;
        }}
      ></FlatList>
    </View>
  );
}
