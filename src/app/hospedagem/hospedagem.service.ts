import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { IVoo } from 'src/app/interfaces/IVoo';
import { ICompra } from 'src/app/interfaces/ICompra';
import { IPessoa } from '../interfaces/IPessoa';

@Injectable({
  providedIn: 'root'
})
export class HospedagemService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getVoos() {
    return this.httpClient.get<IVoo[]>(`${API_PATH}passagens/voos`).toPromise();
  }

  buscaHospedagens(destino: string | undefined, data_entrada: string | undefined, data_saida: string | undefined, quant_pessoas: number | undefined, num_quartos: number | undefined ) {
    return this.httpClient
    .get<IVoo[]>(`${API_PATH}hospedagens/busca/?destino=${destino}&data_entrada=${data_entrada}&data_saida=${data_saida}&quant_pessoas=${quant_pessoas}&num_quartos=${num_quartos}`).toPromise()}
  
  
  finalizarCompra(quant_pessoas: any, 
  dados_pessoas: any, 
  id_ida: any, 
  id_volta: any, 
  nome_cartao: any, 
  num_cartao: any, 
  crv: any, 
  parcelas: any, 
  venc_cartao: any,
  valor_total: any) {
    var finalizaCompra = {
      quant_pessoas: quant_pessoas, 
      dados_pessoas: dados_pessoas, 
      id_ida: id_ida, 
      id_volta: id_volta, 
      nome_cartao: nome_cartao, 
      num_cartao: num_cartao, 
      crv: crv, 
      parcelas: parcelas, 
      venc_cartao: venc_cartao,
      valor_total: valor_total
    } ;

    console.log(finalizaCompra)
    return this.httpClient.post<any>(`${API_PATH}hospedagens/finalizar-compra`, finalizaCompra)
    .toPromise();
  }
  
  getInfoVoo(id_ida: number, id_volta: number, quant_pessoas: number): Promise<any> {
        return this.httpClient
          .get<any>(`${API_PATH}hospedagens/compra/?id_ida=${id_ida}&id_volta=${id_volta}&quant_pessoas=${quant_pessoas}`)
          .toPromise();
  }  
}
