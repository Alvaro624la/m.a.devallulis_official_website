import React, { useState, useRef, useContext } from 'react';
import { Helmet } from "react-helmet";
import { useForm} from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import { ContextoMADV } from './contexto/Contexto';

init("alvaro_prueba");

function Contacto() {
  const { MADV } = useContext(ContextoMADV);
  // const { register, formState: { errors }, watch, handleSubmit } = useForm();
  const { register, handleSubmit } = useForm();

  const [claseEnviarForm, setClaseEnviarForm] = useState('contacto-body__form-container__form__button-container__btn');
  const [claseEsconderCampos, setClaseEsconderCampos] = useState('contacto-body__form-container__form__div');
  const [claseMensajeExitoEnvio, setClaseMensajeExitoEnvio] = useState('display-none');
  const [btnDisabled, setBtnDisabled] = useState(false);

  const form = useRef();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    // const dataObj = JSON.stringify(data); //{"nombre":"Ana","email":"sdfa@gmail.com","mensaje":"Hola Mundo"}
    setClaseEnviarForm('contacto-body__form-container__form__button-container__btn form-enviado');
    setClaseEsconderCampos('display-none');
    setClaseMensajeExitoEnvio('contacto-body__form-container__form__div');
    setBtnDisabled(true); // btn deshabilitado

    //EMAILJS
    sendForm(
      'alvaro_prueba', 
      'template_6w8go8f', 
      form.current, 
      's0MKGILL8unFh6lJ-'
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  const googleTag = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)};
    gtag('js', new Date());
    gtag('config', 'G-KM0V9V0W74');
  }

  return (
  <>
  <Helmet>
    <title>Contacto | Miguel Ángel de Vallulis: Envíale un mensaje</title>
    <meta name="description" content="Establece contacto con Miguel Ángel de Vallulis. Envía mensajes personalizados y descubre más sobre su música. ¡Comunica tus pensamientos y emociones!" />
    {/* <!-- Google tag (gtag.js) --> */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-KM0V9V0W74"></script>
    <script>{googleTag()}</script>
  </Helmet>
  <div className='contacto-body'>
    <div className='contacto-body__frase-container'>
    <p>Contactar a través del móvil al <a href={`tel:${MADV.telefono}`} className='contacto-body__frase-container__span'>{MADV.telefono}</a> o enviándole un mensaje personalizado:</p>
    </div>
    <div className='contacto-body__form-container'>
      <h1>Formulario de contacto</h1>
      <form ref={form} className='contacto-body__form-container__form' aria-label='Formulario de contacto' onSubmit={handleSubmit(onSubmit)}>
        <div className={claseEsconderCampos}>
          <label className='contacto-body__form-container__form__div__label' aria-label='Titulo del campo de nombre'>Nombre</label>
          <input 
            className='contacto-body__form-container__form__div__input' 
            type='text' 
            autoComplete='on' 
            {...register('user_name', {
              maxLength: 50,
          })}
          />
          <label className='contacto-body__form-container__form__div__label' aria-label='Titulo del campo de email'>Email</label>
          <input 
            className='contacto-body__form-container__form__div__input' 
            type='email' 
            autoComplete='on' 
            {...register('user_email', {required: true})}
            />
          <label className='contacto-body__form-container__form__div__label' aria-label='Titulo del campo de mensaje'>Mensaje</label>
          <textarea 
            className='contacto-body__form-container__form__div__input'  
            spellCheck='true'
            rows='20' 
            {...register('user_message', {required: true})}
            ></textarea>
        </div>
        <div className={claseMensajeExitoEnvio}><span className='contacto-body__form-container__form__div__span'>¡Mensaje enviado con éxito! Gracias.</span></div>
        <div className='contacto-body__form-container__form__button-container'>
          <button disabled={btnDisabled} className={claseEnviarForm} aria-label='Boton para enviar el formulario' type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  </div>
  </>
  )
}

export default Contacto