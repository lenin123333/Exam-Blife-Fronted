import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

export default function Stars({ numStars }) {
    // Calcular el número de estrellas llenas
    const numFullStars = Math.floor(numStars);
    // Calcular el porcentaje de la última estrella
    const percentage = (numStars - numFullStars) * 100;

    // Generar las estrellas llenas y vacías
    const filledStars = Array.from({ length: numFullStars }, (_, index) => (
        <FontAwesomeIcon key={index} icon={solidStar} className="text-yellow-500  w-4 h-4" />
    ));

    // Generar las estrellas vacías restantes
    const emptyStars = Array.from({ length: 5 - Math.ceil(numStars) }, (_, index) => (
        <FontAwesomeIcon key={index + numFullStars} icon={regularStar} className="text-gray-300  w-4 h-4" />
    ));

    return (
        <div className="flex items-center">
            {filledStars}
            {/* Agregar la estrella parcialmente llena solo si hay una fracción */}
            {numStars !== numFullStars && (
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
