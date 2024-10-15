import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

export const MessageSearchHero = ({children}: Props) => {

  return (
    <div className="bg-blue-100 border border-blue-400 text-blue-500 px-4 py-3
                         h-20 rounded-lg text-center flex items-center justify-center"
                          role="alert">
        <span className="block sm:inline">{children}</span>
    </div>
  )

}
