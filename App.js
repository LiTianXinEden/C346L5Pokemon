//exercise 3============================
import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, SectionList, Image, Button, StatusBar} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const styles = StyleSheet.create({
    itemStyle: {
        alignItems: 'center',
        borderWidth: 2,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        padding: 10,
    },


    headerStyle: {
        borderWidth: 1,
        flexDirection: 'row', // Makes items in a row
        alignItems: 'center', // Vertically center icon and title
        justifyContent: 'center',
        padding: 10,
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',

    },

    textStyle: {
        fontSize: 15,
        margin: 15,
        flex: 1,

    },

    imageStyle: {
        width: 230,           // Set width for the image
        height: 360,          // Set height for the image
        resizeMode: 'contain' // Ensures the whole image fits within the space without cropping
    },

    waterIcon: {
        color: "blue",
    },

    grassIcon: {
        color: "green",
    },

    normalIcon: {
        color: "gray",
    },
})

const cards = [
  {data:[
      {key: 'Dewgong', image: require('./img/dewgong.png'), },
      {key: 'Kingler', image: require('./img/kingler.png'),},

    ],
    title: "Water", bgcolor: "#68bdff", icon: "water",},

  {data: [
      {key:'Ivysaur', image: require('./img/ivysaur.png'),},
      {key: 'Beedrill', image: require('./img/beedrill.png')},

    ],
    title: "Grass", bgcolor:"#b6ff68", icon: "grass"},

  {data: [
      {key:'Chansey', image: require('./img/chansey.png')},
      {key: 'Porygon', image: require('./img/porygon.png')},

    ],
    title: "Normal", bgcolor:"#bcc6df", icon: "circle-o"},
];

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.itemStyle}>
        <Text style={styles.textStyle} > {item.key}</Text>
          <Image
              source={item.image}
              style={styles.imageStyle}
              // style={{ width: 330, height: 460 }}
          />
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={{margin: 20,}}>
          <StatusBar hidden={true}/>
          <Text></Text>
          <Text></Text>
          <Button title= "Add Pokemon" color="#70b5cb" />
          <Text></Text>
        <SectionList
            sections={cards}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgcolor, icon } }) => (
                <View style={[styles.headerStyle, { backgroundColor: bgcolor }]}>
                    {icon === "water" && <Ionicons name="water" size={24} style={styles.waterIcon} />}
                    {icon === "grass" && <MaterialIcons name="grass" size={24} style={styles.grassIcon} />}
                    {icon === "circle-o" && <FontAwesome name="circle-o" size={24} style={styles.normalIcon} />}

                    <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
        />

      </View>
  );
};

export default App;
