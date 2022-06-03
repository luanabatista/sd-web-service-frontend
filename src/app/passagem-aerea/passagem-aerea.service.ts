import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { IVoo } from 'src/app/interfaces/IVoo';
import { ICompra } from 'src/app/interfaces/ICompra';

@Injectable({
  providedIn: 'root'
})
export class PassagemAereaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getVoos() {
    return this.httpClient.get<IVoo[]>(`${API_PATH}passagens/voos`).toPromise();
  }

  buscaVoo(ida_e_volta: boolean | undefined, 
            origem: string | undefined, 
            destino: string | undefined, 
            data_ida: string | undefined, 
            data_volta: string | undefined, 
            quant_pessoas:number| undefined) {
    return this.httpClient
    .get<IVoo[]>(`${API_PATH}passagens/busca/?ida_e_volta=${ida_e_volta}&origem=${origem}&destino=${destino}&data_ida=${data_ida}&data_volta=${data_volta}&quant_pessoas=${quant_pessoas}`).toPromise()}
  
  finalizarCompra(quant_pessoas: number, 
                dados_pessoas: [], 
                id_voo: number, 
                nome_cartao: string, 
                num_cartao: string, 
                crv: number, 
                parcelas: number, 
                venc_cartao: string) {
    return this.httpClient.post<ICompra>(`${API_PATH}passagens/finalizar-compra`, {quant_pessoas,  dados_pessoas, 
                                                                id_voo, nome_cartao, num_cartao,  crv, 
                                                                parcelas, venc_cartao}).toPromise();
  }
  
    getInfoVoo(id_ida: number, id_volta: number, quant_pessoas: number): Promise<any> {
        return this.httpClient
          .get<any>(`${API_PATH}passagens/compra/?id_ida=${id_ida}&id_volta=${id_volta}&quant_pessoas=${quant_pessoas}`)
          .toPromise();
    }                                                          
}
