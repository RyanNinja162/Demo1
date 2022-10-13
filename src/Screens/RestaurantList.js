import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Card from "../components/Card";

const RestaurantList = (props) => {

    const { data } = props;

    const renderItem = ({ item }) => (
        <Card data={item} />
    );

    return (
        <View>
            <Text style={{ fontWeight: "bold", marginLeft: 20, fontSize: 20 }} >1014 Restaurants around you</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default RestaurantList;