import React from 'react'
import Status from './Status'
import './header.scss'
import Nav from './Nav'

export default function Header({json}) {
  return (
    <div className='header'>
      <Status json={json} />
      <Nav json={json}/>
    </div>
  )
}
