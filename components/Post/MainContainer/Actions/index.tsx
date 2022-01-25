import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import { PostType } from "../../../../types";
import styles from "./styles"
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createLike, deleteLike } from "../../../../src/graphql/mutations";

export type ActionsProps = {
    post: PostType
}

const Actions = ({ post }: ActionsProps) => {

    const [currentUser, setUser] = useState(null)
    const [myLike, setMyLike] = useState(null)
    const [likesCount, setLikesCount] = useState(post.likes.items.length)

    
    useEffect( () => {
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser()
            setUser(userInfo)
            const userId = currentUser.attributes.sub;
            const isLiked = post.likes.items.find((like) => userId === like.userLikesId);
            setMyLike(isLiked)
          
            console.log(isLiked)
        }
        fetchUser();
    }, [])

    const onLike = async () => {
        console.log("Post liked")
        // console.log("Post:", post)
        // console.log("User:", user.attributes.sub)
        try {
            if(myLike) {
                const likeData = await API.graphql(graphqlOperation(deleteLike, {input: {id: myLike.id}}))
                setMyLike(null)
                setLikesCount(likesCount - 1)
                console.log('DELETE: ',likeData)
            } else {
                const likeData = await API.graphql(graphqlOperation(createLike, 
                    {input: {userLikesId: currentUser.attributes.sub, postLikesId: post.id}}))
                setMyLike(likeData.data.createLike)
                setLikesCount(likesCount + 1)
                console.log('CREATE: ', likeData)
            }
            
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.actions}>
            <View>
                <TouchableOpacity onPress={onLike} style={styles.action} >
                    <AntDesign name={!myLike ?"hearto":"heart"} size={24} color={!myLike ? "grey" : "red"} />
                    <Text style={[styles.number]}>{likesCount}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.action}>
                <EvilIcons name="comment" size={30} color="grey" />
                <Text style={styles.number}> {post.commentCount}</Text>
            </View>
            <View style={styles.action}>
                <Ionicons name="bookmark-outline" size={24} color="grey" />
            </View>
        </View>
    );
}
export default Actions;