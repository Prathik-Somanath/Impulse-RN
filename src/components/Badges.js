import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
} from "react-native";
import { Typography, Colors, Mixins } from "../assets/styles";

const BadgeList = ({ badges }) => {
  // Render individual badge item
  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={item.backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
        imageStyle={{ borderRadius: 20 }}
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
    />
  );
};

const styles = StyleSheet.create({

  cardContainer: {
    width: Mixins.scaleSize(128),
    height: Mixins.scaleSize(148),
    marginRight: Mixins.scaleSize(16),
    borderRadius: Mixins.scaleSize(20),
    overflow: "hidden",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    width: Mixins.scaleSize(55),
    height: Mixins.scaleSize(55),
    resizeMode: "contain",
  },
  title: {
    fontSize: Typography.FONT_SIZE_14,
    fontWeight: "bold",
    color: Colors.THEMEORANGE,
    fontFamily: Typography.FONT_TITLE_BOLD,
    marginTop: Mixins.scaleSize(20),
  },
});

export default BadgeList;
