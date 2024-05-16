import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Estilo from "./estilo";

export default () =>{
    return(
        <View style={estiloTerceiro.fundoTer}>
            <Text style={Estilo.fonteG}>Terceiro Componente!!!</Text>
        </View>
    )
}

const estiloTerceiro = StyleSheet.create(
    {
        fundoTer:{
            backgroundColor: '#30c4c9',
            padding: 20,
            flex: 1,
        },
    }
)