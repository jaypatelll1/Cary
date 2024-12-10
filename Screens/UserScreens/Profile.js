import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.user);

  const handleLogout = async () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem("userToken"); // Clear token if stored in AsyncStorage
              dispatch(logout()); // Reset user state in Redux
              navigation.reset({
                index: 0,
                routes: [{ name: "Login" }], // Navigate to Login screen
              });
            } catch (error) {
              console.error("Error during logout:", error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.innercontainer}>
            <View style={styles.topcontainer}>
              {/* Back Button */}
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon1 name="arrowleft" color="black" size={30} style={styles.buttonIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                <Text style={styles.editProfileText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
            {/* Profile Info */}
            <View style={styles.profileImageContainer}></View>
            <Text style={styles.username}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>

          {/* Saved Places Section */}
          <View style={styles.outercontainer}>
            <Text style={styles.sectionTitle}>Saved Places</Text>
            <View>
              <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                  <Icon2 name="home" color="black" size={20} style={styles.buttonIcon} />
                  <Text style={styles.menuItem}>Enter Home Location</Text>
                </View>
                <Icon1 name="right" color="black" size={20} style={styles.arrowIcon} />
              </View>
              <View style={styles.line} />
              <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                  <Icon2 name="briefcase" color="black" size={20} style={styles.buttonIcon} />
                  <Text style={styles.menuItem}>Enter Work Location</Text>
                </View>
                <Icon1 name="right" color="black" size={20} style={styles.arrowIcon} />
              </View>
              <View style={styles.line} />
              <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                  <Icon1 name="plus" color="black" size={20} style={styles.buttonIcon} />
                  <Text style={styles.menuItem}>Add a place</Text>
                </View>
                <Icon1 name="right" color="black" size={20} style={styles.arrowIcon} />
              </View>
            </View>
          </View>

          {/* Others Section */}
          <View style={styles.outercontainer}>
            <Text style={styles.sectionTitle}>Others</Text>
            <View>
              <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                  <Icon2 name="dollar-sign" color="black" size={20} style={styles.buttonIcon} />
                  <Text style={styles.menuItem}>Payment methods</Text>
                </View>
                <Icon1 name="right" color="black" size={20} style={styles.arrowIcon} />
              </View>
              <View style={styles.line} />
              <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                  <Icon1 name="notification" color="black" size={20} style={styles.buttonIcon} />
                  <Text style={styles.menuItem}>Notifications</Text>
                </View>
                <Icon1 name="right" color="black" size={20} style={styles.arrowIcon} />
              </View>
              <View style={styles.line} />
              <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                  <Icon1 name="customerservice" color="black" size={20} style={styles.buttonIcon} />
                  <Text style={styles.menuItem}>Help Center</Text>
                </View>
                <Icon1 name="right" color="black" size={20} style={styles.arrowIcon} />
              </View>
            </View>
          </View>

          {/* Logout and Delete Account Section */}
          <View style={styles.outercontainer}>
            <View>
              <View style={styles.btnarrow}>
                <TouchableOpacity onPress={handleLogout} style={styles.menuItemContainer}>
                  <Icon2 name="log-out" color="black" size={20} style={styles.buttonIcon} />
                  <Text style={styles.menuItem}>Logout</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.line} />
              <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                  <Icon1 name="deleteuser" color="black" size={20} style={styles.buttonIcon} />
                  <Text style={styles.menuItem}>Delete Account</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ececec",
  },
  innercontainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: "3%",
    paddingBottom: "5%",
    paddingTop: "5%",
  },
  outercontainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: "3%",
    paddingBottom: "5%",
    paddingTop: "5%",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "7%",
    marginBottom: "5%",
  },
  editProfileText: {
    textAlign: "right",
    fontSize: 16,
    marginRight: 10,
    fontWeight: "bold",
  },
  profileImageContainer: {
    borderRadius: 100,
    backgroundColor: "#F1F1F1",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  username: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginTop: "3%",
  },
  email: {
    color: "#8B8B8B",
    fontSize: 12,
    textAlign: "center",
    marginTop: "1%",
  },
  line: {
    borderBottomColor: "#CBCBCB",
    borderBottomWidth: 0.8,
    marginLeft: "7%",
    marginRight: "7%",
    marginTop: "3%",
  },
  menuItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "7%",
    marginTop: "3%",
  },
  menuItem: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: "5%",
  },
  topcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5%",
  },
  buttonIcon: {
    marginRight: 5,
  },
  arrowIcon: {
    marginTop: 10,
  },
  btnarrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "4%",
  },
});
