import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import icons from react-native-vector-icons

const BadgeList = ({ badges }) => {
  // Render individual badge item
  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={item.backgroundImage}  // Set background image
        resizeMode="cover"
        style={styles.backgroundImage}
        imageStyle={{ borderRadius: 20 }}  // Rounded corners for the background image
      >
        <View style={styles.contentContainer}>
          {/* Image for the center icon */}
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <FlatList
      data={badges}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatlistContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  cardContainer: {
    width: 150,  // Width of each card
    height: 200, // Height of each card
    marginHorizontal: 10,
    borderRadius: 20,  // For rounded corners
    overflow: 'hidden', // Clip overflowed content
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 60,  // Set width for the icon
    height: 60,  // Set height for the icon
    resizeMode: 'contain',  // Ensure the image scales correctly
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFA500',  // Match the color of the text
    marginTop: 10,
  },
});

export default BadgeList;