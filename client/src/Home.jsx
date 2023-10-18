import React from 'react';
import myImage from './gato.avif';

function Home() {
    const areasDeOportunidad = [
        "Extender la aplicación MERN a una aplicación de eCommerce.",
        "Desarrollar una pequeña red social dentro de la aplicación.",
        "Crear una interfaz para trabajadores que permita gestionar tareas y proyectos, por ejemplo."
    ];

    return (
        <div>
            <h2>Home Component</h2>
            <img src={myImage} alt="Description of the image" width="500" height="500" />
            {/* Adjust the width and height values as needed */}
            <h3>Áreas de Oportunidad:</h3>
            <ul>
                {areasDeOportunidad.map((area, index) => (
                    <li key={index}>{area}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
