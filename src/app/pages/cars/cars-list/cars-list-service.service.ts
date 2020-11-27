import { Injectable } from '@angular/core';
import { AbstractTableData } from '../../shared/abstract.table.data';

@Injectable({
  providedIn: 'root'
})
export class CarsListTableService extends AbstractTableData {

  constructor() { super(); }

  getData() {
    return [
      { sku: "1", marca: 'Volkswagen', modelo: 'Hatch', placa: 'ABC102', valorFipe: 54, cor: 'Azul' },
      { sku: "2", marca: 'Volkswagen', modelo: 'Hatch', placa: 'ABC103', valorFipe: 30, cor: 'Vermelho' },
      { sku: "3", marca: 'Volkswagen', modelo: 'Hatch', placa: 'ABC104', valorFipe: 45, cor: 'Vermelho' },
      { sku: "4", marca: 'Volkswagen', modelo: 'Sedan', placa: 'ABC105', valorFipe: 48, cor: 'Verde-claro' },
      { sku: "5", marca: 'Volkswagen', modelo: 'SUV', placa: 'ABC106', valorFipe: 40, cor: 'Branco' },
      { sku: "6", marca: 'Volkswagen', modelo: 'Hatch', placa: 'ABC107', valorFipe: 44, cor: 'Prata' },
      { sku: "7", marca: 'Citroen', modelo: 'Hatch', placa: 'ABC108', valorFipe: 58, cor: 'Prata' },
      { sku: "8", marca: 'Citroen', modelo: 'SUV', placa: 'ABC109', valorFipe: 70, cor: 'Preto' }
      { sku: "9", marca: 'Citroen', modelo: 'SUV', placa: 'ABC110', valorFipe: 50, cor: 'Branco' }
      { sku: "10", marca: 'Citroen', modelo: 'Hatch', placa: 'ABC111', valorFipe: 55, cor: 'Azul' }
      { sku: "11", marca: 'Ford', modelo: 'SUV', placa: 'ABC112', valorFipe: 40, cor: 'Branco' }
      { sku: "12", marca: 'Ford', modelo: 'Coupe', placa: 'ABC113', valorFipe: 80, cor: 'Preto' }
      { sku: "13", marca: 'Ford', modelo: 'Sedan', placa: 'ABC114', valorFipe: 90, cor: 'Verde' }
      { sku: "14", marca: 'Ford', modelo: 'Minivan', placa: 'ABC115', valorFipe: 110, cor: 'Amarelo' }
      { sku: "15", marca: 'Ford', modelo: 'Sedan', placa: 'ABC116', valorFipe: 58, cor: 'Vermelho' }
    ];
  }

  getColumns() {
    return {
      sku: {
        title: 'SKU',
        type: 'string',
        filter: true,
        width: '10%',
      },
      marca: {
        title: 'Marca',
        type: 'string',
        filter: true,
        width: '15%',
      },
      modelo: {
        title: 'Modelo',
        type: 'string',
        filter: true,
        width: '20%',
      },
      placa: {
        title: 'Placa',
        type: 'string',
        filter: true,
        width: '10%',
      },
      valorFipe: {
        title: 'Valor FIPE',
        type: 'number',
        filter: true,
        width: '10%',
      },
      cor: {
        title: 'Cor',
        type: 'string',
        filter: true,
        width: '20%',
      }
    }
  };

}
