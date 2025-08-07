import React from 'react'
import { FlatList, Image, StatusBar, Text, View } from 'react-native';
import MainLayout from '../../components/layout/Layout';
import { ApplicationStyle, Colors, verticalScale } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './Shop.Styles';
export default function Shop() {


    const data = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' },
        { id: '7' },
    ];
    return (


        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black" }}><Text>Account screen</Text></View>


    )
}
