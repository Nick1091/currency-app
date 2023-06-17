import { getArrayFromObj } from '@/helper/helper';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export const fetchCurrencies = createAsyncThunk('currencies/getAllCurrencies', async (_, thunkAPI) => {
  try {
    const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
    const res = await response.data;
    return getArrayFromObj(res.Valute)
  } catch (err) {
    const e = err as AxiosError
    return thunkAPI.rejectWithValue(e.message);
  }
});

type InitState = {
  currency: string,
  isLoaded: boolean,
  currencies: CurrenciesList[]
  error: string,
  dateId: string
};
const initialState: InitState = {
  currency: 'BY',
  isLoaded: false,
  currencies: [],
  error: '',
  dateId:''
};

export const currencySlice = createSlice({
  name: 'currencies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.fulfilled, (state, action: PayloadAction<CurrenciesList[]>) => {
      state.currencies = [...action.payload];
      state.isLoaded = false;
      state.error = '';
    })
    builder.addCase(fetchCurrencies.pending, (state) => {
      state.isLoaded = true;
    })
    builder.addCase(fetchCurrencies.rejected, (state, action: PayloadAction<unknown, string, any, any>) => {
      state.isLoaded = false;
      state.error = action.payload as string;
    })
  },
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    setDateId: (state, action: PayloadAction<string>) => {
      state.dateId= action.payload;
    },
  },
});

export const {
  setCurrency, 
  setDateId
} = currencySlice.actions;

export default currencySlice.reducer;
