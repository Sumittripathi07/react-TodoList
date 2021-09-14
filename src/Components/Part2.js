import React,{} from 'react'
import "../App.css"
// import Filled  from '@material-ui/icons/Delete';

export default function Part2(props) {
  // const [strike, setstrike] = useState("")
  // const checkBox=()=>{
  //   if (strike !== "line-through") {
  //     setstrike("line-through")
  //     }
  //     else{
  //       setstrike("")
  //     }
  // }

  

    return (
        
      <div>
      <ul className="list-group mb-0">
        <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
          <div className="delTop d-flex align-items-center" >
            {/* <input onClick={checkBox} className="form-check-input me-2" type="checkbox" value="" aria-label="..." /> */}
          <b>  {props.text}</b>
            {/* <Filled/> */}
            <button type="button" className="delButton btn btn-danger" onClick={()=>{
              props.onDelete(props.id)
            }}>Delete</button>
          </div>

        </li>
      </ul>
  </div>
    )
}
