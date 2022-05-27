/**
 *  2022 Sergi S. - https://github.com/sergiss
 */

import React from 'react'

export const Number = ({value = 0}) => {
  const result = String(value).padStart(2, "0");
  return (
      <div className='digital'>
        <p>88</p>
        <p>{result}</p>
      </div>
  )
}
