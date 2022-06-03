import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-passagem-aerea-compra',
  templateUrl: './passagem-aerea-compra.component.html',
  styleUrls: ['./passagem-aerea-compra.component.css']
})
export class PassagemAereaCompraComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  ngOnInit(): void {
  }

}
