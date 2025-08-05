import React, { useState } from 'react'
import { Alert, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import MainLayout from '../../components/layout/Layout'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Colors } from '../../theme'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { styles } from './Receive.Styles'
import QRCode from 'react-native-qrcode-svg';
import { height, width } from '../../theme/Matrics'
import * as Animatable from 'react-native-animatable';
const walletAddress = '0x5b18...448451d';
export default function Receive() {
    const navigation = useNavigation()
    const [animationKey, setAnimationKey] = useState(0);
    useFocusEffect(
        React.useCallback(() => {
            setAnimationKey(prev => prev + 1);
        }, [])
    );
    return (
        <MainLayout>
            <View style={styles.container}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                        marginTop:10
                    }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                         <MaterialIcons name="keyboard-arrow-left" size={40} color={Colors.gray100} />
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: Colors.white80,
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginLeft: 16,
                        }}>
                        Receive
                    </Text>
                    <View style={{ width: 50 }} />

                </View>


                <View style={styles.container1}>


                    <Animatable.View key={`balance-${animationKey}`} animation="zoomIn" delay={300} duration={1000} style={styles.qrContainer}>

                        <QRCode value="0x5b18...441d" size={width - 100} />
                    </Animatable.View>


                    <Text style={styles.subText}>Scan address to receive payment</Text>

                    <View style={styles.addressContainer}>
                        <Text style={styles.addressText}>{walletAddress}</Text>
                        <TouchableOpacity
                            style={styles.iconButton}
                            onPress={() => {
                                // Clipboard.setString(walletAddress);
                                if (Platform.OS === 'android') {
                                    ToastAndroid.show('Address copied!', ToastAndroid.SHORT);
                                } else {
                                    Alert.alert('Copied', 'Wallet address copied to clipboard.');
                                }
                            }}
                        >
                            <FontAwesome5 name="copy" size={20} color={Colors.btnColor} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <EvilIcons name="share-google" size={29} color={Colors.bgColor} />
                        </TouchableOpacity>
                    </View>


                </View>
                <Animatable.View animation="slideInUp" delay={1000} duration={1000}>
                    <TouchableOpacity style={styles.continueBtn} disabled>
                        <Text style={{ color: Colors.btnColor, fontSize: 16, fontWeight: 'bold' }}>
                            Request Payment
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>

        </MainLayout>
    )
}
