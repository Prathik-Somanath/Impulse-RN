import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PopupContainer from "./PopupContainer";
import { Typography, Colors, Mixins, Spacing } from "../assets/styles";

const ProfileImgSection = () => {
  const [showBubble, setShowBubble] = useState(false);

  // functions to handle tooltip
  handleStreakPress = () => setShowBubble(true);

  const handleStreakClose = () => {
    setShowBubble(false);
  };

  // this is required to pass the function to tooltip
  const RenderFire = () => {
    return (
      <TouchableOpacity style={styles.badge} onPress={handleStreakPress}>
        <Ionicons name="flame-sharp" size={Typography.FONT_SIZE_16} color={Colors.THEMEORANGE} />
        <Text style={styles.badgeText}>23</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Circular Profile Image */}
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/profile.png")} style={styles.profileImage} />
        <RenderFire />
        <PopupContainer
          isVisible={showBubble}
          content={"Longest Streak"}
          handleClose={handleStreakClose}
          CustomComponent={RenderFire} // render the item for tooltip
          customToolStyle={{ marginTop: Mixins.scaleSize(-20) }}
        />
      </View>

      {/* Profile Name */}
      <Text style={styles.name}>Alex Carter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Spacing.SCALE_50
  },
  imageContainer: {
    position: "relative",
  },
  profileImage: {
    width: Mixins.scaleSize(130),
    height: Mixins.scaleSize(130),
    borderRadius: Mixins.scaleSize(100),
    borderWidth: 1,
    borderColor: "#fff",
  },
  badge: {
    position: "absolute",
    bottom: Mixins.scaleSize(-10),
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFF",
    borderRadius: Mixins.scaleSize(20),
    paddingVertical: 5,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  badgeText: {
    fontSize: Typography.FONT_SIZE_16,
    marginLeft: 5,
    color: Colors.THEMEORANGE,
    fontWeight: "bold",
  },
  name: {
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.MAIN_TEXT,
    fontFamily: Typography.FONT_TITLE,
    // margin: Mixins.scaleSize(20),
    marginTop: Spacing.SCALE_20
  },
});

export default ProfileImgSection;
