import React, { useState, useCallback } from 'react';
import { Container, Content } from 'native-base';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Header from 'utils/components/Header';
import { getPosts } from 'providers/PostsProvider';
import CardPost from 'screens/components/CardPost';


const PostsScreen = () => {
    const [posts, setPosts] = useState([]);
    useFocusEffect(
        useCallback(() => {
            const asyncFetch = async () => {
                const postsResponse = await getPosts();
                setPosts(postsResponse);
                
            }
            asyncFetch();
        }, [])
    );
    return (
        <Container>
            <Header title="Posts" />
            <ScrollView>
                <Content>
                    {
                        posts.map(post => <CardPost key={post.id} post={post} />)
                    }
                </Content>
            </ScrollView>
        </Container>
    )
}

export default PostsScreen;