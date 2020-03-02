import React from 'react'
import * as R from 'ramda'
import {UpArrow} from '../icons/UpArrow'
import {DownArrow} from '../icons/DownArrow'
import {ASC} from '../../constants'

export const Table = ({data, onSort, sort, sortField, onRowSelect}) => {
  const head = R.compose(R.keys, R.omit(['address', 'description']), R.head)
  const arrowDir = R.ifElse(R.equals(ASC), R.always(<DownArrow />), R.always(<UpArrow />))

  return (
    <table className="table">
      <thead>
        <tr>
          {R.map((item) => (
            <th onClick={onSort.bind(null, item)} key={item}>
              {item} {R.and(R.equals(sortField, item), arrowDir(sort))}
            </th>
          ))(head(data))}
        </tr>
      </thead>
      <tbody>
        {R.map((item) => {
          const {id, firstName, lastName, email, phone} = item

          return (
            <tr key={`${id}-${phone}`} onClick={onRowSelect.bind(null, item)}>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{phone}</td>
            </tr>
          )
        })(data)}
      </tbody>
    </table>
  )
}
