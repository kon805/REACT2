import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';



export default class Nav extends Component {
  render() {
    return (
      <>
    <nav className="fixed inset-x-0 top-0 z-50 p-4 bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-lg font-semibold text-white">Mon Logo</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4 text-white">
              <li><NavLink exact to="/accueil" activeClassName="text-gray-300" className="hover:text-gray-300">Accueil</NavLink></li>
              <li><NavLink to="/creation" activeClassName="text-gray-300" className="hover:text-gray-300">Creation</NavLink></li>
              <li><NavLink    to="/#form" activeClassName="text-gray-300" className="hover:text-gray-300">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
      </>
    )
  }
}
