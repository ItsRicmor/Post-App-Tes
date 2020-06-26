import React, { useState } from 'react';
import { Container, Content, Item, Icon, Form, Button, Text } from 'native-base';
import { StyleSheet, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from 'utils/components/Header';
import RouteEnum from 'constants/RouteEnum';
import { createPosts } from 'providers/PostsProvider';


const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = '- Este campo titulo es obligatorio'
    }
    if (!values.body) {
        errors.body = '- Este campo contenido es obligatorio'
    }

    return errors
}

const NewPostScreen = () => {
    const navigation = useNavigation();
    const [post, setPost] = useState({ title: '', body: '' });
    const [errors, setErrors] = useState({})

    const onSubmit = async () => {
        const result = validate({ ...post });
        if (!Object.keys(result).length) {
            try {
                console.log(post)
                const response = await createPosts({ ...post, userId: 1 });
                console.log('RESPONSE', response);
                // Validate response ...
                Alert.alert('Exito', 'Se ha creado un post con exito, pero lamentablemente el api de pruebas no lo añade realmente ;c')
                setPost({ title: '', body: '' });
                setErrors({})
                navigation.navigate(RouteEnum.Todos)
            } catch ({ message }) {
                // Do something
            }
        } else {
            setErrors(result);
        }
    }

    const handleChangePost = name => value => {
        setPost({
            ...post,
            [name]: value,
        });
    };

    const { title, body } = post;
    return (
        <Container>
            <Header title="Create a Post" />
            <Content style={styles.container}>
                <Form style={styles.form}>
                    <Item style={styles.item} error={errors.title ? true : false}>
                        <TextInput placeholder="Titulo" value={title} onChangeText={handleChangePost('title')} />
                        {
                            errors.title && <Icon name='close-circle' />
                        }
                    </Item>
                    <Item style={styles.item} error={errors.body ? true : false}>
                        <TextInput placeholder="Contenido" value={body} onChangeText={handleChangePost('body')} />
                        {
                            errors.body && <Icon name='close-circle' />
                        }
                    </Item>
                </Form>
                <Button onPress={onSubmit} block>
                    <Text>Crear</Text>
                </Button>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 30
    },
    form: {
        marginBottom: 50
    },
    item: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    textInput: {
        height: 50,
        borderColor: '#afa19c',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 10,
        fontSize: 20,
    }
});

export default NewPostScreen;
