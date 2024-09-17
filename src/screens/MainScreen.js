// screens/MainScreen.js
import React, { useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import Info from "../components/Info";
import Category from "../components/Category";
import Badges from "../components/Badges";
import ProfileImgSection from "../components/ProfileImgSection";
import CustomBottomModal from "../components/CustomBottomModal";
import { infoData, badgesData, categoriesData } from "../assets/data"
import { Colors, Typography, Spacing, Mixins } from "../assets/styles"

const MainScreen = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const bottomSheetRef = useRef(null);    // required to open the bottom modal sheet
  const { dismiss } = useBottomSheetModal();

  // functions to handle the bottom modal sheet
  const handleModalClose = () => {
    dismiss();
    setModalIsOpen(false);
  };
  const handleModalPress = () => {
    setModalIsOpen(true);
    bottomSheetRef.current?.present();
  };

  // function to render the custom content inside the bottom modal sheet
  const renderModalHealth = () => {
    return (
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle}>
          <Ionicons
            name={"heart-dislike-outline"}
            size={Mixins.scaleSize(35)}
            color={Colors.RED}
            style={{ transform: [{ rotateY: "180deg" }], fontWeight: 'condensedBold'  }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={Typography.FONT_SIZE_28} color={Colors.SUB_TEXT} />
        <Text style={styles.headerTitle}>Partner Insight</Text>
        <Ionicons
          name="heart-dislike-outline"
          size={Typography.FONT_SIZE_28}
          color={Colors.RED}
          onPress={handleModalPress}
          style={{ transform: [{ rotateY: "180deg" }] }}
        />
      </View>

      <ProfileImgSection />

      <Info information={infoData} />

      {/* Popular Categories */}
      <Text style={styles.sectionTitle}>Popular Categories</Text>
      <Category categories={categoriesData} />

      {/* Badges Earned */}
      <Text style={styles.sectionTitle}>Badges Earned</Text>
      <Badges badges={badgesData} />

      {/* Passing the parameters to custom modal */}
      <CustomBottomModal
        ref={bottomSheetRef}
        title="Unmatch"
        description="Are you sure you want to unmatch Alex Carter?"
        iconName="heart-dislike-outline"
        onConfirm={handleModalClose}
        onClose={handleModalClose}
        confirmText="Yes"
        cancelText="No"
        CustomComponent={renderModalHealth}
        customStyles={{
          modalContainer: { padding: 30 },
          confirmButton: {
            backgroundColor: "#FF6A6A",
            width: "50%",
            borderRadius: 20,
            alignItems: "center",
          },
          cancelButton: {
            width: "50%",
            borderRadius: 20,
            alignItems: "center",
          },
        }}
      />

      {/* Is used to blur the background when the bottom sheet modal opens */}
      {modalIsOpen ? (
        <BlurView
          style={styles.absolute}
          intensity={8}
          tint="dark"
          experimentalBlurMethod="dimezisBlurView"
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Spacing.SCALE_12,
    padding: Spacing.SCALE_20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.SCALE_50,
  },
  headerTitle: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: "bold",
    fontFamily: Typography.FONT_TITLE_BOLD
  },
  sectionTitle: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: "bold",
    fontFamily: Typography.FONT_TITLE_BOLD,
    marginBottom: Spacing.SCALE_16,
    marginTop: Spacing.SCALE_40,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // zIndex: -1
  },
  outerCircle: {
    width: Mixins.scaleSize(100),
    height: Mixins.scaleSize(100),
    borderRadius: Mixins.scaleSize(50),
    backgroundColor: "#FEEFEF",
    // opacity: 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Spacing.SCALE_20,
    zIndex: -1
  },
  innerCircle: {
    width: Mixins.scaleSize(70),
    height: Mixins.scaleSize(70),
    borderRadius: Mixins.scaleSize(35),
    backgroundColor: "#FED5D7",
    justifyContent: "center",
    alignItems: "center"
  },
});

export default MainScreen;
