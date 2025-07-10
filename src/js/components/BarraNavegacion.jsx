import React from 'react'

const BarraNavegacion = () => {

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            {['Home','About','Services','Contact'].map((item,index)=>(
              <li className="nav-item" key={index}>
                <a className="nav-link" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )   
}

export default BarraNavegacion
