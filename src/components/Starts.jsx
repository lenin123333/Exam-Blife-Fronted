/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

export default function Stars({ numStars }) {
    // Calcular el número de estrellas llenas
    const numFullStars = Math.floor(numStars);
    // Calcular el porcentaje de la última estrella
    const percentage = (numStars - numFullStars) * 100;

    // Generar las estrellas llenas y vacías
    //Retornamos un arreglo del tamaño de numero de estrellas completas
    const filledStars = Array.from({ length: numFullStars }, (_, index) => (
        <FontAwesomeIcon key={index} icon={solidStar} className="text-yellow-500  w-4 h-4" />
    ));

    // Generar las estrellas vacías restantes
    //Retornamos un arreglo de estrellas vacias de la resta de 5 - el numero de estrellas pasado en  props
    const emptyStars = Array.from({ length: 5 - Math.ceil(numStars) }, (_, index) => (
        <FontAwesomeIcon key={index + numFullStars} icon={regularStar} className="text-gray-300  w-4 h-4" />
    ));

    return (
        <div className="flex items-center">
            {filledStars}
            {/* Agregar la estrella parcialmente llena solo si hay un numero decimal */}
            {numStars !== numFullStars && (
                //Mostramos la aesstrella al porcentaje que se calculo en las constantes
                //Primero renderisamos la estrella completa pero del tamaño que se le da en porcentaje
                //Por ejemplo si la estrella mide 100 y le paso 50% pues solo se rendireza el 50px 
                //y lo demas se oculta con el overflow-hidden
                <div className="relative">
                    <div className="absolute inset-y-0 overflow-hidden" style={{ width: `${percentage}%` }}>
                        <FontAwesomeIcon icon={solidStar} className="text-yellow-500 w-4 h-4" />
                    </div>
                    <FontAwesomeIcon icon={regularStar} className="text-gray-300 w-4 h-4" />
                </div>
            )}
            {/* Agregar estrellas vacías restantes si es necesario */}
            {emptyStars}
        </div>
    );
}
