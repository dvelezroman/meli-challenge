import React, { Fragment } from 'react'

import '../styles/BreadCrumb.scss'

const BreadCrumb = (props) => {
  return (
    <div className='Breadcrumb-Container'>
      {props.categories.map((category, i) => (
        <Fragment key={category.domainId}>
          <span className="Breadcrumb-Text">{category.domainId.split('-')[1]}</span>
          {i !== props.categories.length - 1 && <span className="Breadcrumb-Text">{">"}</span>}
        </Fragment>
      ))}
    </div>
  )
}

export default BreadCrumb
