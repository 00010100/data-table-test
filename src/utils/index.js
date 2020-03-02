import * as R from 'ramda'
import {DESC} from '../constants'

const sortDirection = R.ifElse(R.equals(DESC), R.always(R.descend), R.always(R.ascend))

export const sortData = (type, field) => R.sortWith([R.compose(sortDirection(type), R.prop)(field)])
