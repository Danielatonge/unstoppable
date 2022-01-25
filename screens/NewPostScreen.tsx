import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfilePicture from '../components/ProfilePicture';
import {API, Auth, graphqlOperation, Storage} from 'aws-amplify';
import * as ImagePicker from 'expo-image-picker';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

import { Text } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {createPost} from '../src/graphql/mutations'
import {getUser} from '../src/graphql/queries'

export default function NewPostScreen() {
    const colorScheme = useColorScheme();

    const [post, setPost] = useState("");
    const navigation = useNavigation();
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {

        const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true})
        if(!userInfo) return;

        try {
            const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
            if (userData) {
            setUser(userData.data.getUser);
            }
        }catch (error) {
            console.log(error)
        }

        }
        fetchUser();
    }, [])

    const [image, setImage] = useState(null);
    const [percentage, setPercentage] = useState(0);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            handleImagePicked(result)
        }
    };

    const handleImagePicked = async (pickerResult) => {
        setPercentage(0);
        const img = await fetchImageFromUri(pickerResult.uri);
        const imageName = uuidv4();
        console.log(imageName);
        const uploadUrl = await uploadImage(imageName, img);
        downloadImage(uploadUrl);
    }

    const fetchImageFromUri = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        return blob;
      };

    const onSendPost = async () => {

        const newPost = {
            content: post,
            image: image,
            userPostsId: user.id
        }
        console.log("New Post", newPost);
        try {
            await API.graphql(graphqlOperation(createPost, {input: newPost}))
            navigation.goBack();
        } catch (e) {
            console.log(e)
        }
    }

    const downloadImage = (uri) => {
        Storage.get(uri)
          .then((result) => setImage(result))
          .catch((err) => console.log(err));
      };

    const uploadImage = async (filename, img) => {
        Auth.currentCredentials();
        return Storage.put(filename, img, { 
            level: "public",
            contentType: "image/jpeg",
            progressCallback(progress) {
                setLoading(progress);
            },
        })
        .then((response) => {
            return response.key;
        })
        .catch((error) => {
            console.log(error)
            return error.response
        })
        
    }

    const setLoading = (progress) => {
        const calculated = parseInt((progress.loaded / progress.total) * 100);
        updatePercentage(calculated); // due to s3 put function scoped
      };
    
    const updatePercentage = (number) => {
        setPercentage(number);
    };



    const cancelPost = () => {
        navigation.goBack();
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
                <ProfilePicture image={user? user.image: ''} />
                <View style={styles.inputContainer}>
                    <TextInput
                        value={post}
                        onChangeText={(value) => setPost(value)}
                        multiline={true}
                        numberOfLines={4}
                        style={[styles.postText, { color: Colors[colorScheme].text }]}
                        placeholder={"What's happening?"}


                    />
                    <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
                        <Text style={styles.postButtonText}>Upload Image</Text>
                    </TouchableOpacity>
                    {percentage !== 0 && <Text style={styles.percentage}>{percentage}%</Text>}
                    {image && <Image source={{ uri: image }} style={styles.image} />}

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
    uploadButton: {
        backgroundColor: Colors.light.tint,
        width: 150,
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
    image: {
        height: 160,
        width: '100%',
        borderRadius: 15,
        resizeMode: 'cover',
        overflow: 'hidden',
        marginVertical: 6
    },
    percentage: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'grey'
    }
});
