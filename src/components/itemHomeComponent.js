import {cloneElement} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

const ItemHomeComponent = ({navigation, items}) => {
  return (
    <FlatList
      data={items}
      renderItem={({item, index}) => {
        // if (index == 2 || index == 3) {
        //   index++;
        // }
        index++;
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.screen);
            }}>
            <View
              style={{
                width: 166,
                height: 139,
                borderRadius: 20,
                backgroundColor:
                  ((index - (index % 2)) / 2) % 2 == 0 ? '#8DD4FC' : '#FFCFA2',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 11,
                marginBottom: 11,
              }}>
              <Image source={item.image} style={{width: 60, height: 60}} />
              <Text
                style={{
                  color: index % 2 == 0 ? '#005F94' : '#FF820F',
                  fontFamily: 'Roboto-Bold',
                  fontSize: 14,
                  marginTop: 13,
                }}>
                {item.label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
      numColumns={2}></FlatList>
  );
};

export default ItemHomeComponent;
