import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from 'react';
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        const user = {
          email: email,
          password: password,
        };
        axios
          .post("https://cary.onrender.com/loginUser", user)
          .then((response) => {
            
            const token = response.data.token;
            const userrr=response.data.u;
            AsyncStorage.setItem("userId",userrr.userid);
            AsyncStorage.setItem("email",userrr.email);
            AsyncStorage.setItem("name",userrr.name);
            AsyncStorage.setItem("authToken", token);
            
            // navigation.replace("BottomTab");
            console.log("Login Successfull");
            setEmail("");
            setPassword("");
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text
                    style={{
                        marginTop: "30%",
                        color: "#000000",
                        fontWeight: "bold",
                        fontSize: 32,
                        textAlign: "center",
                    }}
                >
                    Welcome to Cary
                </Text>
                <Text
                    style={{
                        color: "#000000",
                        fontWeight: "normal",
                        fontSize: 12,
                        textAlign: "center",
                    }}
                >
                    Get a ride in minutes - skip hailing a cab, tap to request.
                </Text>
                <View style={styles.Loginimgview}>
                    <Image
                        source={require("../../assets/login.png")}
                        style={styles.Loginimg}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text
                        style={{
                            color: "#000000",
                            fontWeight: "bold",
                            fontSize: 25,
                            textAlign: "left",
                            marginLeft: 5,
                            marginTop: 20,
                        }}
                    >
                        Login
                    </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email or phone*"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password*"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.signupContainer}>
                        <Text
                            style={{
                                color: "#8C8C8C",
                                fontWeight: "bold",
                                fontSize: 14,
                                textAlign: "left",
                                marginLeft: 20,
                                marginTop: 20,
                            }}
                        >
                            Don’t have an account?
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.bottombuttontext}> Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CEE7FF",
        justifyContent: "center",
    },
    Loginimgview: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
    },
    formContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: "100%",
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#F3F3F3",
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
        marginTop: 10,
    },
    loginButton: {
        backgroundColor: "#1E3455",
        borderRadius: 5,
        paddingVertical: 15,
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
    },
    signupContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    bottombuttontext: {
        color: "#1E3455",
        fontSize: 14,
        marginLeft: 5,
    },
});


