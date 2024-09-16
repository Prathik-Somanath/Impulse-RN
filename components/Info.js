// components/InfoComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to import the specific icon library you need

const Info = ({ information }) => {
  return (
    <View style={styles.infoRow}>
      {information.map((info, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>{info.title}</Text>
            <View style={styles.iconWithText}>
              <Ionicons name={info.iconName} size={20} color="#FFA500" />
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    backgroundColor: '#fff',
    width: '46%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 5,
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtext: {
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
  },
});

export default Info;
