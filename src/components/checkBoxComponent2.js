import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CheckBoxComponent2 = ({label, onPress, isChecked, color}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: isChecked ? '#005F94' : '#79AECA',
            marginRight: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {isChecked && (
            <Text style={{fontSize: 10, fontWeight: 900, color: '#005F94'}}>
              ✔
            </Text>
          )}
        </View>
      </TouchableOpacity>
      <Text
        style={{
          color: color,
        }}>
        {label}
      </Text>
    </View>
  );
};
// const CheckboxGroup = () => {
//     const [selectedOption, setSelectedOption] = useState('');

//     const handleCheckboxChange = (label) => {
//       setSelectedOption(label);
//     };

//     return (
//       <View>
//         <CheckboxComponent
//           label={'Chủ tàu'}
//           onPress={() => handleCheckboxChange('Chủ tàu')}
//           isChecked={selectedOption === 'Chủ tàu'}
//         />
//         <CheckboxComponent
//           label={'Cán bộ'}
//           onPress={() => handleCheckboxChange('Cán bộ')}
//           isChecked={selectedOption === 'Cán bộ'}
//         />
//       </View>
//     )
// }
export default CheckBoxComponent2;
