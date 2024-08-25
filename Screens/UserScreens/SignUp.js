import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
export default function SignUp({navigation}) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const handleLogin = () => {
        navigation.navigate('Login');
    };

  const handleRegister = async () => {
    const user = {
      name: fullName,
      email: email,
      phone: phone,
      role: 'passenger',
      password: password,
    };
    await axios
      .post('https://cary-backend.onrender.com/api/auth/register', user)
      .then(response => {
        console.log(response);
        setFullName('');
        setPhone('');
        setEmail('');
        setPassword('');
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text
          style={{
            marginTop: '20%',
            color: '#000000',
            fontWeight: 'bold',
            fontSize: 32,
            textAlign: 'center',
          }}>
          Welcome to Cary
        </Text>
        <Text
          style={{
            color: '#000000',
            fontWeight: 'normal',
            fontSize: 12,
            textAlign: 'center',
          }}>
          Get a ride in minutes - skip hailing a cab, tap to request.
        </Text>
        <View style={styles.Loginimgview}>
          <Image
            source={require('../../assets/login.png')}
            style={styles.Loginimg}
          />
        </View>
        <View style={styles.formContainer}>
          <Text
            style={{
              color: '#000000',
              fontWeight: 'bold',
              fontSize: 25,
              textAlign: 'left',
              marginLeft: 5,
              marginTop: 20,
            }}>
            Sign up
          </Text>
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
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              placeholderTextColor="#A3A3A3"
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
          <TouchableOpacity onPress={handleRegister} style={styles.loginButton}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          <View style={styles.signupContainer}>
            <Text
              style={{
                color: '#8C8C8C',
                fontWeight: 'bold',
                fontSize: 14}}>
              Already have an account ?
            </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.bottombuttontext}>Login</Text>
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
    marginBottom: 30,
  },
  bottombuttontext: {
    color: '#1E3455',
    fontSize: 14,
    marginLeft: 5,
  },
});

//royalty, pet friendly, subcription plan, tieups with hotels,

//eco friendly, luxury, affordable, fast, reliable, safe, comfortable, convenient, easy, quick, efficient, professional, friendly, clean, modern, stylish, spacious, high-tech, innovative, sustainable, accessible, inclusive, diverse, local, global, community, family, friends, group, solo, business, leisure, vacation, travel, adventure, exploration, discovery, experience, journey
