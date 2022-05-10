import Image from 'next/image'
import styles from "./styles.module.scss"
export default function Contatti() {
  const src = "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80";
  return <>
    <Image
      src={src}
      alt="img"
      width={500}
      height={500}
    />
    <Image
      src={src}
      alt="img"
      width={500}
      height={500}
    />
  </>;
}
