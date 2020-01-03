import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({ active, children, onClick }) => (
  <button
    className="btn-default"
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
)

Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Filter
