import React from 'react'
import Tarjeta from './Tarjeta'

const datosTarjetas = Array.from({ length: 4 }, () => ({
  imagen: 'https://placehold.co/700x400/d9d9d9/999999?text=500x325',
  titulo: 'Card title',
  descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.',
  enlace: '#',
  textoBoton: 'Find Out More!'
}))

const TarjetasList = () => {
    return(
    <section className="py-1">
      <div className="container">
        <div className="row gx-2 gx-lg-4">
          {datosTarjetas.map((item, index) => (
            <Tarjeta key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
    )
}
export default TarjetasList
