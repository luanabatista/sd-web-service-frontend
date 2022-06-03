import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PassagemAereaComponent } from './passagem-aerea/passagem-aerea.component';
import { HospedagemComponent } from './hospedagem/hospedagem.component';
import { PassagemAereaCompraComponent } from './passagem-aerea-compra/passagem-aerea-compra.component';


const routes: Routes = [
  { path: 'passagens', component: PassagemAereaComponent },
  { path: 'passagens/compra', component: PassagemAereaCompraComponent },
  { path: 'hospedagens', component: HospedagemComponent },
  { path: '', redirectTo: 'passagens', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
