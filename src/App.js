import React, {useState} from 'react'
import * as R from 'ramda'
import {Loader} from './components/Loader/Loader'
import {Table} from './components/Table/Table'
import {DetailRowView} from './components/DetailRowView/DetailRowView'
import {ModeSelector} from './components/ModeSelector/ModeSelector'
import {TableSearch} from './components/TableSearch/TableSearch'
import {Pagination} from './components/Pagination/Pagination'
import {ASC, DESC, pageSize} from './constants'
import {sortData} from './utils'

function App() {
  const [data, setData] = useState([])
  const [isModeSelected, setIsModeSelected] = useState(false)
  const [loader, setLoader] = useState(false)
  const [sort, setSort] = useState(ASC) // DESC
  const [sortField, setSortField] = useState('id')
  const [row, setRow] = useState(null)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(0)

  const onRowSelect = (row) => setRow(row)

  const onSort = (sortField) => {
    const cloned = R.clone(data)

    setData(sortData(sort, sortField)(cloned))
    setSort(R.ifElse(R.equals(ASC), R.always(DESC), R.always(ASC))(sort))
    setSortField(sortField)
  }

  const fetchData = async (url) => {
    const response = await fetch(url)

    const data = await response.json()
    setData(sortData(sort, sortField)(data))
    setLoader(false)
  }

  const onSelect = (url) => {
    setIsModeSelected(true)
    setLoader(true)

    fetchData(url)
  }

  const pageChangeHandler = ({selected}) => setCurrentPage(selected)

  const searchHandler = (search) => {
    setSearch(search)
    setCurrentPage(0)
  }

  const getFilteredData = () => {
    const cloned = R.clone(data)
    const s = R.clone(search).toLowerCase()

    if (!s) return cloned

    return cloned.filter((item) => {
      return (
        item['firstName'].toLowerCase().includes(s) ||
        item['lastName'].toLowerCase().includes(s) ||
        item['email'].toLowerCase().includes(s)
      )
    })
  }

  const filteredData = getFilteredData()

  const pageCount = Math.ceil(R.divide(R.length(filteredData), pageSize))

  const displayedData = R.prop(currentPage, R.splitEvery(pageSize, filteredData))

  const content = loader ? (
    <Loader />
  ) : (
    <div className="container">
      <TableSearch onSearch={searchHandler} />
      <Table data={displayedData} onSort={onSort} sort={sort} sortField={sortField} onRowSelect={onRowSelect} />
      {R.and(row, <DetailRowView person={row} />)}
      {R.and(
        R.gt(R.length(data), pageSize),
        <Pagination onPageChange={pageChangeHandler} forcePage={currentPage} pageCount={pageCount} />
      )}
    </div>
  )

  return (
    <>
      {!isModeSelected ? (
        <div className="container">
          <ModeSelector onSelect={onSelect} />
        </div>
      ) : (
        content
      )}
    </>
  )
}

export default App
