import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { LayoutChangeEvent } from "react-native";
// import { DefaultNavigator } from 'expo-router/build/views/Navigator';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';

// import { useColorScheme } from '@/components/useColorScheme';


// SplashScreen.preventAutoHideAsync();

const Layout = ()  => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // const onLayoutRootView: LayoutChangeEvent = useCallback(async () => {
  //   if(fontsLoaded){
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded])

  if(!fontsLoaded) return null;

  return (
    <Stack/>
  );
}

export default Layout;
