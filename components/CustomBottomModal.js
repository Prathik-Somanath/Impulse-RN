import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import React, { forwardRef, useMemo } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';

const CustomBottomModal = forwardRef(({
	title,
	description,
	iconName,
	onConfirm,
	confirmText = 'Yes',
	cancelText = 'No',
	customStyles = {},
  onClose,
  CustomComponent=null
}, ref) => {
	const snapPoints = useMemo(() => ['40%'], []);

	return (
		<BottomSheetModal
			ref={ref}
			index={0}
			snapPoints={snapPoints}
			enablePanDownToClose={true}
			handleIndicatorStyle={{ backgroundColor: '#fff' }}
			backgroundStyle={[styles.modalContainer, customStyles.modalContainer]}
      onDismiss={onClose}
		>
			<View style={styles.contentContainer}>
				
				<CustomComponent />

        {/* Title */}
        <Text style={[styles.title, customStyles.title]}>{title}</Text>

        {/* Description */}
        <Text style={[styles.description, customStyles.description]}>{description}</Text>
				{/* Buttons */}
				<View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.cancelButton, customStyles.cancelButton]} onPress={onConfirm}>
            <Text style={[styles.cancelButtonText, customStyles.cancelButtonText]}>{cancelText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.confirmButton, customStyles.confirmButton]} onPress={onConfirm}>
            <Text style={[styles.confirmButtonText, customStyles.confirmButtonText]}>{confirmText}</Text>
          </TouchableOpacity>
        </View>

			</View>
		</BottomSheetModal>
	);
});

const styles = StyleSheet.create({
	modalContainer: {
		backgroundColor: '#FFF',
    borderRadius: 40
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
    margin: 20,
	},
  outerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFEDED',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  innerCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
	description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginRight: 10,
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
  },
  confirmButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF6A6A',
    borderRadius: 10,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomBottomModal;