import React from 'react'
import {smallUrl, bigUrl} from '../../constants'
import './styles.css'

export const ModeSelector = ({onSelect}) => (
  <div className="modeSelector">
    <button className="btn btn-success" onClick={onSelect.bind(null, smallUrl)}>
      32 элемента
    </button>
    <button className="btn btn-danger" onClick={onSelect.bind(null, bigUrl)}>
      1000 элементов
    </button>
  </div>
)
