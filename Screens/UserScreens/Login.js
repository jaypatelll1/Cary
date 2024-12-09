import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignup = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const user = { email, password };

    try {
      const response = await axios.post('https://cary-backend.onrender.com/api/auth/login', user);
      const { token, u: userData } = response.data;

      // Dispatch user data to Redux store
      dispatch(setUser({
        email: userData.email,
        name: userData.name,
        token,
      }));

      // Store user data in AsyncStorage
      await AsyncStorage.setItem('userId', userData.userid);
      await AsyncStorage.setItem('email', userData.email);
      await AsyncStorage.setItem('name', userData.name);
      await AsyncStorage.setItem('authToken', token);

      Alert.alert('Success', 'Login successful');
      setEmail('');
      setPassword('');
      navigation.navigate('UserHome');
    } catch (error) {
      console.error('Login Error:', error);
      Alert.alert('Error', 'Login failed. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.welcomeText}>Welcome to Cary</Text>
        <Text style={styles.subText}>Get a ride in minutes - skip hailing a cab, tap to request.</Text>
        <View style={styles.Loginimgview}>
          <Image source={require('../../assets/login.png')} style={styles.Loginimg} />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email*"
              placeholderTextColor="#A3A3A3"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password*"
              placeholderTextColor="#A3A3A3"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don’t have an account?</Text>
            <TouchableOpacity onPress={handleSignup}>
              <Text style={styles.bottombuttontext}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEE7FF',
    justifyContent: 'center',
  },
  welcomeText: {
    marginTop: '30%',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  subText: {
    color: '#000000',
    fontWeight: 'normal',
    fontSize: 12,
    textAlign: 'center',
  },
  Loginimgview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F3F3F3',
    color: '#000000',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#1E3455',
    borderRadius: 5,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  signupText: {
    color: '#8C8C8C',
    fontWeight: 'bold',
    fontSize: 14,
  },
  bottombuttontext: {
    color: '#1E3455',
    fontSize: 14,
    marginLeft: 5,
  },
});
