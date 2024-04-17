import { Component } from '@angular/core';
import { SiembraService } from '../../services/siembra.service';
import { FertilizanteService } from '../../services/fertilizante.service';
import { ProduccionService } from '../../services/produccion.service';
import { Siembra, Fertilizante, Produccion, ReporteSiembra } from '../../models/siembra.model';

@Component({
    selector: 'app-calculadora',
    templateUrl: './calculadora.component.html',
    styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
    // Define variables para almacenar datos de siembra, fertilizante, producción y reporte de siembra
    siembra: Siembra = {
        variedad: '',
        densidadSiembra: 0,
        area: 0,
        fechaSiembra: new Date(),
    };
    fertilizante: Fertilizante;
    produccion: Produccion;
    reporteSiembra: ReporteSiembra;

    constructor(
      private siembraService: SiembraService,
      private fertilizanteService: FertilizanteService,
      private produccionService: ProduccionService
  ) {
      // Inicializa las propiedades en el constructor
      this.fertilizante = { tipo: '', cantidad: 0 };
      this.produccion = { cantidadProducida: 0, fechaCosecha: new Date() };
      this.reporteSiembra = {
          cantidadFertilizante: 0,
          tiempoProduccion: 0,
          cantidadProducida: 0,
          fechaCosecha: new Date(),
      };
  }
  

    // Función para calcular siembra, fertilizante y producción
    calcularSiembra() {
        // Realiza los cálculos usando los servicios
        this.reporteSiembra = this.siembraService.calcularReporteSiembra(this.siembra);
        this.fertilizante = this.fertilizanteService.calcularCantidadFertilizante(this.siembra.area, this.siembra.densidadSiembra);
        this.produccion = this.produccionService.calcularProduccion(this.siembra);
    }
}
