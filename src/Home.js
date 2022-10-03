import * as React from 'react';

import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();
 
    function navigateToEu(){
        navigation.navigate("Eu");
    }

    return (
        <View>
            <View>
                <Image 
                    source={require("./img/ifal.png")} 
                    style={{
                        width: '50%', 
                        height: '50%', 
                        margin: 100, 
                        resizeMode: 'center'
                    }} />
            </View>
            <View style={{ width: "50%", marginLeft: 100}}>
                <Button
                    title="Quem sou eu?"
                    onPress={() => {navigateToEu()}}
                />
            </View>
        </View>
    );
}