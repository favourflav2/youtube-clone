import { createSlice } from "@reduxjs/toolkit"


type ApplicationSlice = {
    theme: 'dark' | 'light'
}

const initialState: ApplicationSlice = {
    theme:'dark'
}

const applicationSlice = createSlice({
    name:"applicationSlice",
    initialState,
    reducers:{

    }
})

export default applicationSlice.reducer
export const {} = applicationSlice.actions