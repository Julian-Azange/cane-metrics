// Archivo: src/app/utils/calculos.ts

import { Siembra } from '../models/siembra.model';

export function calcularCantidadFertilizante(siembra: Siembra): number {
    // Implementa la lógica para calcular la cantidad de fertilizante necesario
    // Por ejemplo, podrías usar la densidad de siembra y el área para calcular la cantidad de fertilizante.
    const { densidadSiembra, area } = siembra;
    const cantidadFertilizante = densidadSiembra * area * 0.1; // Ajusta el factor según tu cálculo
    return cantidadFertilizante;
}

export function calcularTiempoProduccion(siembra: Siembra): number {
    // Implementa la lógica para calcular el tiempo de producción estimado
    // Por ejemplo, podrías basarte en la variedad y otros factores.
    const { variedad } = siembra;
    let tiempoProduccion = 12; // Establece un valor por defecto o usa la variedad para calcular
    // Ajusta el cálculo según las condiciones de la siembra
    return tiempoProduccion;
}

export function calcularCantidadProducida(siembra: Siembra): number {
    // Implementa la lógica para calcular la cantidad producida estimada
    // Por ejemplo, podrías usar la variedad, densidad de siembra y área.
    const { densidadSiembra, area } = siembra;
    const cantidadProducida = densidadSiembra * area * 0.5; // Ajusta el factor según tu cálculo
    return cantidadProducida;
}

export function calcularFechaCosecha(siembra: Siembra, tiempoProduccion: number): Date {
    // Implementa la lógica para calcular la fecha de cosecha estimada
    // Por ejemplo, suma el tiempo de producción a la fecha de siembra.
    const fechaCosecha = new Date(siembra.fechaSiembra);
    fechaCosecha.setMonth(fechaCosecha.getMonth() + tiempoProduccion);
    return fechaCosecha;
}
