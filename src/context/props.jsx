import { createContext, useState } from 'react'

export const PropsContext = createContext()

export function PropsProvider ({ children }) {
  const [selectProps, setSelectProps] = useState(null)

  return (
    <PropsContext.Provider value={{
      selectProps,
      setSelectProps
    }}
    >
      {children}
    </PropsContext.Provider>
  )
}
