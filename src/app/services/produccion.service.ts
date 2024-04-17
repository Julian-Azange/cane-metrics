import { Injectable } from '@angular/core';
import { Produccion } from '../models/siembra.model';
import { Siembra } from '../models/siembra.model';
import { calcularCantidadProducida, calcularFechaCosecha, calcularTiempoProduccion } from '../utils/calculos';

@Injectable({
    providedIn: 'root'
})
export class ProduccionService {
    constructor() {}

    calcularProduccion(siembra: Siembra): Produccion {
        // Utiliza funciones de cálculo para determinar la cantidad producida y la fecha de cosecha
        const cantidadProducida = calcularCantidadProducida(siembra);
        const tiempoProduccion = calcularTiempoProduccion(siembra);
        const fechaCosecha = calcularFechaCosecha(siembra, tiempoProduccion);

        // Retorna el objeto Producción con los valores calculados
        return {
            cantidadProducida,
            fechaCosecha,
        };
    }
}
