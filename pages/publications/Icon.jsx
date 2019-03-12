import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ href, src, alt, ...other }) => (
  <a href={href} {...other}>
    <img src={`/static/img/${src}`} alt={alt} />
  </a>
)

Icon.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Icon
