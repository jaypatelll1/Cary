import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Icon1 from "react-native-vector-icons/AntDesign";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = () => {
  const navigation = useNavigation();
  
  // State for form inputs
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  
  // State to manage loading and success/error messages
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Get user token and ID (Assuming it's saved in AsyncStorage)
  const [userId, setUserId] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    // Fetch token and user ID from AsyncStorage
    const getUserData = async () => {
      const token = await AsyncStorage.getItem('authToken');
      const id = await AsyncStorage.getItem('userId');
      setAuthToken(token);
      setUserId(id);
    };
    
    getUserData();
  }, []);

  const handleSubmit = async () => {
    if (!name || !phoneNumber || !email) {
      setMessage('Please fill in all fields');
      return;
    }

    setLoading(true);
    setMessage('');

    // Construct the data to send
    const data = { name, phoneNumber, email };

    try {
      // Make the PUT request to update user details
      const response = await fetch(`https://cary-backend.onrender.com/api/user/${userId}/updateUser`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,  // Sending token in headers
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Profile updated successfully!');
      } else {
        setMessage(result.msg || 'Failed to update profile');
      }
    } catch (error) {
      setMessage('An error occurred');
      console.error(error);
    }

    setLoading(false);
  };

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
            <Icon1 name="user" color="lightgray" size={70} />
          </View>
          <View>
            <Text style={styles.accountInfo}>Basic Details</Text>
          </View>
          <View>
            <Text style={styles.formInput}>Name</Text>
            <TextInput
              placeholder="Dev Pandhi"
              style={styles.textInput}
              value={name}
              onChangeText={setName}  // Update state with the input value
            />
            <View style={styles.line} />
          </View>
          <View>
            <Text style={styles.formInput}>Phone Number</Text>
            <TextInput
              placeholder="7045999817"
              style={styles.textInput}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <View style={styles.line} />
          </View>
          <View>
            <Text style={styles.formInput}>Email</Text>
            <TextInput
              placeholder="devpandhi1@gmail.com"
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.line} />
          </View>
          {message ? <Text style={{ margin: 10, color: loading ? 'blue' : 'green' }}>{message}</Text> : null}
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.button}
            disabled={loading}
          >
            <Text style={styles.buttonText}>{loading ? 'Updating...' : 'Update Profile'}</Text>
          </TouchableOpacity>
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
    color: 'black',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
    width: 100,
    height: 100,
    backgroundColor: '#F1F1F1',
    borderRadius: 50,
    justifyContent: 'center',
    marginLeft: '35%',
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
  button: {
    marginTop: 20,
    marginLeft: '7%',
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default EditProfile;
