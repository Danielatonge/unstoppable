import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { FlatList } from 'react-native';
import { listPosts } from "../../src/graphql/queries";
import Post from "../Post";


const Feed = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchPosts = async () => {
        setLoading(true)
        try {
            const postsData = await API.graphql(graphqlOperation(listPosts))
            setPosts(postsData.data.listPosts.items);
        } catch (error) {
            console.log(error)      
        } finally {
            setLoading(false)
        }

    };
    useEffect(() => {
        fetchPosts();
      }, [])

    return (
        <FlatList
            data={posts}
            renderItem={({ item }) => <Post post={item} />}
            keyExtractor={(item) => item.id}
            refreshing={loading}
            onRefresh={fetchPosts}
        />
    );
}


export default Feed;