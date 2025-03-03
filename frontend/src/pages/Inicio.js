import React from 'react';

const Inicio = () => {
    return (
        <div className='text-center mt-5'>
            <h1>VecinoApp</h1>
            <img src="../img/vecino-inicio.png" alt='VecinoApp' className='img-fluid mt-5' />
            <h2 className='mt-5'>Tu comunidad segura y conectada</h2>
            <p className='mt-5 pt-5 px-5 mx-5 text-justify lead text-muted font-weight-light fs-5 lh-base'>
                Descubre la app que mantiene tu edificio seguro: alertas en tiempo
                real, comunicación instantánea con tus vecinos y notificaciones
                urgentes como '¡Ocupa detectado!'. Conecta, protege y vive tranquilo
                en tu comunidad.
            </p>
        </div>
    );
};

export default Inicio;