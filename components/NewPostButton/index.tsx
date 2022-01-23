import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const NewPostButton = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('NewPost');
    }
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.buttonView}>
            <Feather name="plus" size={35} color="white" />
        </TouchableOpacity>
    )

}



export default NewPostButton;