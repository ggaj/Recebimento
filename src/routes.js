import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NFCam from './pages/NFCam';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
// import Teste from './pages/Teste';

const navigation = createStackNavigator({
  // Teste,
  NFCam: {
    screen: NFCam,
    navigationOptions: {
      headerShown: false,
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerBackTitleVisible: false,
      headerTintColor: '#666',
      headerStyle: {
        backgroundColor: '#eee',
      },
      title: 'Recebimento',
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerBackTitleVisible: false,
      headerTintColor: '#666',
      headerStyle: {
        backgroundColor: '#eee',
      },
      title: 'Recebimento',
    },
  },
});

// export default createAppContainer(mainNavigation, navigation);
export default createAppContainer(navigation);
