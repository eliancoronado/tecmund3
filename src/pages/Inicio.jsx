import './Inicio.css'
import Imgearth from '../assets/earth.png'

function Inicio() {

    function Mostrar() {
        document.getElementById('popup').classList.add('active')
        document.getElementById('titleinicio').classList.add('deshow')
        document.getElementById('earthinicio').classList.add('deshow')
        document.getElementById('divbtniniciemos').classList.add('deshow')
    }

    function Ocultar() {
        document.getElementById('popup').classList.remove('active')
        location.href = '/menu'
    }

    return (
      <div className="inicio">
        <div className="title" id='titleinicio'>
            TECMUND3
        </div>

        <div className='earthinicio' id='earthinicio'>
            <img src={Imgearth} />
        </div>

        <div className="but" id='divbtniniciemos'>
            <button type="button" id='btniniciemos' onClick={Mostrar}>Iniciemos</button>
        </div>

        <div className="popup" id='popup'>
            <p>
                !Bienvenidos, diviertete y aprende con TECMUND3. Antes de iniciar te informamos que esta app ofrece actividades educativas de la asignatura de Ciencias Naturales con las que vas a desarrollar tus conocimientos tecnocientificos de manera divertida.
            </p>
            <button type="button" onClick={Ocultar}>Continuar</button>
        </div>


      </div>
    )
}

export default Inicio
