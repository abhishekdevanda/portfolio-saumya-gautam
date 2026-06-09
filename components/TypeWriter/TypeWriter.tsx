"use client"
import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const TypeWriter = ({ data }: { data: string[] }) => {
  return (
    <span className="inline-grid">
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {data[0]}
      </span>
      <span className="col-start-1 row-start-1">
        <TypewriterComponent
          options={{
            strings: data,
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </span>
  )
}

export default TypeWriter
