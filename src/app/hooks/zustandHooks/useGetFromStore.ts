import React from 'react'

// This hook is important because ... when a page refreshes ... the page is getting its intial state from our store ... which is 0
//* We dont want that to happen ... we want the page to get the data from the local storage

// This hook is getting the data from local storage and setting that data as our new state


const useGetFromStore = (store:any,callback:any) => {
    const grabWhatWeWantFromStore = store(callback)
    const [state, setState] = React.useState()

    React.useEffect(()=>{
        setState(grabWhatWeWantFromStore)
    },[grabWhatWeWantFromStore])
 
    return state
}

export default useGetFromStore