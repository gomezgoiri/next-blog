import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const BottomNav = ({ prev, next }) => (
  <nav>
    <ul className="pager">
      {prev && (
        <li className="previous">
          <Link href={prev.url}>
            <a>
              <span aria-hidden="true">←</span> 
              {' '}
              {prev.title}
            </a>
          </Link>
        </li>
      )}
      {next && (
        <li className="next">
          <Link href={next.url}>
            <a>
              {next.title} 
              {' '}
              <span aria-hidden="true">→</span>
            </a>
          </Link>
        </li>
      )}
    </ul>
  </nav>
)

const NavItem = PropTypes.shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
})

BottomNav.propTypes = {
  prev: NavItem,
  next: NavItem
}

export default BottomNav
