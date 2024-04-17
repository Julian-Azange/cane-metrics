import { Injectable } from '@angular/core';
import { Siembra, ReporteSiembra } from '../models/siembra.model';
import { calcularCantidadFertilizante, calcularTiempoProduccion, calcularCantidadProducida, calcularFechaCosecha } from '../utils/calculos';

@Injectable({
    providedIn: 'root'
})
export class SiembraService {
    constructor() {}

    calcularReporteSiembra(siembra: Siembra): ReporteSiembra {
        const cantidadFertilizante = calcularCantidadFertilizante(siembra);
        const tiempoProduccion = calcularTiempoProduccion(siembra);
        const cantidadProducida = calcularCantidadProducida(siembra);
        const fechaCosecha = calcularFechaCosecha(siembra, tiempoProduccion);

        return {
            cantidadFertilizante,
            tiempoProduccion,
            cantidadProducida,
            fechaCosecha,
        };
    }
}
