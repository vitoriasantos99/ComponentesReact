import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Estilo from "./estilo";

export default () =>{
    return(
        <View style={estiloSegundo.fundoSeg}>
            <Text style={Estilo.fonteG}>Segundo Componente!!!</Text>
        </View>
    )
}

const estiloSegundo = StyleSheet.create(
    {
        fundoSeg:{
            backgroundColor: '#ffd3d3',
            padding: 20,
            flex: 1,
        },
    }
)