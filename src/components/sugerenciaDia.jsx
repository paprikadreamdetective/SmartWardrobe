import React, {useState, useEffect} from "react";

// import './SugerenciaDia.css'

import { db } from "../firebaseConfig";

import PropTypes from 'prop-types';

const SugerenciaDia = ({ clima }) => {

      const [ropa, setRopa] = useState([]);

      const getData = async () => {
        console.log('La clima a buscar es = '+clima)
        db.collection('ropa').where('clima', '==', clima)
        .onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc =>{
                // console.log(doc.data());
                // console.log(doc.id);
                docs.push({...doc.data(), id:doc.id});
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
        {
          ropa.length > 0 && ropa[0] && (
            
              <img src={ropa[0].url} alt="" />
            
          )
        }

        </>
    )
}

export default SugerenciaDia;

SugerenciaDia.propTypes = {
  clima: PropTypes.string.isRequired,
};