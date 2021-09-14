import React,{useState} from 'react'
import Part2 from './Part2'
// import { Button } from '@material-ui/core'

export default function Part1() {
    const [text, settext] = useState("")
    const [main, setmain] = useState([])

    const handelSubmit=(event)=>{
        event.preventDefault()
    }

    
    const handelChange = (event) => {
        settext(event.target.value)
    }
     

    const handelClick=()=>{
        settext(' ')
        if (text.length>1) {
            setmain((oldItems)=>{
                return[...oldItems,text]
            
            })
        }
    }

    const deleteItems=(id)=>{
        setmain((oldItems)=>{
            return oldItems.filter((arrItems,index)=>{
                return index!==id ;
            })
        })
      }

    return (
        <div>
            <h6 className="mb-3">Todo List</h6>

            <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handelSubmit}>
                <div className="form-outline flex-fill">
                    <input placeholder="Enter your Item" type="text" id="form1" className="form-control form-control-lg" value={text} onChange={handelChange} />
                    <label className="form-label" htmlFor="form1">What do you need to do today?</label>
                </div>
                {/* <Button className="mb-4 mx-2" color="secondary" variant="contained" onClick={handelClick}>Add</Button> */}
                <button style={{fontSize: "16px",backgroundColor:"#992020",border:"2px solid black",marginTop: "-31px"}} type="submit" className="btn btn-primary btn-lg ms-2 my-33" onClick={handelClick} >Add</button>
            </form>

        {main.map((total,index)=>{
            return <Part2 text={total} id={index} key={index} onDelete={deleteItems} />
        })}
            
           
           
        </div>
    )
}








