import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
const car = [
  {name: 'Mini', source: require('../assets/mini.png')},
  {name: 'Sedan', source: require('../assets/sedan.png')},
  {name: 'Suv', source: require('../assets/suv.png')},
  {name: 'bike', source: require('../assets/motorbike.png')},
];

export default function car_carousel() {
  return (
    <View>
      <View style={styles.ScrollViewv}>
        <ScrollView horizontal>
          {car.map((item, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={item.source} style={styles.image} />
              <Text style={styles.imageText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    borderWidth: 1.5,
    borderColor: 'gray',
    borderRadius: 18,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  imageText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
  },
  ScrollViewv: {
    marginLeft: '4%',
    marginTop: 10,
  },
  imageCont: {
    width: 217,
    height: 200,
    margin: 5,
  },
  imageContainer: {
    margin: 5,
    alignItems: 'center',
  },
});
