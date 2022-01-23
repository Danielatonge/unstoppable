import React from "react";
import { FlatList } from 'react-native';
import posts from "../../data/posts"
import Post from "../Post";

export type FeedProps = {
    image?: string,
    size?: number,

}

const Feed = ({ image, size = 50 }: FeedProps) => (
    <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id}
    />
)

export default Feed;