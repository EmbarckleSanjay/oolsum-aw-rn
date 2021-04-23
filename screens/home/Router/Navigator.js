import {createStackNavigator}from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import DateRange from '../dateRange';
import HomeScreen from '../index';

const screens ={
    
    login:{
        screen:DateRange,
    },

    
    home:{
        screen:HomeScreen
    }
    
    
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
