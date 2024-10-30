import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {images} from '../assets';
import Button from './../components/Button';
import Input from './../components/Input';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamList} from '../navigation/navigationParamList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authService} from '../services/auth';
import ProgressDialog from '../components/ProgressDialog';
const {signin} = images;

export default function SignInScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const [noControl, setNoControl] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSignIn = () => {
    if (noControl && password) {
      setLoading(true);
      authService
        .signinService(noControl, password)
        .then(async (res: any) => {
          setLoading(false);
          const data = res.result.access;
          if (data.passwordURL) {
            console.log('Has iniciado sesión');
            await AsyncStorage.setItem('username', noControl);
            await AsyncStorage.setItem('password', password);

            await AsyncStorage.setItem('passwordURL', data.passwordURL);
            await AsyncStorage.setItem('controlURL', data.controlURL);
            await AsyncStorage.setItem('psieURL', data.psieURL);
            await AsyncStorage.setItem('dummyURL', data.dummyURL);
            navigation.navigate('Home');
          }
        })
        .catch(error => {
          setLoading(false);
          console.log(error);
        });
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8">
      <View className="flex-1 flex justify-around my-4">
        {/** ====================== Image ============================= */}
        <View className="flex-row justify-center mb-[-15%]">
          <Image source={signin} style={{width: 266, height: 266}} />
        </View>

        {/** ====================== Sign In inputs ============================= */}
        <View className="flex flex-col w-full items-center justify-center mt-3">
          <Input
            label={'Número de control'}
            placeholder={'173X0000'}
            inputType={'normal'}
            onChange={e => setNoControl(e)}
            value={noControl}
          />
          <Input
            label={'Contraseña'}
            placeholder={'********'}
            Icon={showPassword ? EyeSlashIcon : EyeIcon}
            inputType={'password'}
            onChange={e => setPassword(e)}
            value={password}
            onShowPassword={handleShowPassword}
            last
          />
        </View>

        {/** ====================== Action button ============================= */}
        <Button
          primaryBtnText={'ENTRAR'}
          onPrimaryBtnPress={() => handleSignIn()}
          secondaryBtnText1={'¿No tienes cuenta?'}
          secondaryBtnText2={'Contacta a soporte'}
          showSecondaryBtn={true}
          onSecondaryBtnPress={() => {}}
        />

        <ProgressDialog isOpen={loading} />
      </View>
    </SafeAreaView>
  );
}
