import React from 'react'

export default function Part2(props) {
    return (
        
      <div>
      <ul className="list-group mb-0">
        <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
          <div className="d-flex align-items-center">
            <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
            {props.text}
          </div>

        </li>
      </ul>
  </div>
    )
}
