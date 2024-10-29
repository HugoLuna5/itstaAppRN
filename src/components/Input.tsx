import { Text, TextInput, View } from 'react-native';
import React from 'react';


interface InputProps {
  label: string;
  placeholder?: string;
  last?: boolean;
  Icon?: any;
  value?: string;
  onChange?: (text: string) => void;
  keyboardType?: any;
  inputMode?: any
  inputType?: any
  onShowPassword?: (state: boolean) => void
}


const Input = (props: InputProps) => {
  const { label, placeholder, last = false, Icon, value, onChange, keyboardType, inputMode, inputType, onShowPassword } = props;

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <View
      className={`flex flex-col gap-2 relative w-full ${last ? '' : 'mb-5'}`}
    >
      <Text className="font-exo font-semibold text-darkGrayText text-base">
        {label}
      </Text>
      {/** ====================== Text Input ============================= */}
      <View className="flex flex-row items-center justify-between px-4 bg-white h-12 rounded-lg shadow">
        <TextInput
          className={
            'font-exo flex items-center text-darkGrayText text-sm h-full w-full bg-white rounded-lg'
          }
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={inputType === 'password' ? !isPasswordVisible : false}
          keyboardType={keyboardType}
          inputMode={inputMode}
        />
        {/** ====================== Optional Icon ============================= */}
        {Boolean(Icon) ? (
          <Icon
            className="text-lightGrayText absolute right-0 mr-4"
            size={20}
            onPress={() => {
              if (inputType === 'password') {
                setIsPasswordVisible(!isPasswordVisible);
                onShowPassword(!isPasswordVisible);
              }
            }}
            
          />
        ) : null}

        


      </View>
    </View>
  );
};

export default Input;
