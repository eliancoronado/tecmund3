import Header from '../../components/Header';
import './Menu.css'

function Menu() {

    return(
        <>
            <Header />
            <div className="menu">
                <div className="menutitlelv">
                    Fase 1
                </div>
                <div className="group1">
                    <div className="fase1">Actividad 1</div>
                    <div className="fase2">Actividad 2</div>
                    <div className="fase3">Actividad 3</div>
                </div>
                <div className="menutitlelv">
                    Fase 2
                </div>
                <div className="group1">
                    <div className="fase3">Actividad 1</div>
                    <div className="fase2">Actividad 2</div>
                    <div className="fase1">Actividad 3</div>
                </div>
                <div className="menutitlelv">
                    Fase 3
                </div>
                <div className="group1">
                    <div className="fase1">Actividad 1</div>
                    <div className="fase2">Actividad 2</div>
                    <div className="fase3">Actividad 3</div>
                </div>
                <div className="menutitlelv">
                    Fase 4
                </div>
                <div className="group1">
                    <div className="fase3">Actividad 1</div>
                    <div className="fase2">Actividad 2</div>
                    <div className="fase1">Actividad 3</div>
                </div>
            </div>
        </> 
    );
}

export default Menu
