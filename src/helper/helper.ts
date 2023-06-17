import { enNames } from "@/constants/pages-rout";

export const getArrayFromObj = (obj: CurrencyWithKey): CurrenciesList[] =>{
  const arr = []
  for (let key in obj) {
    obj[key].Name = enNames[obj[key].ID];
    arr.push(obj[key]);
  }
  return arr;
}


export const getDateId = (): string => {
  const date = new Date()
  return  String(date.getDay()) + date.getHours();
}

type GetResultProps = {
  currencies: CurrenciesList[],
  formData: FormData,
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

export const getResult = ({currencies, formData, setResult}: GetResultProps)  => {

  const currentCur = formData.get("initial")
  const finalCur = formData.get("final")
  const amount = formData.get("number")

  const initValue = currencies.find(el => el.ID === currentCur);
  const finalValue = currencies.find(el => el.ID === finalCur);
  if(initValue && finalValue && amount) {
    const result = (+initValue.Value / +initValue.Nominal * +amount / (+finalValue.Value / +finalValue.Nominal)).toFixed(2)
    setResult(`${result} ${finalValue.CharCode}`);
  }
} 
