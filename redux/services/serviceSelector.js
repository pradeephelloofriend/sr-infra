import { createSelector } from 'reselect'
const selectService = state => state.services

export const selectServiceData= createSelector(
    [selectService],
    data => data.servicesDataserviceAreaData
);
export const selectServiceAreaData= createSelector(
    [selectService],
    data => data.serviceAreaData
);
export const selectWorkCatData= createSelector(
    [selectService],
    data => data.worksCatData
);