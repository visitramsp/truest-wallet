import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from 'react-native';
import { Colors, Fonts } from '../../theme';
import CustomButton from '../../components/CustomButton';
import { height } from '../../theme/Matrics';
import MainLayout from '../../components/layout/Layout';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';




const { width } = Dimensions.get('window');

const words = [
    'spring', 'toy', 'virus',
    'soda', 'rule', 'ring',
    'prefer', 'ethics', 'follow',
    'pudding', 'pottery', 'suffer',
];

const ConfirmRecoveryScreen = () => {

    const navigation = useNavigation()

    const renderWord = ({ item, index }) => (
        <View style={styles.wordBox}>
            <Text style={styles.wordText}>
                {index + 1}. {item}
            </Text>
        </View>
    );

    return (
        <MainLayout>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={{ position: "relative", left: -10 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Entypo
                                name={'chevron-small-left'}
                                size={40}
                                color={Colors.blue100}

                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.stepText}>Step 3 of 3</Text>
                    <Text style={styles.title}>Confirm your Secret Recovery Phrase</Text>
                    <Text style={styles.subtitle}>
                        Please select each phrase in order to make sure it is correct
                    </Text>

                    <View style={styles.grid}>
                        <FlatList
                            data={words}
                            numColumns={3}
                            renderItem={renderWord}
                            keyExtractor={(item, index) => index.toString()}
                            scrollEnabled={false}
                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between",width:"100%" }}>
                        {["spring", "rule", "pudding"].map((item, index) =>
                            <View style={styles.ansWordBox}>
                                <Text style={styles.ansWordText}>
                                    {index + 1}. {item}
                                </Text>
                            </View>)}
                    </View>
                </View>


                <CustomButton title='Confirm' onPress={()=>navigation.navigate("bottom-navigation")} />
            </View>
        </MainLayout>
    );
};

export default ConfirmRecoveryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        paddingHorizontal: 20,
    },
    topContainer: {
        height: height - 150
    },
    stepText: {
        color: Colors.gray100,
        fontSize: Fonts.size.semi,
        fontWeight: Fonts.Weight.low,
        marginBottom: 10,
    },
    title: {
        fontSize: Fonts.size.f26,
        color: Colors.black100,
        fontWeight: Fonts.Weight.bold,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: Fonts.size.medium,
        fontWeight: Fonts.Weight.low,
        color: Colors.black80,
        marginBottom: 10,
        lineHeight: 20,
    },
    highlight: {
        color: Colors.blue80,
        fontWeight: 'bold',
    },
    grid: {
        borderRadius: 12,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: Colors.gray50,
        padding: 8,
        borderRadius: 10
    },
    wordBox: {
        width: (width - 90) / 3,
        margin: 5,
        backgroundColor: 'white',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: Colors.gray60,
        borderRadius: 5,
        paddingLeft: 8
    },
    wordText: {
        color: Colors.gray90,
        fontSize: 13,
        fontWeight: '500',
        textAlign: "left"
    },
    ansWordBox: {
        width: "30%",
        margin: 5,
        backgroundColor: Colors.white80,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: Colors.blue80,
        borderRadius: 5,
        paddingLeft: 8
    },
    ansWordText: {
        color: Colors.blue80,
        fontSize: 13,
        fontWeight: '500',
        textAlign: "left"
    },
});
