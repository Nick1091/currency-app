import { Metadata } from "next";
import { Form } from '@/components/converter-form/form';

export const metadata: Metadata = {
  title: 'Converter | Currencies App',
  description: "The Converter Rates page of currencies app"
}

export default async function Converter() {
    return (
      <Form />
    )
}
