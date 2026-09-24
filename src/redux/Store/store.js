import { configureStore } from '@reduxjs/toolkit';
import RegistrationReducer from '../Slices/registerFormSlice.js'
import BreadCrumbReducer from '../Slices/breadCrumbsSlice.js'


const store = configureStore({
    reducer: {
        RegistrationForm: RegistrationReducer, // add more slices here as needed
        BreadCrumbs:BreadCrumbReducer
    },
});


export default store;