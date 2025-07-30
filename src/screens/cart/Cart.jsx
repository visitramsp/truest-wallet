import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    SafeAreaView,
} from 'react-native';
import styles from './Cart.Styles';
import MainLayout from '../../components/layout/Layout';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ApplicationStyle, Colors } from '../../theme';
import CustomButton from '../../components/CustomButton';
const products = [
    {
        id: '1',
        name: 'Pullover',
        color: 'Black',
        size: 'L',
        price: 51,
        image: 'https://down-my.img.susercontent.com/file/5d0b419d607bbff037ebed65f24f823e',
    },
    {
        id: '2',
        name: 'T-Shirt',
        color: 'Gray',
        size: 'L',
        price: 30,
        image: 'https://down-my.img.susercontent.com/file/5d0b419d607bbff037ebed65f24f823e',
    },
    {
        id: '3',
        name: 'Sport Dress',
        color: 'Black',
        size: 'M',
        price: 43,
        image: 'https://down-my.img.susercontent.com/file/5d0b419d607bbff037ebed65f24f823e',
    },
];

const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <View style={styles.topRow}>
                    <View>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.details}>
                            Color: {item.color}   Size: {item.size}
                        </Text>
                    </View>
                    <Entypo name="dots-three-vertical" size={15} color={Colors.gray100} />
                </View>

                <View style={ApplicationStyle.rowAlignCenterJustifyBetween}>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity
                            style={styles.qtyButton}
                            onPress={() => quantity > 1 && setQuantity(quantity - 1)}
                        >
                            <Text style={styles.qtyButtonText}>-</Text>
                        </TouchableOpacity>

                        <Text style={styles.quantity}>{quantity}</Text>

                        <TouchableOpacity
                            style={styles.qtyButton}
                            onPress={() => setQuantity(quantity + 1)}
                        >
                            <Text style={styles.qtyButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.price}>{item.price}₹</Text>
                </View>
            </View>
        </View>
    );
};

const Cart = () => {
    const totalAmount = products.reduce((acc, item) => acc + item.price, 0);

    return (
        <MainLayout style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>My Cart</Text>
                <TouchableOpacity>
                    <MaterialIcons name="search" size={25} color={Colors.black100} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CartItem item={item} />}
            />

            <View style={styles.promoContainer}>
                <TextInput
                    placeholder="Enter your promo code"
                    style={styles.promoInput}
                    placeholderTextColor={Colors.gray100}
                />
                <TouchableOpacity style={styles.arrowButton}>
                    <Text style={{ fontSize: 18 }}>➡️</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total amount:</Text>
                <Text style={styles.totalAmount}>{totalAmount}₹</Text>
            </View>
            <CustomButton title='CHECK OUT'  />
        </MainLayout>
    );
};

export default Cart;

