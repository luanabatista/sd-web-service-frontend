import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PassagemAereaService } from './passagem-aerea.service';
import { Router } from '@angular/router';
import { API_PATH } from 'src/environments/environment';

@Component({
  selector: 'app-passagem-aerea',
  templateUrl: './passagem-aerea.component.html',
  styleUrls: ['./passagem-aerea.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PassagemAereaComponent implements OnInit {

  id_ida: any;
  id_volta: any;

  options: FormGroup;
  ida_e_volta = new FormControl('true');
  origem = new FormControl();
  destino = new FormControl();
  ida = new FormControl(null);
  volta = new FormControl(null);
  format_data = new Date();
  quant_pessoas = new FormControl('1');
  format_data_string: any;

  tableContent: any;

  constructor(
    fb: FormBuilder,
    private passagemAereaService: PassagemAereaService,
    private router: Router
    ) {
    this.options = fb.group({
      ida_e_volta: this.ida_e_volta,
      origem:  this.origem,
      destino: this.destino,
      ida: this.ida,
      volta: this.volta,
      quant_pessoas: this.quant_pessoas,
    });
    
  }
  
  getVoos() {
    this.passagemAereaService.getVoos()
    .then(result => console.log(result))
    .catch(error => console.error(error));
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

  buscaVoos() {
    var data_ida_formatada = this.formata_data(new Date(this.ida.value))
    var data_volta_formatada = this.formata_data(new Date(this.volta.value))

    console.log(data_ida_formatada)
    
    this.passagemAereaService.buscaVoo(this.ida_e_volta.value, this.origem.value, this.destino.value, data_ida_formatada, data_volta_formatada, this.quant_pessoas.value)
    .then(result => this.tableContent = [result])
    .catch(error => console.error(error))
  }

  

  ngOnInit(): void {
  }
}