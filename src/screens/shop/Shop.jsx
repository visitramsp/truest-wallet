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
        <MainLayout style={{ paddingHorizontal: 16 }}>
            <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
            <View style={ApplicationStyle.rowAlignCenterJustifyBetween}>
                <Icon name="chevron-left" size={25} color={Colors.gray100} />

                <Text style={styles.headerText}>Categories</Text>
                <MaterialIcons name="search" size={25} color={Colors.black100} />
            </View>
            <View style={styles.salesContainer}>
                <Text style={styles.salesTitle}>SUMMER SALES</Text>
                <Text style={styles.salesSubTitle}>Up to 50% off</Text>
            </View>
            <View style={styles.boxContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <View style={styles.cardListContainer}>
                            <Text style={styles.categoryTitle}>New {item.id}</Text>
                            <Image source={{ uri: 'https://4.imimg.com/data4/MS/HC/MY-23547870/bakery-biscuit.jpg' }}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>}
                    keyExtractor={(item, index) => item.id + index.toString()}

                    onEndReached={() => {
                        console.log('Load more items here...');
                    }}
                    onEndReachedThreshold={0.5}
                    style={styles.listContainer}
                    contentContainerStyle={[
                        styles.contentContainerStyle,

                    ]}
                    ItemSeparatorComponent={() => <View style={{ height: verticalScale(15) }} />}
                />
            </View>
        </MainLayout>
    )
}
