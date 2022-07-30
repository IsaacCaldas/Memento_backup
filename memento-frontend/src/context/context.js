import { useState, useEffect, createContext } from 'react'

export const Context = createContext({})

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(true)
  const [datePeriod, setDatePeriod] = useState('Hoje')
  const [isVisible, setVisibility] = useState(false)
  const [hiddenTasks, setHiddenTasks] = useState(false)
  const [bg_theme, setBgTheme] = useState()

  const display_colors = ['#468a6a', '#4e69ed', '#bf0a4c']

  useEffect(() => {
    switch (datePeriod) {  
      case 'Esta semana':
        setBgTheme(display_colors[1])
        break
      case 'Este mês':
        setBgTheme(display_colors[2])
        break
      case 'Hoje':
      default:
        setBgTheme(display_colors[0])
        break
    }
  }, [datePeriod])

  return (
    <Context.Provider 
      value={
      { theme, setTheme, datePeriod, setDatePeriod,
        isVisible, setVisibility, hiddenTasks, setHiddenTasks,
        bg_theme
      }
    }>
      {children}
    </Context.Provider>
  )
}