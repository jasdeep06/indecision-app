

const defaultFiltersReducerState={text:"",sortBy:"date",startDate:undefined,endDate:undefined}

export default  (state=defaultFiltersReducerState,action) => {
    switch(action.type){
        case("EDIT_TEXT"):
        
            return {...state , text:action.newText}
        case("SORT_BY_DATE"):
        
            return {...state , sortBy:"date"}
        case("SORT_BY_AMOUNT"):
        
            return {...state , sortBy:"amount"}
        case("SET_START_DATE"):
            return {...state,startDate:action.startDate}
        
        case("SET_END_DATE"):
            return {...state,endDate:action.endDate}

        default:
        return state;
    }
} 
