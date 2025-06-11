import React from 'react'
import './studio.css'  // Red/Green styling yahan se apply hoti hai

export function StudioLayout(props: any) {
  return <>{props.renderDefault(props)}</>
}