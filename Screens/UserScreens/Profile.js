import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Feather";
export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.innercontainer}>
            <View style={styles.topcontainer}>
              <Icon1
                name="arrowleft"
                color="black"
                size={30}
                style={styles.buttonIcon}
              />
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </View>
            <View style={styles.profileImageContainer}></View>
            <Text style={styles.username}>Dev Pandhi</Text>
            <Text style={styles.email}>devpandhi1@gmail.com</Text>
          </View>

          <View style={styles.outercontainer}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginLeft: "7%" }}
            >
              Saved Places
            </Text>
            <View>
            <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                <Icon1
                  name="home"
                  color="black"
                  size={20}
                  style={styles.buttonIcon}
                />
                <Text style={styles.menuItem}>Enter Home Location</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Icon1
                    name="right"
                    color="black"
                    size={20}
                    style={styles.buttonIcon}
                  />
                </View>
              </View>
              <View style={styles.line} />
              <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                <Icon2
                  name="briefcase"
                  color="black"
                  size={20}
                  style={styles.buttonIcon}
                />
                <Text style={styles.menuItem}>Enter Work Location</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Icon1
                    name="right"
                    color="black"
                    size={20}
                    style={styles.buttonIcon}
                  />
                </View>
              </View>
              <View style={styles.line} />
              <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                <Icon1
                  name="plus"
                  color="black"
                  size={20}
                  style={styles.buttonIcon}
                />
                <Text style={styles.menuItem}>Add a place</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Icon1
                    name="right"
                    color="black"
                    size={20}
                    style={styles.buttonIcon}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.outercontainer}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginLeft: "7%" }}
            >
              Others
            </Text>
            <View>
            <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                <Icon2
                  name="dollar-sign"
                  color="black"
                  size={20}
                  style={styles.buttonIcon}
                />
                <Text style={styles.menuItem}>Payment methods</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Icon1
                    name="right"
                    color="black"
                    size={20}
                    style={styles.buttonIcon}
                  />
                </View>
              </View>
              <View style={styles.line} />
              <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                <Icon1
                  name="notification"
                  color="black"
                  size={20}
                  style={styles.buttonIcon}
                />
                <Text style={styles.menuItem}>Notifications</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Icon1
                    name="right"
                    color="black"
                    size={20}
                    style={styles.buttonIcon}
                  />
                </View>
              </View>
              
              <View style={styles.line} />
              <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                <Icon1
                  name="customerservice"
                  color="black"
                  size={20}
                  style={styles.buttonIcon}
                />
                <Text style={styles.menuItem}>Help Center</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Icon1
                    name="right"
                    color="black"
                    size={20}
                    style={styles.buttonIcon}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.outercontainer}>
            <View>
              <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                <Icon1
                  name="logout"
                  color="black"
                  size={20}
                  style={styles.buttonIcon}
                />
                  <Text style={styles.menuItem}>Logout</Text>
                </View>
              </View>
              <View style={styles.line} />
              <View style={styles.btnarrow}>
                <View style={styles.menuItemContainer}>
                  <Icon1
                    name="deleteuser"
                    color="black"
                    size={20}
                    style={styles.buttonIcon}
                  />
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
  backImage: {
    marginLeft: "5%",
    marginTop: "8%",
    flex: 1,
    width: 30,
    height: 10,
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
  profileImage: {
    width: "50%",
    height: "100%",
  },
  username: {
    color: "#000000", // or "#000000" as per your requirement
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginTop: "3%",
  },
  email: {
    color: "#8B8B8B", // or "#000000" as per your requirement
    fontSize: 16,
    textAlign: "center",
    marginTop: "1%",
  },
  line: {
    borderBottomColor: "#CBCBCB",
    borderBottomWidth: 1,
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
  arrowIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  menuIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  menuItem: {
    fontSize: 16,
  },
  topcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5%",
    marginTop: 15,
  },
  buttonIcon: {
    marginRight: 5,
  },
  btnarrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "4%",
  },
});
