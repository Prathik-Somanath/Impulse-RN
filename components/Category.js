// components/Category.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import PopupContainer from './PopupContainer';
import { Ionicons } from '@expo/vector-icons';
import Tooltip from 'react-native-walkthrough-tooltip';

const Category = ({ categories }) => {
	const [showBubble, setShowBubble] = useState(false);

	const handleCategoryPress = (item) => {
    if (item.title === 'Playing') {
			setShowBubble(true);
			// setTimeout(() => setShowBubble(false), 2000);
    }
  };

	const handleCategoryClose = () => {
		setShowBubble(false)
	}

  const CategoryItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleCategoryPress(item)}>
        <View style={styles.container}>
          <Ionicons name={item.iconName} size={24} color="#FFA500" />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

	const renderCategoryItem = ({ item }) => {
    return (
      <PopupContainer 
        isVisible={item.title === 'Playing' && showBubble}
        content={'12 posts in playing category'}
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
  )
};

const styles = StyleSheet.create({
	listContainer: {
    paddingHorizontal: 10,
		paddingVertical: 20
  },
	container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 8,
  }
});

export default Category;
