import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PopupContainer from './PopupContainer';

const ProfileImgSection = () => {
  const [showBubble, setShowBubble] = useState(false);

  handleStreakPress = () => setShowBubble(true)

  const handleStreakClose = () => {
		setShowBubble(false)
	}

  const RenderFire = () => {
    return (
      <TouchableOpacity style={styles.badge} onPress={handleStreakPress}>
          <Ionicons name="flame-sharp" size={16} color="#FFA500" />
          <Text style={styles.badgeText}>23</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      {/* Circular Profile Image */}
      <View style={styles.imageContainer}>
        <Image 
          source={ require('../assets/images/profile.png') }  // Replace with your image source
          style={styles.profileImage}
        />
        <RenderFire />
        <PopupContainer 
          isVisible={showBubble}
          content={'Longest Streak'}
          handleClose={handleStreakClose}
          CustomComponent={RenderFire}
          customToolStyle={{marginTop: -40}}
        />
      </View>

      {/* Profile Name */}
      <Text style={styles.name}>Alex Carter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 130,  // Adjust size
    height: 130, // Adjust size
    borderRadius: 100,  // Circular shape
    borderWidth: 1,
    borderColor: '#fff', // Optional border around the image
  },
  badge: {
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 20, // Rounded badge
    paddingVertical: 5,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,  // To show shadow on Android
  },
  badgeText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#FFA500',  // Same color as the fire icon
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    color: '#4A4A4A',
    fontWeight: '600',
    margin: 20,
  },
});

export default ProfileImgSection;