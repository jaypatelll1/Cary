
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const DrawerList = [
    { icon: 'user', label: 'Profile', navigateTo: 'Profile' },
    { icon: 'wallet', label: 'Payments', navigateTo: 'Home' },
    { icon: 'clockcircleo', label: 'My Trips', navigateTo: 'User' },
    { icon: 'questioncircleo', label: 'Support', navigateTo: '' },
    { icon: 'infocirlceo', label: 'About', navigateTo: '' },
];
const DrawerLayout = ({ icon, label, navigateTo }) => {
    const navigation = useNavigation();
    return (
        <DrawerItem
            icon={({ color, size }) => <Icon name={icon} color={color} size={size} />}
            label={label}
            onPress={() => {
                navigation.navigate(navigateTo);
            }}
        />
    );
};

const DrawerItems = props => {
    return DrawerList.map((el, i) => {
        return (
            <DrawerLayout
                key={i}
                icon={el.icon}
                label={el.label}
                navigateTo={el.navigateTo}
            />
        );
    });
};
function DrawerContent(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "#ECECEC" }}>

            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.outercontainer1}>
                    <Icon
                        name="arrowleft"
                        color="black"
                        size={30}
                        style={styles.buttonIcon}
                    />
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row' }}>

                            <View style={styles.innercontainer}>
                                <View style={styles.profileImageContainer}>
                                    <Icon name="user" color="gray" size={30} />
                                </View>
                                <View style={{ flexDirection: "column", marginLeft: 15 }}>
                                    <Text style={styles.username}>Dev Pandhi</Text>
                                    <Text style={styles.email}>Manage Account</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    </View>
                    <View style={styles.outercontainer2}>
                    <DrawerItems />
                    </View>
                    <View style={styles.outercontainer3}>
                    </View>

                </View>
            </DrawerContentScrollView>
        </View>
    );
}
export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },

    buttonIcon: {
        marginTop: 5,
        marginBottom: 10,
        marginLeft: "5%",

    },
    innercontainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginBottom: "3%",
        paddingBottom: "5%",
        paddingTop: "5%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

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
    outercontainer1: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginBottom: "3%",
        paddingBottom: "5%",
      },
      outercontainer2: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginBottom: "3%",
        paddingBottom: "5%",
        paddingTop: "5%",
      },
      outercontainer3: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginBottom: "3%",
        paddingBottom: "5%",
        paddingTop: "5%",
        height: "100%"
      },
});