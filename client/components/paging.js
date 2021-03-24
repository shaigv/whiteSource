import React from 'react'
import { Pagination } from 'semantic-ui-react'

const Paginations = (props) => (
  <Pagination
    activePage={props.activePage}
    onPageChange ={(e)=>props.onPageChange(e.target.attributes[3].nodeValue)}
    boundaryRange={0}
    defaultActivePage={1}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={10}
  />
)

export default Paginations

