import Image from 'next/image'
import styles from './home.module.scss'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Monitoring | Currencies App',
  description: "The Monitoring page of currencies app"
}

export default function Monitoring() {
    return <div>Monitoring page</div>
}
