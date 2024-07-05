import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/productos/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{product.nombre}</h1>
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
      <p>Cantidad disponible: {product.cantidadDisponible}</p>
    </div>
  );
};

export default ProductDetail;
