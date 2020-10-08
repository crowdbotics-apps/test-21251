import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile133071Navigator from '../features/UserProfile133071/navigator';
import Tutorial133070Navigator from '../features/Tutorial133070/navigator';
import NotificationList133042Navigator from '../features/NotificationList133042/navigator';
import Settings133041Navigator from '../features/Settings133041/navigator';
import Settings133033Navigator from '../features/Settings133033/navigator';
import UserProfile133031Navigator from '../features/UserProfile133031/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile133071: { screen: UserProfile133071Navigator },
Tutorial133070: { screen: Tutorial133070Navigator },
NotificationList133042: { screen: NotificationList133042Navigator },
Settings133041: { screen: Settings133041Navigator },
Settings133033: { screen: Settings133033Navigator },
UserProfile133031: { screen: UserProfile133031Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
