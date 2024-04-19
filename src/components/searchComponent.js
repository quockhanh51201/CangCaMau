import {Image, Text, TextInput, View} from 'react-native';
import {ICONS} from '../assets/icons/icons';

const SearchComponent = ({placeholder}) => {
  return (
    <View
      style={{
        borderRadius: 6,
        alignItems: 'center',
        opacity: 0.2,
        backgroundColor: '#333',
        height: 38,
        width: 343,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 13,
      }}>
      <Image
        source={ICONS.Search}
        resizeMode="stretch"
        style={{tintColor: 'black', height: 30, width: 30}}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#333"
        style={{
          height: 38,
          fontSize: 14,
          fontFamily: 'Roboto-Regular',
        }}
      />
    </View>
  );
};

export default SearchComponent;
