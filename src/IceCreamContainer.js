import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyIceCream} from './Redux'
function CakeContainer() {
    const numOfIceCream=useSelector(state=>state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return(
        <div>
        <h2>Num of IceCream - {numOfIceCream}</h2>
        <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
         )
}
export default CakeContainer;










