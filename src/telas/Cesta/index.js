import React from "react";
import { StyleSheet, View, FlatList } from 'react-native'
import Topo from "./Components/Topo";
import Detalhes from "./Components/Detalhes";
import Item from "./Components/Item";
import Texto from "../../components/Texto";

export default function Cesta({topo, detalhes, itens}) {
  return <> 
      <FlatList 
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome }
        ListHeaderComponent={() => {
          return <>
          <Topo {...topo}/>
          <View style={styles.cesta}>
            <Detalhes {...detalhes}/>
            <Texto style={styles.titulo}>{itens.titulo}</Texto>
          </View>
          </>
        }}
      />

    </>
}

const styles = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
  cesta:{
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});