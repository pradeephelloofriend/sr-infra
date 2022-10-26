import { footActionTypes } from './footActionTypes'
import Axios from 'axios';
import {API_PATH } from '../../Global';
import {getFootMenuItems} from '../../lib/api'
export const setFootData = data => ({
    type: footActionTypes.SET_FOOT_DATA,
    payload: data

})
export const fetchFootData = () => {
    return async dispatch => {
        const menuItems = await getFootMenuItems() //applo client 
        dispatch(setFootData(menuItems))
    }
}