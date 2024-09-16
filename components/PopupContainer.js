import React from "react";
import {
  Text,
  StyleSheet,
} from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";

const PopupContainer = ({
  CustomComponent,
  isVisible,
  handleClose,
  content,
	data=null,
	customToolStyle
}) => {
  return (
    <Tooltip
      isVisible={isVisible}
      content={<Text style={styles.tooltipText}>{content}</Text>}
      placement="top"
      onClose={handleClose}
      backgroundColor="transparent"
      tooltipStyle={[styles.tooltipStyle, customToolStyle]}
      showChildInTooltip={false}
      contentStyle={styles.tooltipContent}
      arrowStyle={{ zIndex: 1 }}
    >
      <CustomComponent item={data} />
    </Tooltip>
  );
};

const styles = StyleSheet.create({
  tooltipText: {
    color: "#6B7280",
    fontSize: 12,
  },
  tooltipStyle: {
    marginTop: -15,
  },
  tooltipContent: {
    backgroundColor: "#FFFFFF",
    borderBlockColor: "black",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 15,
  },
});

export default PopupContainer;
