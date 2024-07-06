import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import Icon1 from "react-native-vector-icons/AntDesign";
import React from "react";
import globalStyles from '../../globalStyles';

const EditProfile = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View>
          <View>
            <Icon1
              name="arrowleft"
              color="black"
              size={30}
              style={styles.buttonIcon}
            />
          </View>
          <View>
            <Text style={[globalStyles.text]}>Account Info</Text>
          </View>
          <View>
            <View style={styles.profileImageContainer}>
              <Icon1 name="user" color="gray" size={70} />
            </View>
          </View>
          <View>
            <Text style={styles.accountInfo}>Basic Details</Text>
          </View>
          <View>
            <Text style={styles.formInput}>Name</Text>
            <TextInput placeholder="Dev Pandhi" style={{ marginLeft: "7%"}}></TextInput>
            <View style={styles.line} />
          </View>
          <View>
            <Text style={styles.formInput}>Phone Number</Text>
            <TextInput placeholder="7045999817" style={{ marginLeft: "7%",}}></TextInput>
            <View style={styles.line} />
          </View>
          <View>
            <Text style={styles.formInput}>Email</Text>
            <TextInput placeholder="devpandhi1@gmail.com" style={{ marginLeft: "7%"}}></TextInput>
            <View style={styles.line} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  accountInfo: {
    marginLeft: "8%",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  buttonIcon: {
    marginTop: 50,
    marginBottom: 10,
    marginLeft: "5%",
  },
  profileImageContainer: {
    borderRadius: 100,
    backgroundColor: "#F1F1F1",
    width: 104,
    height: 104,
    justifyContent: "left",
    marginLeft: "8%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
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
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: "100%",
  },
  line: {
    borderBottomColor: "#CBCBCB",
    borderBottomWidth: 1,
    marginLeft: "7%",
    marginRight: "7%",
    marginBottom: "3%"
  },
  formInput: {
    marginLeft: "7%",
    marginBottom: "3%",
    marginTop: "3%"
}
});
