import {
    View,
    Text,
    Image,
    Pressable,
    FlatList,
    ScrollView,
  } from 'react-native';
  import React, { useState } from 'react';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import HeaderText from './../components/HeaderText';
  import { images } from '../assets';
  import {
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
  } from 'react-native-heroicons/outline';
  import { themeColors } from '../theme';
  import {
    areaFilters,
    institutionData,
    subjectFilters,
    teacherData,
  } from '../assets/data/data';
  
  
  const { avatar } = images;