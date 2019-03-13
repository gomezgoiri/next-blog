import React from 'react'
import Link from './Link'
import Container from './Container'

const NavBar = () => (
  <nav className="navbar navbar-default">
    <Container>
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          Aitor Gómez Goiri
        </a>
      </div>

      <div className="collapse navbar-collapse navbar-right">
        <ul className="nav navbar-nav">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects.html">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/publications.html">
              <a>Publications</a>
            </Link>
          </li>
          <li>
            <Link href="/research_projects.html">
              <a>R&amp;D Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/teaching.html">
              <a>Teaching</a>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  </nav>
)

export default NavBar
