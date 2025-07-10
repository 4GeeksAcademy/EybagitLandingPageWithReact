import React from 'react'

const Tarjeta = ({imagen, titulo, descripcion, enlace, textoBoton}) => {
  return (
  <div className="col-12 col-md-6 col-lg-3 mb-4">
    <div className="card h-100">
      <img src={imagen} className="card-img-top" alt={titulo} />
      <div className="card-body p-4 text-center">
        <h5 className="fw-bolder">{titulo}</h5>
        <p>{descripcion}</p>
      </div>
      <div className="card-footer text-center border-top">
        <a className="btn btn-primary" href={enlace}>
          {textoBoton}
        </a>
      </div>
    </div>
  </div>
  )
}
export default Tarjeta
