import {View, Text, Image, Pressable, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderText from './../components/HeaderText';
import {images} from '../assets';
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import {themeColors} from '../theme';

const {avatar} = images;

import ProgressDialog from '../components/ProgressDialog';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="bg-bgWhite px-7 pt-5 pb-[-35px] flex-1">
      {/**============= Header Area =================== */}
      <View className="flex flex-row items-center justify-between"></View>
    </SafeAreaView>
  );
}
