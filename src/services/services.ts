import axios, { AxiosError } from 'axios';

export async function getCurrencies(): Promise<Currencies | string>{
    try{
        const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
        const res = await response.data;
        return res
    } catch (e) {
        const err = e as AxiosError
        return err.message
 
    }
}
