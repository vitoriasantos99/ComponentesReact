import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Estilo from "./components/estilo";

import Primeiro from "./components/Primeiro";
import Segundo from "./components/Segundo";
import Terceiro from "./components/Terceiro";
import estilo from "./components/estilo";

export default () =>(
    <View style={style.fundo}>
        <Text>Tela Principal</Text>
        <Primeiro/>
        <Segundo/>
        <Terceiro/>
    </View>
)

const style = StyleSheet.create (
    {
        fundo:{
            backgroundColor: '#02483e',
            flex: 1, 
            flexDirection: "column",
            padding: 10,
        },
    }

)