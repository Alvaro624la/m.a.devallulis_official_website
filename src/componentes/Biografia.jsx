import React from 'react';
import { Helmet } from "react-helmet";
import banner from '../img/fondo-bio.jpg';
import perfil from '../img/foto-perfil-bio.jpg';

function Biografia() {
  return (
  <>
  <Helmet>
    <title>Biografía | Miguel Ángel de Vallulis</title>
    <meta name="description" content="Descubre un poco más sobre Miguel Ángel" />
  </Helmet>
  <div className='biografia-body'>
    <img className='biografia-body__banner-img' src={banner} alt='banner'/>    
    <div className='biografia-body__texto-container'>
    <div className='biografia-body__perfil-img-container'>
      <img className='biografia-body__perfil-img-container__perfil-img' aria-label='Imagen de perfil del artista' src={perfil}/>
    </div>
    La pasión por cantar, se manifestó bien pronto en su vida. Apenas un niño, ya comenzó a llenar las horas del día con el tarareo de canciones... 
    <br/>
    Como quiera que hasta los siete u ocho años su padres no se decidieron a comprar la radio que tanto él como sus hermanos pedían con insistencia, las canciones eran aprendidas de los cantos de los mozos del pueblo con que festejaban las muchas fechas señaladas que jalonaban el calendario anual de un pueblo de la montaña leonesa. La noche buena, el día de reyes, antruido, la matanza del gocho, la fiesta del pueblo, las rondas, las bodas, los bautizos, el baile de los domingos en La Plaza o Debajo del Rosal... siempre fueron jornadas que los mozos y los mayores llenaron de canciones con tambor y pandereta.
    <br/>
    En infinidad de ocasiones, su madre Victorina, agotada ya su infinita paciencia, le tenía que pedir con un “calla, hijo, calla, por favor”, que diera un poco de tregua a sus mañanas de cocina y cacharros. Mas tarde, eran las familias de veraneantes quienes le subían a la mesa de la cocina pidiéndole que cantara...
    <br/>
    A los doce, ya en los Maristas de Carrion de los Condes, los hermanos enseguida descubren de sus dotes de canto y escenario, y le hacen protagonista en muchas de las obras de teatro e intérprete de canciones que representaba en el sala de teatro del colegio. Luego, algunas de esas canciones, las interpretó subido en los escenarios de la fiesta mayor de la ciudad.
    <br/>
    <br/>
    En Miranda de Ebro, paso siguiente de su periplo en los Maristas, llegado el momento comenzar clases de instrumento, al no tener guitarra, como sí tenían muchos de sus compañeros, se decidió por la batería. En un cuartito, en las estancias superiores, practicaba a diario unos minutos por las noches después de cenar y antes de acostarse. Sin demasiadas horas aún de práctica, ya acompañaba con la batería a guitarras y bandurrias en el canto de la misa desde el coro de la capilla. Destaca con especial cariño la ocasión en que tocó en el coro de la iglesia de Ircio, población situada a escasos kilómetros de Miranda de Ebro y que recuerda como un hito importante en su vida musical de adolescente.
    <br/>
    Es en el servicio militar en Santa Cruz de Tenerife, cuando compra su primera guitarra y un compañero de Ciudad Real, le enseña los primeros acordes.
    <br/>
    Ya en Barcelona, sigue tomando clases solfeo, de guitarra y de armonía. Busca en los anuncios de las tiendas de música aquellos en los que gupos buscan cantante. Así forma su primer grupo con el que ensaya en el Centro Social del barrio de Gracia. Logran actuar en las calles del barrio en la fiesta mayor. A partir de esos eventos, lo solicitan para formar parte de la primera de las orquesta de las varias en las que estuvo y con las que recorrió fiestas mayores en poblaciones de Cataluña, Andorra, Aragón y Castilla. Mucho más adelante, ya de bien adulto, hará unos años de piano logrando, con mucho esfuerzo, alcanzar un nivel suficiente que le permitiera enhebrar las melodías y armonías de estas canciones que hoy podemos escuchar.
    </div>
  </div>
  </>
  )
}

export default Biografia