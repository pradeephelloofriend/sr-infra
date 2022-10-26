import { serviceActionTypes } from './serviceActionTypes'

const INITIAL_STATE = {

    servicesData: [],
    serviceAreaData:[],
    schemeAreaData:[],
    worksCatData:null


}
const serviceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case serviceActionTypes.SET_SERVICES_DATA:
            return {
                ...state,
                servicesData: action.payload
            };
        case serviceActionTypes.SET_SERVICE_AREA_DATA:
            return {
                ...state,
                serviceAreaData: action.payload
            };
        case serviceActionTypes.SET_SCHEME_AREA_DATA:
            return {
                ...state,
                schemeAreaData: action.payload
            };
            case serviceActionTypes.SET_WORKS_CAT_DATA:
            return {
                ...state,
                worksCatData: action.payload
            };
        default:
            return state
    }
}
export default serviceReducer;

{/*gfghhfhf*/}