import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import IconWithBadge from "./components/IconWithBadge";
import reducer from './reducers';
import History from './components/History';
import AddEntry from './components/AddEntry';
import EntryDetails from "./components/EntryDetails";
import Live from "./components/Live";
import { purple, white } from './utils/colors';

function HomeIconWithBadge(props) {
    return <IconWithBadge {...props} badgeCount={0}/>;
}

const HomeStack = createStackNavigator();

function HomeStackScreen(props) {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={History} options={stackOptions.home}/>
            <HomeStack.Screen
                name="Entry Details"
                component={EntryDetails}
                options={({ route }) => ({ title: route.params.name })}
            />
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

const LiveStack = createStackNavigator();

function LiveStackScreen() {
    return (
        <LiveStack.Navigator>
            <LiveStack.Screen name="Settings" component={Live} options={stackOptions.live}/>
        </LiveStack.Navigator>
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
    },
    live: {
        headerTitle: 'Live',
    }
};

export default function App() {
    return (
        <Provider store={createStore(reducer)}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size = 30}) => {
                            if (route.name === 'History') {
                                return (
                                    <HomeIconWithBadge
                                        name={
                                            focused
                                                ? 'view-dashboard'
                                                : 'view-dashboard-outline'
                                        }
                                        size={30}
                                        color={color}
                                    />
                                );
                            } else if (route.name === 'Add Entry') {
                                return (
                                    <FontAwesome
                                        name={focused ? 'plus-square' : 'plus-square-o'}
                                        size={30}
                                        color={color}
                                    />
                                );
                            } else if (route.name === 'Live') {
                                return (
                                    <Ionicons
                                        name={focused ? 'ios-speedometer' : 'md-speedometer'}
                                        size={30}
                                        color={color}
                                    />
                                );
                            }
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: Platform.OS === 'ios' ? purple : white,
                        inactiveTintColor: 'gray',
                        style: {
                            // height: 56,
                            backgroundColor: Platform.OS === 'ios' ? white : purple,
                            shadowColor: 'rgba(0, 0, 0, 0.24)',
                            shadowOffset: {
                                width: 0,
                                height: 3
                            },
                            shadowRadius: 6,
                            shadowOpacity: 1
                        },
                    }}
                >
                    <Tab.Screen name="History" component={HomeStackScreen}/>
                    <Tab.Screen name="Add Entry" component={AddEntryStackScreen}/>
                    <Tab.Screen name="Live" component={LiveStackScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
