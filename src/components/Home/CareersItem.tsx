import {View, Text, Image} from 'react-native';
import React from 'react';

const CareersItem = ({career}) => {
  return (
    <View className="max-w-[148px] min-h-[148px]  p-2 rounded-xl shadow ">
      {/**============== Teacher Image ================ */}
      <View className="rounded-xl">
        <Image
          source={{uri: career.image}}
          style={{height: 128, width: 132}}
          className="rounded-xl"
          resizeMode="stretch"
        />
      </View>
      {/**============== Teacher's Name and subject ================ */}
    </View>
  );
};

export default CareersItem;
