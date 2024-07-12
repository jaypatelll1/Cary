import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MapU from '../../components/MapU';
export default function Main() {
  return (
    <View style={styles.container}>
     
      <MapU />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
