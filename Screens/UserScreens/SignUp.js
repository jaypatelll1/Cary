import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function SignUp({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = async () => {
    // Basic Validation
    if (!fullName || !email || !password) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    const user = {
      name: fullName,
      email,
      phone,
      role: 'passenger',
      password,
    };

    setIsLoading(true); // Start loading
    try {
      const response = await axios.post(
        'https://cary-backend.onrender.com/api/auth/register',
        user
      );
      console.log(response.data);
      setFullName('');
      setPhone('');
      setEmail('');
      setPassword('');
      Alert.alert('Success', 'Account created successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to register. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.title}>Welcome to Cary</Text>
        <Text style={styles.subtitle}>
          Get a ride in minutes - skip hailing a cab, tap to request.
        </Text>
        <View style={styles.Loginimgview}>
          <Image
            source={require('../../assets/login.png')}
            style={styles.Loginimg}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Sign up</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name*"
              placeholderTextColor="#A3A3A3"
              value={fullName}
              onChangeText={setFullName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email*"
              placeholderTextColor="#A3A3A3"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              placeholderTextColor="#A3A3A3"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
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
          <TouchableOpacity
            onPress={handleRegister}
            style={styles.loginButton}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.buttonText}>Sign up</Text>
            )}
          </TouchableOpacity>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.bottombuttontext}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEE7FF',
  },
  title: {
    marginTop: '20%',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  subtitle: {
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
  Loginimg: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    paddingBottom: 30,
  },
  formTitle: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
    marginLeft: 5,
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
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
