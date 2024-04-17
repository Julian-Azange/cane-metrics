export interface Fertilizante {
    tipo: string;
    cantidad: number;
}

export interface Siembra {
    variedad: string;
    densidadSiembra: number;
    area: number;
    fechaSiembra: Date;
}

export interface Produccion {
    cantidadProducida: number;
    fechaCosecha: Date;
}

export interface ReporteSiembra {
    cantidadFertilizante: number;
    tiempoProduccion: number;
    cantidadProducida: number;
    fechaCosecha: Date;
}
