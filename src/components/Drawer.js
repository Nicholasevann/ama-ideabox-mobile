import React from 'react';
import {Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import TabNavigation from './Tabs';
import MyIdea from '../modules/myidea/screen/MyIdea.route';
import TalentBooster from '../modules/talentBooster/screen/TalentBooster.screen';
import TalentApproval from '../modules/talentapproval/screen/TalentApproval.screen';
import IdeaManagement from '../modules/administrator/screen/IdeaManagement.screen';
import {Admin, HomeDrawer, IconFaq, Idea, Talent} from '../assets/icon';
import RoleManagement from '../modules/administrator/screen/RoleManagement.screen';
import RoutesUserManagement from '../config/Routes/RoutesUserManagement';
import RoutesCategoryManagement from '../config/Routes/RoutesCategoryManagement';
import Faq from '../modules/faq/screen/Faq.screen';
import Latihan from '../modules/latihan/screen/Latihan.screen';
import Dashboard from '../modules/dashboard/screen/Dashboard.screen';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          drawerLabel: 'Home',
          headerShown: false,
          drawerIcon: () => <HomeDrawer />,
          activeTintColor: '#085D7A',
        }}
      />
      <Drawer.Screen
        name="TalentBooster"
        component={TalentBooster}
        options={{
          drawerLabel: 'Talent Booster',
          headerShown: false,
          drawerIcon: () => <Talent />,
          activeTintColor: '#085D7A',
        }}
      />
      <Drawer.Screen
        name="SubmittedIdea"
        component={MyIdea}
        options={{
          drawerLabel: 'List Idea',
          headerShown: false,
          drawerLabelStyle: {marginLeft: 60, fontSize: 14},
          groupName: 'My Idea',
          activeTintColor: '#085D7A',
        }}
      />
      <Drawer.Screen
        name="TalentApproval"
        component={TalentApproval}
        options={{
          drawerLabel: 'Talent Approval',
          headerShown: false,
          drawerLabelStyle: {marginLeft: 20, fontSize: 14},
          groupName: 'My Idea',
          activeTintColor: '#085D7A',
        }}
      />
      <Drawer.Screen
        name="UserManagement"
        component={RoutesUserManagement}
        options={{
          drawerLabel: 'User Management',
          headerShown: false,
          drawerLabelStyle: {marginLeft: 60, fontSize: 14},
          activeTintColor: '#085D7A',
          groupName: 'Administrator',
        }}
      />
      <Drawer.Screen
        name="CategoryManagement"
        component={RoutesCategoryManagement}
        options={{
          drawerLabel: 'Category Management',
          headerShown: false,
          drawerLabelStyle: {marginLeft: 60, fontSize: 14},
          activeTintColor: '#085D7A',
          groupName: 'Administrator',
        }}
      />
      <Drawer.Screen
        name="IdeaManagement"
        component={IdeaManagement}
        options={{
          drawerLabel: 'Idea Management',
          headerShown: false,
          drawerLabelStyle: {marginLeft: 60, fontSize: 14},
          activeTintColor: '#085D7A',
          groupName: 'Administrator',
        }}
      />
      <Drawer.Screen
        name="RoleManagement"
        component={RoleManagement}
        options={{
          drawerLabel: 'Role Management',
          headerShown: false,
          drawerLabelStyle: {marginLeft: 60, fontSize: 14},
          activeTintColor: '#085D7A',
          groupName: 'Administrator',
        }}
      />

      <Drawer.Screen
        name="Faq"
        component={Faq}
        options={{
          drawerLabel: 'FAQ',
          headerShown: false,
          drawerIcon: () => <IconFaq />,
          activeTintColor: '#085D7A',
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerLabel: 'Dashboard',
          headerShown: false,
          drawerIcon: () => <Talent />,
          activeTintColor: '#085D7A',
        }}
      />
      <Drawer.Screen
        name="Latihan"
        component={Latihan}
        options={{
          drawerLabel: 'Latihan',
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
