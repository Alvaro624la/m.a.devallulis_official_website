import React from 'react';
import banner from '../img/fondo-bio.jpg';
import perfil from '../img/foto-perfil-bio.jpg';

function Biografia() {
  return (
  <>
  <div className='biografia-body'>
    <img className='biografia-body__banner-img' src={banner}/>    
    <div className='biografia-body__texto-container'>
    <div className='biografia-body__perfil-img-container'>
      <img className='biografia-body__perfil-img-container__perfil-img' aria-label='Imagen de perfil del artista' src={perfil}/>
    </div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id eleifend eros. Pellentesque eu placerat arcu, congue mattis quam. In erat orci, egestas sed porta in, auctor eget lacus. Sed nec sem fermentum, tincidunt leo eget, volutpat neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus, arcu non tempor mattis, elit nunc tincidunt augue, sit amet volutpat odio risus consectetur est. Nunc leo ligula, venenatis et erat in, commodo faucibus orci. Sed ultrices metus congue risus bibendum, in volutpat magna mattis. Donec eu leo tempus, malesuada elit quis, dignissim est. Phasellus rutrum lacus a arcu sollicitudin, eget maximus leo blandit.
    <br/>
    Donec nibh enim, gravida quis eleifend ultricies, feugiat a augue. Curabitur elementum non est nec mollis. Nullam odio leo, tempus quis ultrices vel, tincidunt ac nisi. Duis malesuada, leo nec ullamcorper commodo, est lacus elementum quam, eget pharetra urna lorem quis felis. Donec commodo nec dui id aliquam. Sed metus lectus, auctor vitae tristique in, pharetra et mi. Donec augue orci, ullamcorper eget orci a, elementum ultricies nunc. Duis suscipit elit ac nunc interdum suscipit. Mauris pretium lacus eget mi ultricies eleifend.

    Nunc fermentum sagittis diam, et fermentum metus efficitur quis. Sed vel ultricies tortor, vitae tristique nibh. Quisque elementum tortor risus, eu ullamcorper mi facilisis quis. Morbi scelerisque metus velit, vel pharetra eros dapibus eget. Nulla ac ex ligula. Nulla tempus id nibh id varius. Vestibulum in sem mi. Praesent mollis sagittis eros, id iaculis purus tincidunt vel. Donec sed metus vitae tellus mollis sollicitudin. Vivamus vitae risus nec urna consectetur hendrerit. Maecenas mi urna, faucibus et risus non, feugiat porttitor risus. Aliquam hendrerit, metus nec hendrerit commodo, massa est sagittis arcu, quis elementum mauris nisi sed magna. In condimentum mi ex, id imperdiet libero consectetur eu. Vivamus vitae nibh sem.

    Vivamus hendrerit erat sed tortor tempor, quis bibendum lacus condimentum. Mauris interdum finibus diam, in mollis nibh imperdiet ultrices. Duis eleifend dictum mauris, eu pellentesque ante pulvinar sit amet. Morbi tincidunt volutpat lorem, sed aliquam nulla rutrum non. Etiam id porta orci. In rhoncus sed orci vel lacinia. Sed accumsan lorem eget risus accumsan vestibulum. Donec nec venenatis nunc, non porttitor ligula. Donec sodales magna lacus. Nunc in turpis a velit dapibus tincidunt. Curabitur non metus imperdiet, dignissim risus nec, lobortis nisl. Vestibulum dapibus in dui at pretium. Sed cursus ac odio sed consectetur.
    </div>
  </div>
  </>
  )
}

export default Biografia