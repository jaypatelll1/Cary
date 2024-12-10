import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Icon1 from "react-native-vector-icons/AntDesign";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon1
              name="arrowleft"
              color="black"
              size={30}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>Account Info</Text>
          </View>
          <View style={styles.profileImageContainer}>
            <Icon1 name="user" color="gray" size={70} />
          </View>
          <View>
            <Text style={styles.accountInfo}>Basic Details</Text>
          </View>
          <View>
            <Text style={styles.formInput}>Name</Text>
            <TextInput placeholder="Dev Pandhi" style={styles.textInput} />
            <View style={styles.line} />
          </View>
          <View>
            <Text style={styles.formInput}>Phone Number</Text>
            <TextInput placeholder="7045999817" style={styles.textInput} />
            <View style={styles.line} />
          </View>
          <View>
            <Text style={styles.formInput}>Email</Text>
            <TextInput placeholder="devpandhi1@gmail.com" style={styles.textInput} />
            <View style={styles.line} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonIcon: {
    margin: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  accountInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '7%',
    marginVertical: 10,
  },
  formInput: {
    fontSize: 16,
    marginLeft: '7%',
    marginVertical: 5,
  },
  textInput: {
    marginLeft: '7%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: '7%',
    marginVertical: 10,
  },
});

export default EditProfile;