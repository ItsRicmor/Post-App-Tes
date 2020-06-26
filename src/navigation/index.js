import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RouteEnum from 'constants/RouteEnum';
import TodosScreen from 'screens/posts/PostsScreen';
import NewTodoScreen from 'screens/posts/NewPostScreen';
import { AntDesign } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Navigator initialRouteName={RouteEnum.Todos}>
            <Screen name={RouteEnum.Todos} component={TodosScreen} options={{ 
                title: 'Posts', 
                tabBarIcon: () => <AntDesign name="home" size={24} color="black" /> }} 
            />
            <Screen name={RouteEnum.NewTodo} component={NewTodoScreen} options={{ 
                title: 'Create',
                tabBarIcon: () => <AntDesign name="edit" size={24} color="black" />}}     
            />
        </Navigator>
    )
}

export default AppNavigator;