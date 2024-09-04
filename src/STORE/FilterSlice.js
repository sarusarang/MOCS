import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    Search: "",
    Filter: "",
    New:false

}


const FilterSlice = createSlice({



    name: "Filter",
    initialState: initialState,


    reducers: {


        SetFilterData: (state, action) => {

            state.Filter = action.payload 

        },

        SetSearchData: (State, action) => {

            State.Search = action.payload


        },
        NewArrive: (State, action) => {

            State.New= action.payload


        }

    }

})




export const { SetFilterData,SetSearchData,NewArrive } = FilterSlice.actions
export default FilterSlice.reducer