// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './components/LoginPage';
import CreateAccount from './components/CreateAccountScreen';
import AccountCreated from './components/AccountCreated';
import HomeScreen from './components/HomeScreen';
import MyAccountScreen from './components/MyAccountScreen';
import SiteNavigationScreen from './components/SiteNavigationScreen';
import RecipesScreen from './components/RecipesScreen';
import FavoritesScreen from './components/FavoritesScreen';
import IngredientsScreen from './components/IngredientsScreen';
import AllergensScreen from './components/AllergensScreen';
import NotesScreen from './components/NotesScreen';
import SaveRecipeScreen from './components/SaveRecipeScreen';
import CreateRecipeScreen from './components/CreateRecipeScreen';
import AccountSettingsScreen from './components/AccountSettingScreen';
import AppSettingsScreen from './components/AppSettingsScreen';
import LogoutScreen from './components/LogoutScreen';
import HelpCenterScreen from './components/HelpCenterScreen';
import LeaveAppFeedbackScreen from './components/LeaveAppFeedbackScreen';
import TermsAndConditionsScreen from './components/TermsAndConditionScreen';
import { FavoritesProvider } from './components/FavoritesContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <FavoritesProvider> {/* Wrap the Tab.Navigator with the Provider */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => null, // Return null to hide icons
            tabBarLabel: () => null, // Return null to hide labels
          })}
        >
          <Tab.Screen name="Home" component={LoginPage} />
          <Tab.Screen name="Create Account" component={CreateAccount} />
          <Tab.Screen name="Account Created" component={AccountCreated} />
          <Tab.Screen name="Home Screen" component={HomeScreen} />
          <Tab.Screen name="My Account" component={MyAccountScreen} />
          <Tab.Screen name="Site Navigation" component={SiteNavigationScreen} />
          <Tab.Screen name="Recipes" component={RecipesScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
          <Tab.Screen name="Ingredients" component={IngredientsScreen} />
          <Tab.Screen name="Allergens" component={AllergensScreen} />
          <Tab.Screen name="Notes" component={NotesScreen} />
          <Tab.Screen name="Save Recipe" component={SaveRecipeScreen} />
          <Tab.Screen name="CreateRecipeScreen" component={CreateRecipeScreen} />
          <Tab.Screen name="Account" component={AccountSettingsScreen} />
          <Tab.Screen name="App" component={AppSettingsScreen} />
          <Tab.Screen name="Logout" component={LogoutScreen} />
          <Tab.Screen name="Help" component={HelpCenterScreen} />
          <Tab.Screen name="Feedback" component={LeaveAppFeedbackScreen} />
          <Tab.Screen name="Terms" component={TermsAndConditionsScreen} />
        </Tab.Navigator>
      </FavoritesProvider>
    </NavigationContainer>
  );
}