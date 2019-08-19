import React from 'react';
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';

import {constants} from '../util/constans'

import DashBoardScreen from "../screen/DashBoardScreen";
import AssignScreen from "../screen/AssignScreen";
import MultiAssign from "../screen/MultiAssignScreen";
import UnassignScreen from "../screen/UnassignScreen";
import ProductScreen from "../screen/ProductsScreen";
import LabelScreen from "../screen/LabelsScreen";


const TabNavigator = createMaterialTopTabNavigator({
        DashBoard: {screen: DashBoardScreen},
        Assign: {screen: AssignScreen.bind(this, 'Assign-1792')},
        MultiAssign: {screen: MultiAssign},
        Unassign: {screen: UnassignScreen},
        Product: {screen: ProductScreen},
        Label: {screen: LabelScreen}
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: constants.navigationTabFontSize,
            }
        }
    }
);

export default createAppContainer(TabNavigator);