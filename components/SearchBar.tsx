import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {icons} from "@/constants/icons";
import search from "@/app/(tabs)/search";
interface SearchBarProps {
    placeholder: string;
    onPress: () => void;
}
const SearchBar:React.FC<SearchBarProps> = ({placeholder , onPress}) => {
  return (
    <View className="flex-row bg-dark-200 rounded-full px-5 py-4">
        <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />
        <TextInput
            onPress={onPress}
            placeholder={placeholder}
            value=""
            onChangeText={() => {}}
            placeholderTextColor="white"
            className="px-5 flex-1 ml-2 text-white"
        />
    </View>
  );
};

export default SearchBar;
