import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Card = (props) => {

    const { data, time = 30, veg = true } = props;

    const { id, category, description, rating, title, price, image } = data;

    const { count, rate } = rating;

    console.log("data", data)

    return (
        <View style={styles.container} >
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.wishlist}>
                    <Fontisto name="heart-alt" size={20} color="pink" />
                </View>
                <View style={styles.distance}>
                    <AntDesign name="clockcircle" size={12} color={time > 30 ? "yellow" : "green"} style={styles.clockImage} />
                    <Text>50 min | 10 Km</Text>
                </View>
                {veg && <View style={styles.vegContainer}>
                    <Entypo name="leaf" size={20} color="#fff" />
                    <Text style={styles.vegText}>PURE VEG RESTAURANT</Text>
                </View>}
                <View style={styles.discount}>
                    <MaterialIcons name="local-offer" size={14} color="#fff" />
                    <Text style={styles.discountText}>Get items @129 only</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.heading}>
                    <Text style={styles.name}>Wok on Fire</Text>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>3.9</Text>
                        <Entypo name="star" size={12} color="#fff" />
                    </View>
                </View>
                <View style={styles.heading}>
                    <Text>Chinese,Thai, Asian</Text>
                    <Text>300 for 1</Text>
                </View>

                <View style={styles.addressContainer}>
                    <View style={styles.trendingIconContainer}>
                        <Feather name="trending-up" size={12} color="#fff" />
                    </View>
                    <Text>9450+ orders placed from here recently</Text>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 20,
        shadowColor: '#52006A',
        elevation: 20,
        backgroundColor: "#fff"
    },
    discount: {
        position: "absolute",
        bottom: 10,
        left: 0,
        backgroundColor: "purple",
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        flexDirection: "row",
        alignItems: "center"
    },
    discountText: {
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 4
    },
    vegText: {
        color: "#fff",
        fontWeight: "bold"
    },
    vegContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: "row",
        paddingVertical: 6
    },
    imageContainer: {
        position: "relative"
    },
    trendingIconContainer: {
        backgroundColor: "purple",
        borderRadius: 50,
        padding: 4,
        marginRight: 8
    },
    addressContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15
    },
    clockImage: {
        marginRight: 6
    },
    distance: {
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 10,
        right: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 6,
        borderRadius: 6
    },
    image: {
        width: "100%",
        height: 250,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    wishlist: {
        position: "absolute",
        right: 10,
        top: 40,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 100
    },
    name: {
        fontWeight: "bold",
        fontSize: 20
    },
    footer: {
        padding: 10
    },
    heading: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6
    },
    rating: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "green",
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    ratingText: {
        marginRight: 6,
        fontWeight: "bold",
        color: "#fff"
    }
});

export default Card;