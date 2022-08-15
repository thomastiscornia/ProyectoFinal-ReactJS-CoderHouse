import React, { useState } from 'react'
import Counter from '../ItemCount/ItemCount'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";


export default function ItemDetail(props) {
  const [irAlCarrito, setearCarrito] = useState(false);
  const { addProducto } = useCartContext();

  function agregarProducto(cantidad) {
    setearCarrito(true);
    addProducto(props, cantidad);
    alert(`¡Muy bien, agregaste ${cantidad} ${props.marca} ${props.bebida} con éxito!`);
  }
  return (
      <div className="row flex col-12 mb-2 ">
        <div className="col-sm ">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 justify-content-center position-relative cardItem">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0 cardTittle">{props.bebida}</h3>
              <p className="card-text mb-auto p-1 fs-1 cardText">${props.precio}</p>
            </div>
            <div className="col-auto  d-lg-flex">
              <img
                src={props.imagen}
                alt="product img"
                className="img-fluid imagenProducto "
              />
            </div>
            {irAlCarrito ? (
              <div className="justify-content-center col-6">
                <Link to="/cart">
                  {" "}
                  <Button className="btn btn-success">
                    Finalizar Compra
                  </Button>{" "}
                </Link>
              </div>
            ) : (
              <Counter initial={1} stock={props.stock} onAdd={agregarProducto} />
            )}

            <span className=" fs-3 text-center text-warning fw-bold">
              Stock disponible : {props.stock}
            </span>
          </div>
        </div>
      </div>
  );
}