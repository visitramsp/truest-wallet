import React from 'react'
import ProductList from './ProductList'
import { FlatList, StyleSheet, View } from 'react-native';
import { horizontalScale, verticalScale } from '../../theme';

export default function ProductCard({
    contentContainerStyle = {}
}) {

    const data = [
        { id: '1' },    
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
    ];


    const separateComponent = () => <View style={styles.spaceW} />;
    return (
        <>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <ProductList item={item} />
                )}
                onEndReached={() => {
                    console.log('Load more items here...');
                }}
                style={styles.listContainer}
                contentContainerStyle={[
                    styles.contentContainerStyle,
                    contentContainerStyle
                ]}
                ItemSeparatorComponent={separateComponent}
                keyExtractor={(item, index) => item.id + index.toString()}
                numColumns={2}
                onEndReachedThreshold={0.5}
                columnWrapperStyle={styles.columnWrapper}
            />
        </>
    )
}

const styles = StyleSheet.create({
    spaceW: {
        width: horizontalScale(20),
        height: verticalScale(20)
    },
    listContainer: {
       
    },
    contentContainerStyle: {
       paddingBottom: verticalScale(10),
    },
     columnWrapper: {
    justifyContent: 'space-between',
  }
})
