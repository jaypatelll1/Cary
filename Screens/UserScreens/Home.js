import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import {DrawerActions} from '@react-navigation/native';
import CarCarousel from '../../components/Car_Carousel';

const images = [
  require('../../assets/intercity.png'),
  require('../../assets/grouptravel.png'),
];
const Home = ({navigation}) => {
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.topcont}>
          <TouchableOpacity onPress={openDrawer}>
            <Icon1
              name="menu"
              color="black"
              size={35}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/Caryhome.png')}
              style={styles.icon}
            />
          </View>
        </View>

        <View style={styles.secondcont}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View style={styles.wheretocont}>
              <View style={styles.innercont1}>
                <Icon name="search1" Color="black" size={24} />
                <Text style={{fontSize: 20, fontWeight: '400', color: 'black'}}>
                  Where to?
                </Text>
              </View>
              <View>
                <View style={styles.arrowcont}>
                  <Icon name="arrowright" color="black" size={24} />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.locationnamecont}>
            <View style={styles.locationname}>
              <View style={styles.Imageicont}>
                <Icon1 name="home" color="black" size={24} />
              </View>
              <View style={styles.textcont}>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
                  Home
                </Text>
                <Text style={{fontSize: 15, color: 'black'}}>
                  Cresent bay, Parel{' '}
                </Text>
              </View>
            </View>
            <View style={styles.linecont}>
              <View style={styles.line}></View>
            </View>

            <View style={styles.locationname}>
              <View style={styles.Imageicont}>
                <Icon1 name="suitcase" color="black" size={24} />
              </View>

              <View style={styles.textcont}>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
                  Work
                </Text>
                <Text style={{fontSize: 15, color: 'black'}}>
                  Inorbit complex, Malad
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.thirdcont}>
          <View style={styles.textcont2}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Suggestions
            </Text>
          </View>
          <CarCarousel />
          <View style={styles.textcont1}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Explore and plan rides
            </Text>
          </View>
          <View style={styles.image1cont}>
            <ScrollView horizontal>
              {images.map((image, index) => (
                <View key={index} style={styles.imageCont}>
                  <Image source={image} style={styles.image1} />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ececec',
  },
  topcont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1.5,
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: '-15%',
  },
  icon: {
    width: 100,
    height: 50,
  },
  secondcont: {
    width: '100%',
    height: 268,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  wheretocont: {
    width: 339,
    height: 53,
    backgroundColor: '#EEEEEE',
    borderRadius: 27,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  innercont1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '4%',
    width: 120,
  },
  arrowcont: {
    width: 37,
    height: 37,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '2%',
  },
  locationnamecont: {
    height: 130,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  locationname: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Imageicont: {
    width: 47,
    height: 47,
    borderRadius: 30,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '6%',
  },

  line: {
    borderBottomWidth: 1,
    borderColor: '#C6C6C6',
    width: '90%',
  },
  linecont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdcont: {
    height: 500,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 10,
  },
  textcont: {
    marginTop: 10,
    marginLeft: 10,
  },
  textcont1: {
    marginTop: 10,
    marginLeft: 20,
  },
  textcont2: {
    marginTop: 20,
    marginLeft: 20,
  },
  container: {
    flex: 1,
  },

  imageCont: {
    width: 217,
    height: 200,
    margin: 5,
  },
  image1: {
    width: 217,
    height: 200,
  },
  image1cont: {
    marginLeft: '4%',
  },
});
