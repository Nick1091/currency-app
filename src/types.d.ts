type Currencies = {
  Date: string,
  PreviousDate: string,
  PreviousURL: string,
  Timestamp: string,
  Valute: {
    [key: string]: CurrenciesList
  }
}
type CurrenciesList = {
  ID: string,
  NumCode: string,
  CharCode: string,
  Nominal: number,
  Name: string,
  Value: number,
  Previous: number
}

type CurrencyWithKey = {[key: string]: CurrenciesList}
type InitState = {
  currentCurrency: string,
  isLoaded: boolean,
  currencies: CurrenciesList[]
  error: string,
  dateId: string
};
