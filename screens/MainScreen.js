// screens/MainScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileImgSection from '../components/ProfileImgSection';
import categoriesData from '../assets/data/categories';
import infoData from '../assets/data/info';
import badgesData from '../assets/data/badges';
import Info from '../components/Info';
import Category from '../components/Category';
import Badges from '../components/Badges';
import { BlurView } from 'expo-blur';
import CustomBottomModal from '../components/CustomBottomModal';
import { Ionicons } from '@expo/vector-icons';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import Tooltip from 'react-native-walkthrough-tooltip';

const MainScreen = () => {
  
	const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const bottomSheetRef = useRef(null);
  const { dismiss } = useBottomSheetModal();

	const handleModalClose = () => {
    dismiss()
    setModalIsOpen(false)
  };
  const handleModalPress = () => {
    setModalIsOpen(true)
    bottomSheetRef.current?.present()
  };

  const renderModalHealth = () => {
    return (
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle}>
          <Ionicons name={'heart-dislike-outline'} size={40} color="#FF6A6A" style={{transform: [{rotateY: '180deg'}]}} />
        </View>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Partner Insight</Text>
        <Ionicons name="heart-dislike-outline" size={24} color="red" onPress={handleModalPress} style={{transform: [{rotateY: '180deg'}]}}/>
      </View>

      <ProfileImgSection/>

      <Info information={infoData} />


      {/* Popular Categories */}
      <Text style={styles.sectionTitle}>Popular Categories</Text>
      <Category categories={categoriesData} />

      {/* Badges Earned */}
      <Text style={styles.sectionTitle}>Badges Earned</Text>
      <Badges badges={badgesData} />

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
          confirmButton: { backgroundColor: '#FF6A6A', width: '50%', borderRadius: 20, alignItems: 'center' },
          cancelButton: { width: '50%', borderRadius: 20, alignItems: 'center' }
        }}
      />

      { modalIsOpen ?
        <BlurView
          style={styles.absolute}
          intensity={5}
          tint="dark"
          experimentalBlurMethod='dimezisBlurView'
        />
        : null
      }

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeModal: {
    fontSize: 16,
    color: '#007bff',
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
  }
});

export default MainScreen;
