import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

export default function Eu(){
    const navigate = useNavigation();

    function navigateBack() {
        navigate.goBack();
    }

    return (
        <View>
            <Image
                source={require("./img/eu.jpg")}
                style={{
                    width: '50%',
                    height: '50%',
                    margin: 100,
                    resizeMode: 'center'
                }}
            />
            <Text
                style={{
                    fontSize: 20,
                    textAlign: "center"
                }}
            >
                Silvia Michele - 524
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    textAlign: "center"
                }}
            >
                2019322693
            </Text>
        </View>
    )
}

