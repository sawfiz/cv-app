import React from 'react'
import Textarea from './inputs/Textarea'

export default function Interests({cv, updateCV}) {

  const interests = cv?.Interests || '';

  function handleChange(e) {
    updateCV('Interests', e.target.value)
  }
  return (
    <div>
      <Textarea 
      fieldName={'Interests:'}
      data={interests} 
      handleChange={handleChange}/>
      <button>Save</button>
    </div>
  )
}
