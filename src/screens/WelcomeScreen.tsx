import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {welcomeScreenData} from '../assets/data/data';
import {images} from '../assets';
import Button from '../components/Button';
import {RootParamList} from './../navigation/navigationParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styled} from 'nativewind';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {welcome} = images;

const WelcomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  useEffect(() => {
    console.log('Test');
    AsyncStorage.getItem('username').then(value => {
      console.log('username', value);
      if (value) {
        navigation.navigate('Home');
      }
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-bgWhite">
      <View className="flex-1 flex justify-around my-4">
        {/** ====================== Image =================================== */}
        <View className="flex-row justify-center">
          <Image source={welcome} style={{width: 324, height: 324}} />
        </View>

        {/** ====================== Welcome Text ============================= */}
        <View className="flex flex-col gap-2 mt-[-25%]">
          <Text className="text-darkGrayText text-xl text-center font-exoSemibold">
            {welcomeScreenData.title}
          </Text>
          <Text className="text-darkGrayText text-lg text-center font-exo">
            {welcomeScreenData.subtitle}
          </Text>
        </View>

        {/** ====================== Action button ============================= */}
        <Button
          primaryBtnText={'Sign Up'}
          onPrimaryBtnPress={() => {
            navigation.navigate('SignUp');
          }}
          showSecondaryBtn={true}
          secondaryBtnText2={'Skip'}
          onSecondaryBtnPress={() => {
            navigation.navigate('SignIn');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default styled(WelcomeScreen);
