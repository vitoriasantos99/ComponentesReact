import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Estilo from "./estilo";

export default () =>{
    return(
        <View style={estiloPrimeiro.fundoPri}>
            <Text style={Estilo.fonteG}>Primeiro Componente!!!</Text>
        </View>
    )
}

const estiloPrimeiro = StyleSheet.create(
    {
        fundoPri:{
            backgroundColor: '#c5a898',
            padding: 20,
            flex: 1
        },
    }
)