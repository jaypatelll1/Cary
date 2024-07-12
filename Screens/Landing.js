import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Landing() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Landing/Landing_Bg.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.row}>
          <TouchableOpacity onPress={handleLogin}>
            <Image source={require('../assets/Landing/User.png')} style={styles.imageStyle} />
          </TouchableOpacity>
          <Image source={require('../assets/Landing/Driver.png')} style={styles.imageStyle} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    marginTop: "58%",
    flexDirection: 'row',
  },
  imageStyle: {
    margin: 10,
  },
});
