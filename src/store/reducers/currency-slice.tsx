import { getArrayFromObj } from '@/helper/helper';
import { createSlice, PayloadAction, createAsyncThunk, AsyncThunkPayloadCreator, AsyncThunkOptions } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { AppDispatch, RootState } from '../store';

type AppThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
}

const createAppThunk = <Returned, ThunkArg = void>(
  type: string, 
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, AppThunkConfig>,
  options?: AsyncThunkOptions<ThunkArg, AppThunkConfig>,
) => {
  return createAsyncThunk(type, payloadCreator, options) 
}

export const fetchCurrencies = createAppThunk('currencies/getAllCurrencies', async (_, thunkAPI) => {
  try {
    const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
    const res = await response.data;
    return getArrayFromObj(res.Valute)
  } catch (err) {
    const e = err as AxiosError
    return thunkAPI.rejectWithValue(e.message);
  }
});
const initialState: InitState = {
  currentCurrency: 'BYN',
  isLoaded: true,
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
      state.currentCurrency = action.payload;
    },
    setDateId: (state, action: PayloadAction<string>) => {
      state.dateId= action.payload;
    },
    setIsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
  },
});

export const {
  setCurrency, 
  setDateId,
} = currencySlice.actions;

export const { reducer } = currencySlice;
