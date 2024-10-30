import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import FilterItem from './FilterItem';

const AreaFilter = ({filters}) => {
  const [selected, setSelected] = useState(filters[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataAux = [];
    dataAux.push({
      id: 0,
      name: 'Todas',
    });
    setSelected(dataAux[0]);
    dataAux.push(...filters);
    setData(dataAux);
  }, [filters]);
  return (
    <View className="mb-5">
      <Text className="font-exoSemibold text-darkGrayText text-xs capitalize ">
        Categoria
      </Text>
      <View className="flex flex-row mt-3 overflow-x-auto">
        <FlatList
          data={data.sort((a, b) => a.id - b.id)}
          horizontal={true}
          className="w-full py-4 bg-transparent"
          renderItem={({item}) => (
            <FilterItem
              item={item.name}
              selected={selected}
              setSelected={setSelected}
            />
          )}
          keyExtractor={(item, index) => `category-${item.id}`}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default AreaFilter;
