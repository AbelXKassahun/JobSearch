// import EditScreenInfo from '@/components/EditScreenInfo';
import { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES} from '../constants';

import { ScreenHeaderBtn, Welcome, Nearbyjobs, Popularjobs } from '../components';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const Home = () => {
  const router  = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
              ),
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={icons.profile} dimension="60%"/>
                ),
                headerTitle: ""
              }}
              />
        <ScrollView showsVerticalScrollIndicator = {false}>
          <View 
            style = {{
              flex: 1,
              padding: SIZES.medium
            }}
            >
            <Welcome/>
            <Popularjobs/>
            <Nearbyjobs/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default Home;
