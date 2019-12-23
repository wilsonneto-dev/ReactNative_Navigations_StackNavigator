import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const mainNavigation = createSwitchNavigator({
  Login,
  Dashboard,
});

export default createAppContainer(mainNavigation);
