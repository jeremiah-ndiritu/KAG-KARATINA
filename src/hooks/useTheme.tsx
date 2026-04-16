import { ThemeContext } from '@/ctx/contexts/ThemeContext'
import {useContext} from 'react'

export default function useTheme() {
  const thctx = useContext(ThemeContext)
  if(thctx) return thctx
  else throw new Error("Theme context error!");
  
}
