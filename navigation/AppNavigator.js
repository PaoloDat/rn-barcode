import React from 'react';
import {createAppContainer, createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';
import { Platform } from 'react-native';

import DashBoardScreen from "../screen/DashBoardScreen";
import AssignScreen from "../screen/AssignScreen";
import MultiAssign from "../screen/MultiAssignScreen";
import UnassignScreen from "../screen/UnassignScreen";
import ProductScreen from "../screen/ProductsScreen";
import LabelScreen from "../screen/LabelsScreen";


const TabNavigator = createMaterialTopTabNavigator({
        DashBoard: {screen: DashBoardScreen},
        Assign: {screen: AssignScreen},
        MultiAssign: {screen: MultiAssign},
        Unassign: {screen: UnassignScreen},
        Product: {screen: ProductScreen},
        Label: {screen: LabelScreen}
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 7,
            }
        }
    }
);

export default createAppContainer(TabNavigator);