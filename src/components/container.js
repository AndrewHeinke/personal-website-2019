import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 1200,
      padding: `0px 16px`,
      width: `100%`
    }}
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container;
