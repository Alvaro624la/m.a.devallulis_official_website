import React, { useState, useRef } from 'react';
import { useForm} from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init("alvaro_prueba");

function Contacto() {
  const { register, formState: { errors }, watch, handleSubmit } = useForm();

  const [claseEnviarForm, setClaseEnviarForm] = useState('contacto-body__form-container__form__button-container__btn');
  const [claseEsconderCampos, setClaseEsconderCampos] = useState('contacto-body__form-container__form__div');
  const [claseMensajeExitoEnvio, setClaseMensajeExitoEnvio] = useState('display-none');
  const [btnDisabled, setBtnDisabled] = useState(false);

  const form = useRef();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    const dataObj = JSON.stringify(data); //{"nombre":"Ana","email":"sdfa@gmail.com","mensaje":"Hola Mundo"}
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

  return (
  <>
  <div className='contacto-body'>
    <div className='contacto-body__frase-container'>
      <div>Contactar a través del móvil al <a href='tel: 628251720' className='contacto-body__frase-container__span'>628251720</a> o enviándole un mensaje personalizado:</div>
    </div>
    <div className='contacto-body__form-container'>
      {/* <form 
        ref={form} 
        className='display-none' 
        onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name="user_name" value={userName}/>
        <label>Email</label>
        <input type="email" name="user_email"  value={userEmail}/>
        <label>Message</label>
        <textarea name="user_message"  value={userMessage}/>
        <input type="submit" value="Send" />
      </form> */}
      <form ref={form} className='contacto-body__form-container__form' onSubmit={handleSubmit(onSubmit)}>
        <div className={claseEsconderCampos}>
          <label className='contacto-body__form-container__form__div__label'>Nombre</label>
          <input 
            className='contacto-body__form-container__form__div__input' 
            type='text' 
            autoComplete='on' 
            {...register('user_name', {
              maxLength: 50,
          })}
          />
          <label className='contacto-body__form-container__form__div__label'>Email</label>
          <input 
            className='contacto-body__form-container__form__div__input' 
            type='email' 
            autoComplete='on' 
            {...register('user_email', {required: true})}
            />
          <label className='contacto-body__form-container__form__div__label'>Mensaje</label>
          <textarea 
            className='contacto-body__form-container__form__div__input'  
            spellCheck='true'
            rows='20' 
            {...register('user_message', {required: true})}
            ></textarea>
        </div>
        <div className={claseMensajeExitoEnvio}><span className='contacto-body__form-container__form__div__span'>¡Mensaje enviado con éxito! Gracias.</span></div>
        <div className='contacto-body__form-container__form__button-container'>
          <button disabled={btnDisabled} className={claseEnviarForm} type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  </div>
  </>
  )
}

export default Contacto