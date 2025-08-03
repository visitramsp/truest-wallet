import React from 'react'
import { Alert, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import MainLayout from '../../components/layout/Layout'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { styles } from './Receive.Styles'
import QRCode from 'react-native-qrcode-svg';
import { height, width } from '../../theme/Matrics'
import CustomButton from '../../components/CustomButton'
// import Clipboard from '@react-native-clipboard/clipboard';
const walletAddress = '0x5b18...448451d';
export default function Receive() {
    const navigation = useNavigation()
    return (
        <MainLayout>
            <View style={styles.container}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                    }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={24} color={Colors.black100} />
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: Colors.black100,
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginLeft: 16,
                        }}>
                        Receive
                    </Text>
                    <View style={{ width: 20 }} />

                </View>


                <View style={styles.container1}>

                    <View style={styles.qrContainer}>
                        <QRCode value="0x5b18...441d" size={width - 100} />
                    </View>

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
                            <FontAwesome5 name="copy" size={20} color="#c272ff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <EvilIcons name="share-google" size={29} color={Colors.gray70} />
                        </TouchableOpacity>
                    </View>

                    
                </View>
                <TouchableOpacity style={styles.continueBtn} disabled>
                        <Text style={{ color: 'gray', fontSize: 16, fontWeight: 'bold' }}>
                            Request Payment
                        </Text>
                    </TouchableOpacity>
            </View>

        </MainLayout>
    )
}
