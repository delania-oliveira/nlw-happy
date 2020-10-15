import React from 'react';
import mapMarkerImg from '../images/Local.svg';
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import mapIcon from '../styles/utils/mapIcon';


function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                
                <footer>
                    <strong>Juazeiro do Norte</strong>
                    <span>Ceará</span>
                </footer>
            </aside>
            <Map 
                center={[-7.1855235,-39.3505867]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}
            >
               <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> 

               <Marker
                icon={mapIcon}
                position={[-7.2276628,-39.3318189]}
               >
                  <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                    Lar das meninas
                    <Link to="/orphanages/1">
                       <FiArrowRight size={20} color="#fff" /> 
                    </Link>
                  </Popup>    
               </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;
