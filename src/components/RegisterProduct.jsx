import React, { useState } from 'react'
import { Input, ListaPlegable} from './Input'
import "../styles/RegisterProduct.css"


function RegisterProduct() {
	const [images, setImages] = useState([]);
	const [texto, setTexto] = useState('');

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  const subirImages = (event) => {
	setImages(prevObjectos => [...prevObjectos, ...event.target.files]);
	
  }

  const manejarClic = () => {
	  console.log("Images:", images);
  }


  return (
    <div className='register-product'>
        <form action="" className=''>
                <Input
					nombreGrupo="product-name"
					label="Nombre del producto:"
					tipoInput="text"
					placeholder="Ej: Samsung A52 - 4gb ram - 128gb"
					require={true}
				/>
				<ListaPlegable
					nombreGrupo="category"
					label="Categorías:"
					placeholder="Ej: Celulares"
                    opciones={["Apple", "Samsung", "Xiaomi"]}
					require={true}
				/>
                    

				<div>{images.map((image, index) => 
					<img key={index} src={URL.createObjectURL(image)} alt={`Imagen ${index + 1}`} />)}
					</div>
				<input type="file" multiple className="images" name="images" onChange={(e)=> subirImages(e)} />
				{/*input tipo file todos su value de tipo object*/}
				<button onClick={manejarClic}>Subir img</button>

                <Input
					nombreGrupo="stock"
					label="Stock del producto:"
					tipoInput="number"
					placeholder=""
					require={true}
				/>

				<div className="g-price">
					<label htmlFor="price">
						Precio:
					</label>
					<div className='line-price'>
						<span>$</span>
						<input type="number" className="price" placeholder='$1000'/>
					</div>
				</div>
                
                <Input
					nombreGrupo="model"
					label="Modelo:"
					tipoInput="text"
					placeholder="Ej: SM-A52"
					require={true}
				/>
                <Input
					nombreGrupo="mark"
					label="Marca:"
					tipoInput="text"
					placeholder="Samsung"
					require={true}
				/>
                <Input
					nombreGrupo="color"
					label="Color:"
					tipoInput="text"
					placeholder="Ej: Blanco"
					require={true}
				/>
                <ListaPlegable
					nombreGrupo="state"
					label="Estado:"
					placeholder="Seleccionar"
                    opciones={["Nuevo", "Usado"]}
					require={true}
				/>

               

				<span>Descripción:</span>
                 <textarea
				 
					className='description'
					placeholder='Escribe una descripción...'
        			value={texto}
        			onChange={handleChange}
        			style={{resize: 'none', lineHeight: '1.5', border: 'solid 1px gray', borderRadius: '10px', padding: '10px', width: '100%', height: '100px', outline: "none" }} // Ajusta el tamaño según lo necesites
      			/>

				<button type="submit"> Publicar</button>
        </form>
        <div className="result-publication">
                <div className="publication-box">
			
				</div>
        </div>
    </div>
  )
}

export default RegisterProduct