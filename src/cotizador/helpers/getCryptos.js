const key =  '7b3544e807e719a00d7752b794a90058ecb304f21c518d4994bef70a410d9a14';

export const getCryptos = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const resp = await fetch(url);
    const {Data} = await resp.json();

    const newData = Data.map( ( { CoinInfo } ) => ({
        nombreCompleto: CoinInfo.FullName,
        nombre: CoinInfo.Name 
        }) 
    )
    
    return newData;
}
