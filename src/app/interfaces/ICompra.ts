export interface ICompra { 
    "id": string,
    "valor": string,
    "itens": [],
    "dados_cartao": {
        "nome": string,
        "numero": string,
        "crv": string,
        "vencimento": string
    },
    "parcelas": string
}