import React, {useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import cloud_icon from '../assets/cloud.png'
import './carruselPrendas.css'

import { db } from "../firebaseConfig";

import PropTypes from 'prop-types';

const CarruselPrendas = ({ categoria }) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 390, min: 0 },
          items: 3
        }
      };

      const [ropa, setRopa] = useState([]);

      const getData = async () => {
        console.log('La categoria a buscar es = '+ categoria)
        db.collection('ropa').where('categoria', '==', categoria)
        .onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc =>{
                // console.log(doc.data());
                // console.log(doc.id);
                docs.push({...doc.data(), id: doc.id});
            });
            setRopa(docs);
            console.log(docs)
        });
      }

    useEffect(() => {
      getData();
    }, []);

    return(
        <>
        <div className="carruselApp">
          <Carousel responsive={responsive}>
            {
              ropa.map((r, index) => {
                return (
                  <>
                    <div key={index} className="card">
                        {/* <h1>{index}</h1> */}
                        {console.log('Url de la imagen: ' + r.url)}
                        <img src={r.url} alt="" />
                        {/* <p>r.tipo</p> */}
                    </div>
                  </>
                )
              })
            }
          </Carousel>
        </div>
      </>
    )
}

export default CarruselPrendas;

CarruselPrendas.propTypes = {
  categoria: PropTypes.string.isRequired,
};