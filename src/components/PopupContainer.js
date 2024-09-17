import React from "react";
import { Text, StyleSheet } from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";
import { Typography, Colors, Mixins } from "../assets/styles";

const PopupContainer = ({
  CustomComponent,
  isVisible,
  handleClose,
  content,
  data = null,
  customToolStyle,
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
      // arrowStyle={{ zIndex: 100, elevation: 15, backgroundColor: 'red' }}
      arrowStyle={styles.arrowtipStyle}
      disableShadow={true}
    >
      {/* component to be rendered from the parent required for tooltip */}
      <CustomComponent item={data} />
    </Tooltip>
  );
};

const styles = StyleSheet.create({
  tooltipText: {
    color: Colors.SUB_TEXT,
    fontSize: Typography.FONT_SIZE_12,
  },
  tooltipStyle: {
    marginTop: Mixins.scaleSize(0),
    // backgroundColor: '#A6A6A610'
  },
  tooltipContent: {
    backgroundColor: '#EEEFF5',
    borderBlockColor: Colors.GREY_ICON,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 15,
  },
  arrowtipStyle: {
    borderTopWidth: 10,
    // borderRightWidth: 30,
    borderBottomWidth: 0,
    // borderLeftWidth: 30,
    borderTopColor: '#EEEFF5',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',

    zIndex: 100,
}
});

export default PopupContainer;
