import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import ResentExpenses from './screens/ResentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';

import { Ionicons } from '@expo/vector-icons'
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


function ExpensesOverView() {
  return <BottomTab.Navigator screenOptions={({ navigation }) => ({
    headerStyle: {
      backgroundColor: GlobalStyles.colors.primary500,
    },
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    headerRight: ({ tintColor }) =>
      <IconButton icon={'add'} size={24} color={tintColor}
        onPress={() => { navigation.navigate('ManageExpenses') }} />
  })}>
    <BottomTab.Screen name='RecentExpenses' component={ResentExpenses} options={{
      title: 'Recent Expenses',
      tabBarLabel: 'Recent',
      tabBarIcon: ({ color, size }) => <Ionicons name='hourglass' size={size} color={color} />
    }} />
    <BottomTab.Screen name='AllExpenses' component={AllExpenses} options={{
      title: 'All Expenses',
      tabBarLabel: 'All Expenses',
      tabBarIcon: ({ color, size }) => <Ionicons name='calendar' size={size} color={color} />
    }} />

  </BottomTab.Navigator>
}



export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={
            {
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white'
            }
          }>
            <Stack.Screen name='ExpensesOverView' component={ExpensesOverView} options={{
              headerShown: false
            }} />
            <Stack.Screen name='ManageExpenses' component={ManageExpense} options={{
              presentation: 'modal',
            }} />
          </Stack.Navigator>

        </NavigationContainer>
      </ExpensesContextProvider>
    </>

  );
}

