import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Slider from './slider'
import Index from './index.css'

const data = ['slide1', 'slide2', 'slide3']

function App({sliders}) {
  const [values, setValues] = useState(
    new Array(sliders.length).fill(100 / sliders.length),
  )

  function handleChange(index, value) {
    let maxValue = 100
    const remaining = maxValue - parseInt(value, 10)
    setValues((vs) =>
      vs.map((v, i) => {
        if (i === index) return parseInt(value, 10)
        const oldRemaining = maxValue - parseInt(vs[index], 10)
        if (oldRemaining) return (remaining * v) / oldRemaining
        return remaining / (sliders.length - 1)
      }),
    )
  }

  return sliders.map((item, index) => (
    <Slider
      key={index}
      index={index}
      value={values[index]}
      title={item}
      onChange={(e) => handleChange(index, e.target.value)}
    />
  ))
}

ReactDOM.render(<App sliders={data} />, document.getElementById('root'))


