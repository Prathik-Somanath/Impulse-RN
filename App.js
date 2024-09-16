// App.js
import React from 'react';
import MainScreen from './screens/MainScreen';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetModalProvider>
        <MainScreen />
    </BottomSheetModalProvider>
      </GestureHandlerRootView>
  );
}
