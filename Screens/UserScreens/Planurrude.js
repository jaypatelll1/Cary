import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Planurride = () => {
  return (
    <View>
      {/* Top Bar */}
      <View style={styles.Topbar}>
        <View style={{flexDirection: 'row', padding: 20}}>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="arrowleft" color="black" size={35} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title}>Plan your ride</Text>
          </View>
        </View>
        <View style={styles.toggleButtons}>
          <TouchableOpacity style={styles.toggleButton}>
          <Icon name="clockcircleo" color="black" size={20} />

            <Text style={styles.toggleText}>Pickup now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleButton}>
          <Icon name="user" color="black" size={20} />
            <Text style={styles.toggleText}>For me</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Toggle Buttons for Pickup/For me */}

      {/* Location Input Fields */}
      <View style={styles.locationInputContainer}>
        <View style={styles.locationField}>
          <Image
            source={require('../../assets/Planurride/planurrude-1.png')}
            style={{width: 15, height: 15, marginLeft: 10}}
          />
          <TextInput
            style={styles.locationInput}
            placeholder="Current location"
            placeholderTextColor="#ADADAD"
          />
        </View>

        <View style={styles.locationField}>
          <Image
            source={require('../../assets/Planurride/planurrude-2.png')}
            style={{width: 15, height: 15, marginLeft: 10}}
          />
          <TextInput
            style={styles.locationInput}
            placeholder="Where to?"
            placeholderTextColor="#ADADAD"
          />
        </View>
      </View>

      {/* Suggested Locations */}
      <View style={styles.suggestions}>
        <View style={styles.suggestionItem}>
          <MaterialIcons name="home" size={25} color="black" />
          <Text style={styles.suggestionText}>Home Crescent bay, Malad</Text>
        </View>

        <View style={styles.suggestionItem}>
          <MaterialIcons name="work" size={25} color="black" />
          <Text style={styles.suggestionText}>Work Inorbit Mall, Parel</Text>
        </View>

        <View style={styles.suggestionItem}>
          <MaterialIcons name="place" size={25} color="black" />
          <Text style={styles.suggestionText}>Set location on map</Text>
        </View>

        <View style={styles.suggestionItem}>
          <MaterialIcons name="star" size={25} color="black" />
          <Text style={styles.suggestionText}>Saved places</Text>
        </View>
      </View>
    </View>
  );
};

export default Planurride;

const styles = StyleSheet.create({
  Topbar: {
    width: '100%',
    height: 125,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: '30%',
  },
  toggleButtons: {
    flexDirection: 'row',
  },
  toggleButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 36,
    width: 120,
    backgroundColor: '#CBCBCB',
    borderRadius: 20,
    marginLeft  : '5%',
    
    
  },
  toggleText: {
    fontSize: 16,
    color: '#000',
  },
  locationInputContainer: {
    borderRadius: 15,
    margin: 20,
    borderWidth: 1,
    borderColor: '#000',
  },
  locationField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  locationInput: {
    marginLeft: 10,
    fontSize: 14,
    flex: 1,
    height: 45,
  },
  suggestions: {
    padding: 10,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  suggestionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
});