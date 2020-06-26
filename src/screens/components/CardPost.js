import React, { useCallback } from 'react';
import { Content, Card, CardItem, Text, Body, Button, Alert } from 'native-base';
import { deletePostById } from 'providers/PostsProvider'

const CardPost = props => {
    const { post: { title, body, id } } = props;
    const deletePost = async () => {
        await deletePostById(id);
    };
    return (
        <Content>
            <Card>
                <CardItem header>
                    <Text styles={{}} >Titulo: {title}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            {body}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Body>
                        <Button onPress={deletePost} block danger>
                            <Text>Eliminar</Text>
                        </Button>
                    </Body>
                </CardItem>
            </Card>
        </Content>
    )
}

export default CardPost;