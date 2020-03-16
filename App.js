import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconWithBadge from "./components/IconWithBadge";

function HomeIconWithBadge(props) {
    // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
    return <IconWithBadge {...props} badgeCount={0}/>;
}

function History({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>History screen</Text>
        </View>
    );
}

function AddEntry({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings screen</Text>
        </View>
    );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={History} options={stackOptions.home}/>
        </HomeStack.Navigator>
    );
}

const AddEntryStack = createStackNavigator();

function AddEntryStackScreen() {
    return (
        <AddEntryStack.Navigator>
            <AddEntryStack.Screen name="Settings" component={AddEntry} options={stackOptions.setting}/>
        </AddEntryStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const stackOptions = {
    home: {
        headerTitle: 'History',
        headerRight: () => (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                // color="#fff"
            />
        ),
    },
    setting: {
        headerTitle: 'Add Entry',
        headerRight: () => (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                // color="#fff"
            />
        ),
    }
};

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        if (route.name === 'History') {
                            return (
                                <HomeIconWithBadge
                                    name={
                                        focused
                                            ? 'ios-information-circle'
                                            : 'ios-information-circle-outline'
                                    }
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Add Entry') {
                            return (
                                <Ionicons
                                    name={focused ? 'ios-list-box' : 'ios-list'}
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="History" component={HomeStackScreen}/>
                <Tab.Screen name="Add Entry" component={AddEntryStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
