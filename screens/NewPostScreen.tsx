import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfilePicture from '../components/ProfilePicture';


import { Text } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export default function NewPostScreen() {
    const colorScheme = useColorScheme();

    const [post, setPost] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const navigation = useNavigation();

    const onSendPost = () => {
        console.log("Post", post);
        console.log("Image", imageUrl);
    }


    const cancelPost = () => {
        navigation.navigate('Root');
    }
    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.postButtonRow}>
                <TouchableOpacity activeOpacity={0.8} onPress={cancelPost} >
                    <AntDesign name="close" color={Colors.light.tint} size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onSendPost} style={styles.postButton}>
                    <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.postContainer}>
                <ProfilePicture image={'https://picsum.photos/30/30'} />
                <View style={styles.inputContainer}>
                    <TextInput
                        value={post}
                        onChangeText={(value) => setPost(value)}
                        multiline={true}
                        numberOfLines={4}
                        style={[styles.postText, { color: Colors[colorScheme].text }]}
                        placeholder={"What's happening?"}


                    />
                    <TextInput
                        value={imageUrl}
                        onChangeText={(value) => setImageUrl(value)}
                        style={[styles.postImage, { color: Colors[colorScheme].text }]}
                        placeholder={"Image url (optional)"}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    postButton: {
        backgroundColor: Colors.light.tint,
        width: 80,
        borderRadius: 20
    },
    postButtonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    postButtonText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 16
    },
    postContainer: {
        flexDirection: 'row',
        marginHorizontal: 2,
        marginTop: 30
    },
    inputContainer: {
        marginHorizontal: 20,
        width: "81%"
    },
    postText: {
        height: 100,
        fontSize: 20
    },
    postImage: {
        fontSize: 16
    }
});
