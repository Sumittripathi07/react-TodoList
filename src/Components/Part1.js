


import React,{useState} from 'react'
import Part2 from './Part2'




export default function Part1() {

    const handelSubmit=(event)=>{
        event.preventDefault()
    }

    
    const handelChange = (event) => {
        settext(event.target.value)
    }
     
    const [text, settext] = useState("")
    const [text2, settext2] = useState("")

    const handelClick=()=>{
        if (text.length>=1) {
            settext2(text)
            settext("")
        }
    }
    return (
        <div>
            <h6 className="mb-3">Todo List</h6>

            <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handelSubmit}>
                <div className="form-outline flex-fill">
                    <input type="text" id="form1" className="form-control form-control-lg" value={text} onChange={handelChange} />
                    <label className="form-label" htmlFor="form1">What do you need to do today?</label>
                </div>
                <button type="submit" className="btn btn-primary btn-lg ms-2 my-33" onClick={handelClick} >Add</button>
            </form>

            
           <Part2 text={text2} />
        </div>
    )
}








