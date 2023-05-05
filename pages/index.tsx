import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@mui/material/Button';
import ResponsiveAppBar from "@/pages/home";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <ResponsiveAppBar />
  )
}
