import React, { useEffect, useState, useRef } from 'react'
import '../../vendor/card.css'
import { GridProvider } from '../../hoc/grid_provider'
const FilteredCars = ({ filter = [] }) => {
  return (
    <>
      <h1 className='center'>filtered results</h1>
      {/* map through the props  */}
      <GridProvider gtc='repeat(2, 1fr)' style={{ margin: '0 2em 0 1em ' }}>
        {filter.map((Car, indexOfCar) => (
          <div key={indexOfCar} className='card'>
            <div className='car_image'>
              <img
                width='100%'
                src='https://www.vippng.com/png/detail/133-1337891_sedan-svg-png-icon-free-download-sedan-car.png'
                alt={`${Car.last_name}'s car`}
              />
            </div>
            <div className='details'>
              <strong style={{ padding: '14px 0', display: 'block' }}>
                {Car.last_name} {Car.first_name}
              </strong>
              {/* brand */}
              <GridProvider gtc='1fr 1fr 1fr'>
                <strong>
                  <small>Brand</small>
                </strong>
                <strong>
                  <small>Year</small>
                </strong>
                <strong>
                  <small>Color</small>
                </strong>
                {/* dynamic content */}
                <strong>
                  <small className='gray'>{Car.car_model}</small>
                </strong>
                <strong>
                  <small className='gray'>{Car.car_model_year}</small>
                </strong>
                <strong>
                  <small>
                    <span
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '100%',
                        backgroundColor: Car.car_color,
                        display: 'inline-block',
                        padding: '.2em'
                      }}
                    ></span>
                  </small>
                </strong>
              </GridProvider>
            </div>
          </div>
        ))}
      </GridProvider>
    </>
  )
}
/*

    "id": 822,
    "first_name": "Zenia",
    "last_name": "Ansley",
    "email": "zansleymt@google.de",
    "country": "Tunisia",
    "car_model": "Fairthorpe",
    "car_model_year": "1960",
    "car_color": "Goldenrod",
    "gender": "Female",
    "job_title": "Geological Engineer",
    "bio": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui."
  }
 */
export default FilteredCars
