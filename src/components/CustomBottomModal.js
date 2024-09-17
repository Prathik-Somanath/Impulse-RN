import React, { forwardRef, useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomButton from "./CustomBotton";
import { Colors, Mixins, Spacing, Typography } from "../assets/styles";

const CustomBottomModal = forwardRef(
  (
    {
      title,
      description,
      onConfirm,
      confirmText = "Yes",
      cancelText = "No",
      customStyles = {},
      onClose,
      CustomComponent = null,
    },
    ref
  ) => {
    // height at which the bottom sheet snaps to the screen
    const snapPoints = useMemo(() => ["40%"], []);

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        handleIndicatorStyle={{ backgroundColor: "#fff" }}
        backgroundStyle={[styles.modalContainer, customStyles.modalContainer]}
        onDismiss={onClose}
      >
        <View style={styles.contentContainer}>
          {/* this component is passed from the parent component to render custom component */}
          <CustomComponent />

          {/* Title */}
          <Text style={[styles.title, customStyles.title]}>{title}</Text>

          {/* Description */}
          <Text style={[styles.description, customStyles.description]}>
            {description}
          </Text>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <CustomButton
              title={cancelText}
              onPress={onClose}
              style={[styles.cancelButton, customStyles.cancelButton]}
              textStyle={[styles.cancelButtonText, customStyles.cancelButtonText]}
            />
            <CustomButton
              title={confirmText}
              onPress={onConfirm}
              style={[styles.confirmButton, customStyles.confirmButton]}
              textStyle={[styles.confirmButtonText, customStyles.confirmButtonText]}
            />
          </View>
        </View>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#FFF",
    borderRadius: 40,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  title: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: "bold",
    marginBottom: Spacing.SCALE_8,
    fontFamily: Typography.FONT_TITLE_BOLD,
  },
  description: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.SUB_TEXT,
    textAlign: "center",
    marginBottom: Mixins.scaleSize(32),
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    backgroundColor: Colors.THEMEWHITE,
    marginRight: 10,
  },
  cancelButtonText: {
    color: Colors.MAIN_TEXT,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_TITLE_BOLD,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: Colors.LIGHT_CORAL,
  },
  confirmButtonText: {
    color: Colors.THEMEWHITE,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_TITLE_BOLD,
    fontWeight: 'bold',
  },
});

export default CustomBottomModal;
