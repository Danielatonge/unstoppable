import React from "react";
import { View, Text } from "react-native";
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { PostType } from "../../../../types";
import styles from "./styles"

export type ActionsProps = {
    post: PostType
}

const Actions = ({ post }: ActionsProps) => (
    <View style={styles.actions}>
        <View style={styles.action}>
            <EvilIcons name="like" size={30} color="grey" />
            <Text style={styles.number}> {post.likeCount}</Text>
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

export default Actions;