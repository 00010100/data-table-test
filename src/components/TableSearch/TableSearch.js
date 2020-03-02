import React, {useState} from 'react'

export const TableSearch = ({onSearch}) => {
  const [value, setValue] = useState('')

  const onChange = (e) => setValue(e.target.value)

  return (
    <div className="input-group mb-3 mt-3">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" onClick={onSearch.bind(null, value)}>
          Search
        </button>
      </div>
      <input value={value} onChange={onChange} type="text" className="form-control" placeholder="Search..." />
    </div>
  )
}
