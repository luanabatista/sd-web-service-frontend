import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PassagemAereaComponent } from './passagem-aerea/passagem-aerea.component';
import { HospedagemComponent } from './hospedagem/hospedagem.component';
import { PassagemAereaCompraComponent } from './passagem-aerea-compra/passagem-aerea-compra.component';
import { HospedagemCompraComponent } from './hospedagem-compra/hospedagem-compra.component';


const routes: Routes = [
  { path: 'passagens/busca', component: PassagemAereaComponent },
  { path: 'passagens/compra', component: PassagemAereaCompraComponent },
  { path: 'hospedagens/busca', component: HospedagemComponent },
  { path: 'hospedagens/compra', component: HospedagemCompraComponent },
  { path: '', redirectTo: 'passagens/busca', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
