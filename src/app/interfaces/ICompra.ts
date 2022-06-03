export interface ICompra { 
    "id": number,
    "valor": number,
    "itens": [],
    "dados_cartao": {
        "nome": string,
        "numero": string,
        "crv": number,
        "vencimento": string
    },
    "parcelas": number
}