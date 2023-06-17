import { Metadata } from "next";
import { Form } from '@/components/converter-form/form';

export const metadata: Metadata = {
  title: 'Exchange Rates | Currencies App',
  description: "The Exchange Rates page of currencies app"
}

export default function Exchanges() {
    return (
      <Form />
    )
}
