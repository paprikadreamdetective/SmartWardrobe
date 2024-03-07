import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import { uploadFile } from "../firebaseConfig";
import { IonInput, IonItem, IonList } from "@ionic/react";
import './LinkForm.css'
import axios from 'axios';
// import removeBg from "remove.bg";


// API key: aTG5BZzJ7Y7FnXVYxTxPHvyg

const LinkForm = (props) => {
    // const apiKey = 'aTG5BZzJ7Y7FnXVYxTxPHvyg'

    const initialValues = {
        tipo: '',
        clima: '',
        color: '',
        categoria: '',
        url: ''
    }

    const [file, setFile] = useState(null);
    const [values, setValues] = useState(initialValues);


    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        
    }
    /*
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };*/

    /*const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log('Submit Accept')
        const result = await uploadFile(file);
        console.log('Url image: '+ result);
        setValues({...values, url: result});

    }*/

    /*const handleSubmit = async (e) =>{

        
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        
        /*console.log('Submit Accept')
        const result = await uploadFile(file);
        console.log('Url image: '+ result);
        setValues({...values, url: result});*/

        // e.preventDefault();
        // const remove = await removeBg(file, apiKey);
        // const result = await uploadFile(remove);
        // console.log('Url image: '+ result);
        // setValues({...values, url: result});
        /*try {
            const response = await fetch('http://192.168.100.94:5000/upload', {
                method: 'POST',
                body: formData,
        });
        const result = await response.json();
        console.log('Respuesta del servidor:', result);

        // Actualiza el estado con la URL de la imagen procesada
        setValues({ ...values, url: result.firebase_url });

        // Continúa con el resto de la lógica según tus necesidades
        props.addOrEdit(values);

        // Reinicia el formulario
        setValues(initialValues);
        setFile(null);
    } catch (error) {
        console.error('Error al enviar la imagen:', error);
    }
}*/

    const handleSubmit = async (e) => {
        e.preventDefault();
        /*try {
            const formDataToUpload = new FormData();
            formDataToUpload.append('tipo', values.tipo);
            formDataToUpload.append('clima', values.clima);
            formDataToUpload.append('color', values.color);
            formDataToUpload.append('categoria', values.categoria);
            formDataToUpload.append('image', file);
            const response = await axios.post('http://192.168.100.94:5000/upload', formDataToUpload, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            const imageUrl = response.data.imageUrl;
      // Actualizar el estado con la URL de la imagen
            setValues({
            ...values,
            imageUrl: imageUrl
            });
            console.log('Datos y imagen enviados exitosamente');
          } catch (error) {
            console.error('Error al enviar datos e imagen', error);
          }
        };*/

        if (!file) {
        alert('Select a file first');
        return;
        }
    
        const formData = new FormData();
        
        formData.append('file', file);
        console.log('Variable formData: \n'+ formData)
    
        try {
        const response = await fetch('http://127.0.0.1:5000/user/upload', {
            method: 'POST',
            body: formData,
        });
    
        const result = await response.text();
        const resultObject = JSON.parse(result)
        console.log('Valor de url = ' + resultObject.image_url)
        console.log('Tipo de dato de url = ', typeof resultObject.image_url)
        setValues({...values, url: resultObject.image_url})
        console.log('Valores del formulario final: \n', values)
        // console.log('resultObject = ', resultObject);
        } catch (error) {
        console.error('Error uploading file:', error);
        }


    };


    useEffect(() => {
        if (values.url !== '') {
            props.addOrEdit(values);
            setValues({...initialValues});
        }
    }, [values]);

    return(
        <>
        <div className="content-inputs">
            <section className="form-register">
                <h4>Añadir Prenda</h4>

                <input className="controls" type="text" name="tipo" placeholder="Tipo" onChange={handleInputChange} value={values.tipo}></input>
                <input className="controls" type="text" name="clima" placeholder="Clima" onChange={handleInputChange} value={values.clima}></input>
                <input className="controls" type="text" name="color" placeholder="Color" onChange={handleInputChange} value={values.color}></input>
                <input className="controls" type="text" name="categoria" placeholder="Categoria" onChange={handleInputChange} value={values.categoria}></input>
                <input className="image-inputs" type="file" name="image" onChange={e => setFile(e.target.files[0])}></input>

                {/* <input type="file" name="image" onChange={async (e) => {const res = await uploadFile(e.target.files[0]); console.log('AL cargar:',res)}} value={values.url}></input> */}

                <button className="botons" onClick={handleSubmit}>Save</button>
            </section>
        </div>
        </>
    )
}

LinkForm.propTypes = {
    addOrEdit: PropTypes.func.isRequired,
};

export default LinkForm;
