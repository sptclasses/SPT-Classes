import { createSlice } from '@reduxjs/toolkit';

const breadCrumbsSlice = createSlice({
    name: 'BreadCrumbs',
    initialState:{
        commonPath:"http://localhost:3000",
        path:[
            {
                key:"Landing Page",
                value:"http://localhost:3000"
            },
        ]
    },
    reducers: {
        /// action.payload will be an object
        addPath:(state,action)=>{
            // action.payload is an object
            state?.path.push(action.payload);
            
        },
        removePath:(state,action)=>{
            // action.payload will be the index which is been clicked by the user
            console.log(action.payload)
            const totalLength=state?.path?.length;
            for(let i=totalLength-1;i>action.payload;i--) state?.path?.pop();
            
        }
    },
});


export const { addPath,removePath } = breadCrumbsSlice.actions;
export default breadCrumbsSlice.reducer;