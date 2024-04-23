import React from "react";
import { View,Text, TextInput, Button } from "react-native";

export default function Form(){
    return(
        <View>
           
            <View>
            <Text>Altura</Text>
            <TextInput
            placeholder="EX.1.75"
            keyboardType="numeric"
            />
            <Text>Peso</Text>
            <TextInput
            placeholder="75.863"
            keyboardType="numeric"
            />

            <Button
            onPress={validation()}
              title="calcular imc"
              color="#00FFFF"
            />

            </View>
        
        </View>

    );
    };
