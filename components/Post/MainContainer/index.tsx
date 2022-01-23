import React from "react";
import { Image } from "react-native";
import { View, Text } from "../../Themed";
import { Entypo, Ionicons } from '@expo/vector-icons';
import { PostType } from "../../../types";
import styles from "./styles"
import Actions from "./Actions";
import moment from "moment";

export type MainContainerProps = {
    post: PostType
}

const MainContainer = ({ post }: MainContainerProps) => (
    <View style={styles.container}>
        <View style={styles.postHeader}>
            <View style={styles.postNames}>
                <Text style={styles.name}>{post.user.name}</Text>
                <Text style={styles.username}>@{post.user.username}</Text>
                <Entypo style={styles.dot} name="dot-single" size={10} />
                <Text style={styles.createdAt}>{moment(post.createdAt).fromNow()}</Text>
            </View>
            <Ionicons name="chevron-down" color="grey" size={15} />
        </View>
        <View>
            <Text style={styles.content}>{post.content}</Text>
            {!!post.image && <Image style={styles.image} source={{ uri: post.image }} />}
        </View>
        <View>
            <Actions post={post}></Actions>
        </View>
    </View>
);

export default MainContainer;