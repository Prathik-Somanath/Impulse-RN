// components/InfoComponent.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to import the specific icon library you need
import { Typography, Colors, Mixins, Spacing } from "../assets/styles";

const Info = ({ information }) => {
  return (
    <View style={styles.infoRow}>
      {/* information is array of objects containing date and posts info */}
      {information.map((info, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>{info.title}</Text>
            <View style={styles.iconWithText}>
              <Ionicons name={info.iconName} size={Mixins.scaleSize(13)} color={Colors.SUB_TEXT} />
              <Text style={styles.subtext}>{info.subtext}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: Colors.INFO_CARD,
    width: "48%",
    borderRadius: Spacing.SCALE_20,
    padding: Spacing.SCALE_16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 0.5,
  },
  content: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.FONT_TITLE_BOLD,
    color: Colors.THEMEORANGE,
    marginBottom: Spacing.SCALE_6,
  },
  iconWithText: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtext: {
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.SUB_TEXT,
    fontFamily: Typography.FONT_TITLE,
    marginLeft: 5,
  },
});

export default Info;
