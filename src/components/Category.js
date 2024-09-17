import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import PopupContainer from "./PopupContainer";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Mixins, Typography } from "../assets/styles";

const Category = ({ categories }) => {
  const [showBubble, setShowBubble] = useState(false);

  // when pressed on the category card only open when it is on Playing
  const handleCategoryPress = (item) => {
    if (item.title === "Playing") {
      setShowBubble(true);
      // setTimeout(() => setShowBubble(false), 2000);
    }
  };

  const handleCategoryClose = () => {
    setShowBubble(false);
  };

  const CategoryItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleCategoryPress(item)}>
        <View style={styles.container}>
          <Ionicons
            name={item.iconName}
            size={Mixins.scaleSize(18)}
            color={Colors.THEMEORANGE}
            style={{
              transform: [{ rotate: item.title == "Gym" ? "-30deg" : "0deg" }], // matching the icon in the mockup
            }}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCategoryItem = ({ item }) => {
    return (
      // custom container to show the text when pressed
      <PopupContainer
        isVisible={item.title === "Playing" && showBubble}
        content={"12 posts in playing category"}
        handleClose={handleCategoryClose}
        CustomComponent={CategoryItem}
        data={item}
      />
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 1,
    paddingVertical: Mixins.scaleSize(2),
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: Mixins.scaleSize(100),
    paddingVertical: Mixins.scaleSize(14),
    paddingHorizontal: Mixins.scaleSize(18),
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1.5,
    marginRight: Mixins.scaleSize(10),
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.SUB_TEXT,
    marginLeft: Mixins.scaleSize(6),
  },
});

export default Category;
