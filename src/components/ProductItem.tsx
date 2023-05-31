import React, {PropsWithChildren} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

type ProductProps = PropsWithChildren<{
  product: Product;
}>;

const ProductItem = ({product}: ProductProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imageUrl}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 0.8,
    backgroundColor: '#CAD5E2',
  },
  image: {},
});

export default ProductItem;
