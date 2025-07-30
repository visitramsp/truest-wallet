import React from 'react'
import styles from './authStyles'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from '../../theme';
export default function SocialMediaScreen() {
    return (
        <View style={styles.socialMediaContainer}>
            <Text style={styles.socialMediaText}>Or sign up with social account</Text>
            <View style={styles.iconsContainer}>
                <View style={styles.iconsView}>
                    <Icon name="google" size={25} color="blue" />
                </View>
                <View style={styles.iconsView}>
                    <Entypo name="facebook" size={25} color={Colors.skyBlue100} />
                </View>
            </View>
        </View>
    )
}
