import React from "react";
import Texto from "../../../components/Texto";
import { Image, StyleSheet, View, FlatList } from "react-native";

export default function Item({ item: { nome, imagem } }) {
  
  return <View style={styles.item}>
  <Image source={imagem} style={styles.imagem}/>
  <Texto style={styles.nome} key={nome}>{nome}</Texto>
</View>
  
{/*     
  return <>
    {lista.map(({ nome, imagem }) => {
      return <View key={nome} style={styles.item}>
        <Image source={imagem} style={styles.imagem}/>
        <Texto style={styles.nome} key={nome}>{nome}</Texto>
      </View>
    })} */}
  
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    alignItems: "center",
    paddingVertical: 16,
    marginHorizontal: 16
  },
  imagem: {
    width: 46,
    height: 46
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646"
  }
});