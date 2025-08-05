import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import { Colors, horizontalScale, verticalScale } from '../../theme';
import { mediaFile } from '../../assets';
import { CommonActions, useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function Congratulation() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <LottieView
                source={mediaFile.congratulation3}
                autoPlay
                loop
                style={styles.backgroundAnimation}
            />


            <Animatable.View animation="zoomIn" delay={500} duration={1500}>
                <LottieView
                    source={mediaFile.congratulation2}
                    autoPlay
                    loop
                    style={styles.foregroundAnimation}
                />
            </Animatable.View>
            <Animatable.View animation="zoomIn" delay={1000} duration={500} style={styles.card}>
                <LottieView
                    source={mediaFile.congratulation4}
                    autoPlay
                    loop
                    style={styles.cardBackgroundAnimation}
                />
                <Text style={styles.heading}>🎉 Wallet Connected!</Text>
                <Text style={styles.description}>
                    By connecting your wallet, you agree to our{' '}
                    <Text style={styles.link}>Terms of Service</Text> and{' '}
                    <Text style={styles.link}>Privacy Policy</Text>.
                </Text>

                <TouchableOpacity

                    onPress={() => navigation.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'bottom-navigation' }],
                    }))}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    backgroundAnimation: {
        position: 'absolute',
        width: width,
        height: verticalScale(400),
        top: 90,
    },
    foregroundAnimation: {
        width: horizontalScale(320),
        height: verticalScale(320),
        marginBottom: verticalScale(20),
        zIndex: 999,
    },
    card: {
        backgroundColor: Colors.black70,
        width: width - 40,
        borderRadius: 20,
        paddingVertical: verticalScale(40),
        paddingHorizontal: horizontalScale(20),
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#ccc',
        shadowOpacity: 0.1,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        marginTop: verticalScale(50)
        // position: 'relative',
        // overflow: 'hidden',
    },
    cardBackgroundAnimation: {
        position: 'absolute',
        width: horizontalScale(400),
        height: verticalScale(400),
        top: -30,
        left: -20,
        zIndex: 30,
        opacity: 1,
    },
    heading: {
        fontSize: 26,
        fontWeight: '800',
        color: Colors.white80,
        textAlign: 'center',
        marginBottom: 12,
    },
    description: {
        textAlign: 'center',
        color: Colors.gray40,
        fontSize: 14.5,
        lineHeight: 22,
        marginBottom: 24,
    },
    link: {
        color: Colors.purple100,
        fontWeight: '600',
    },
    button: {
        backgroundColor: Colors.purple100,
        paddingVertical: 14,
        paddingHorizontal: 36,
        borderRadius: 30,
        width: '100%',
        zIndex: 999,

    },
    buttonText: {
        color: Colors.bgColor,
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
    },
});
