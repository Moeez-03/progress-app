import React from 'react'

const Slider = ({title, value, onChange}) => {
  return (
    <>
      <div className="slider-container">
        <div className="range-min-max-values">
          <span>{title}</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          title={title}
          onChange={onChange}
        />
        <span>{value.toFixed(2)}%</span>
      </div>
    </>
  )
}

export default Slider