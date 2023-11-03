import React from 'react';
import "../CSS/Dress.css";

export const Shirts = () => {

    const shirtData = ["water purification plants", "water purifier plant", "water treatment plant", "ro plant"] 
  return (
          <div className='col-2'>
              <ul>
                  {
                      shirtData.map((items) => (
                          <li className='list-size-fixing' style={{ listStyle: "none" }}>{items}</li>
                      ))
                  }
              </ul>
    </div>
  )
}

export const Suites = () => {

    const shirtData = ["water filter plant", "water softener", "sewage treatment plant", "industrial ro plant", "reverse osmosis plants"]
    return (
        <div className='col-2'>
            <ul>
                {
                    shirtData.map((items) => (
                        <li style={{ listStyle: "none" }}>{items}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export const WomanWareDress = () => {

    const shirtData = ["ro system", "effluent treatment plant", "wastewater treatment plants", "industrial reverse osmosis plant",  "reverse osmosis systems"]
    return (
        <div className='col-2'>
            <ul>
                {
                    shirtData.map((items) => (
                        <li style={{ listStyle: "none" }}>{items}</li>
                    ))
                }
            </ul>
        </div>
    )
}


