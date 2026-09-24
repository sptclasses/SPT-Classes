import { createSlice } from '@reduxjs/toolkit';

const registrationFormSlice = createSlice({
    name: 'RegistrationForm',
    initialState:{
        details:{
            studentFullName:"",
            studentPhoneNumber:"",
            studentAge:"",
            studentEmailId:"",
            studentDomain:"",
            needGuidance:false
        },
        showRegisterForm:false
    },
    reducers: {
        /// action.payload will be an object
        setDetails:(state,action)=>{
            state.details.studentFullName=action.payload.studentFullName;
            state.details.studentPhoneNumber=action.payload.studentPhoneNumber;
            state.details.studentAge=action.payload.studentAge;
            state.details.studentEmailId=action.payload.studentEmailId;
            state.details.studentDomain=action.payload.studentDomain;
            state.details.needGuidance=action.payload.needGuidance;

        },
        setShowRegisterFrom:(state)=>{
            state.showRegisterForm=!state?.showRegisterForm
        }
    },
});


export const { setDetails,setShowRegisterFrom } = registrationFormSlice.actions;
export default registrationFormSlice.reducer;