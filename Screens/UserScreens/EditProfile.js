import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/userSlice";

const EditProfile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [userId, setUserId] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const token = await AsyncStorage.getItem('authToken');
      const id = await AsyncStorage.getItem('userId');
      const storedName = await AsyncStorage.getItem('name');
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPhoneNumber = await AsyncStorage.getItem('phoneNumber');

      setAuthToken(token);
      setUserId(id);
      if (storedName) setName(storedName);
      if (storedEmail) setEmail(storedEmail);
      if (storedPhoneNumber) setPhoneNumber(storedPhoneNumber);
    };
    getUserData();
  }, []);

  const handleSubmit = async () => {
    if (!name || !phoneNumber) {
      setMessage('Please fill in all fields');
      return;
    }

    setLoading(true);
    setMessage('');

    const data = { name, phoneNumber };

    try {
      const response = await fetch(
        `https://cary-backend.onrender.com/api/user/${userId}/updateUser`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setMessage('Profile updated successfully!');
        dispatch(updateUser({ name, phoneNumber }));
        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('phoneNumber', phoneNumber);  
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={30} color="black" style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Account Info</Text>

        <View style={styles.profileImageContainer}>
          <Icon name="user" size={50} color="lightgray" />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="edit" size={15} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader}>Basic Info</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.textInput, styles.readOnlyInput]}
          placeholder="Enter your email"
          value={email}
          editable={false}
        />

        {message ? (
          <Text style={{ textAlign: 'center', color: loading ? 'blue' : 'green', marginVertical: 10 }}>
            {message}
          </Text>
        ) : null}

        <TouchableOpacity
          onPress={handleSubmit}
          style={[styles.button, loading && { backgroundColor: '#cccccc' }]}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Updating...' : 'Update Profile'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backIcon: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  profileImageContainer: {
    alignSelf: 'center',
    marginTop: 20,
    width: 100,
    height: 100,
    backgroundColor: '#F1F1F1',
    borderRadius: 50,
    justifyContent: "center",
    alignItems: 'center',
    borderColor: '#ccc',
    position: 'relative',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#E3E3E3',
    padding: 5,
    borderRadius: 20,
    borderColor: '#ccc',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 14,
    borderBottomWidth: 1,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1E3455',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfile;
