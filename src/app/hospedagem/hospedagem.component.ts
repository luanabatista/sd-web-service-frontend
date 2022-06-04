import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { HospedagemService } from './hospedagem.service';
import { Router } from '@angular/router';
import { API_PATH } from 'src/environments/environment';

@Component({
  selector: 'app-hospedagem',
  templateUrl: './hospedagem.component.html',
  styleUrls: ['./hospedagem.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HospedagemComponent implements OnInit {

  public id_hospedagem: any;

  options: FormGroup;
  destino = new FormControl();
  entrada = new FormControl(null);
  saida = new FormControl(null);
  format_data = new Date();
  quant_pessoas = new FormControl('1');
  num_quartos = new FormControl('1');
  format_data_string: any;

  tableContent: any;

  constructor(
    fb: FormBuilder,
    private hospedagemService: HospedagemService,
    private router: Router
    ) {
    this.options = fb.group({
      num_quartos:  this.num_quartos,
      destino: this.destino,
      entrada: this.entrada,
      saida: this.saida,
      quant_pessoas: this.quant_pessoas,
    });
    
  }

  formata_data(date: Date) {
    var yyyy = date.getFullYear();
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var d = "";
    var m = "";
    var y = yyyy.toString();
    if (dd < 10)
        d = '0' + dd.toString();
    else
      d = dd.toString()
    if (mm < 10)
        m = '0' + mm.toString();
    else
      m = mm.toString()
    
    return y + '-' + m + '-' + d
  }

  buscaHospedagens() {
    var data_entrada_formatada = this.formata_data(new Date(this.entrada.value))
    var data_saida_formatada = this.formata_data(new Date(this.saida.value))
    
    this.hospedagemService.buscaHospedagens(this.destino.value, data_entrada_formatada, data_saida_formatada, this.quant_pessoas.value, this.num_quartos.value)
    .then(result => console.log(result))
    .catch(error => console.error(error))
  }

  ngOnInit(): void {
  }
  
  goCompra() {
    this.router.navigate(['hospedagens/compra'], { queryParams: { id_hospedagem: this.id_hospedagem, 'num_quartos': this.num_quartos.value, 'quant_pessoas': this.quant_pessoas.value }});
  }
}
