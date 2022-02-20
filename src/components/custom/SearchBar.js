import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {useDispatch} from 'react-redux';

const ICON_MARGIN = 24;

const SearchBar = () => {
  const dispatch = useDispatch();
  const onSearchHandler = e => {
    console.log("here");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onSumbitEditing={e => onSearchHandler(e)}
        placeholder="What are you looking for ?"
      />
      <Icon style={styles.icon} name="search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 54,
    borderRadius: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'Fabrica',
    color: '#777',
    paddingStart: ICON_MARGIN * 2 + 4,
  },
  icon: {
    fontSize: 16,
    position: 'absolute',
    marginHorizontal: ICON_MARGIN,
  },
});

export default SearchBar;
