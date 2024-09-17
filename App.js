// App.js
import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import MainScreen from "./src/screens/MainScreen";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  // Loading the fonts
  const [loaded, error] = useFonts({
    'Urbanist-Bold': require('./src/assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-Regular': require('./src/assets/fonts/Urbanist-Regular.ttf'),
  });

  // wait for the fonts to load
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    // required for bottom modal sheet to be implemented
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <BottomSheetModalProvider>
          <MainScreen />
        </BottomSheetModalProvider>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
