import React from 'react'
import { Shield } from 'lucide-react'

type Props = {
    publisher: string;
}

export const HeaderSectionHerosListComponent = ({publisher}: Props) => {

  const elem = publisher.split(' ')[0];

  return (
    <div className={elem==='Marvel'
            ? "bg-gradient-to-r from-red-500 to-red-700 rounded-lg shadow-lg p-6"
            : "bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg p-6"}>
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold text-white">{elem} Heros</h1>
          <Shield className="h-8 w-8 text-white" />
        </div>
          <p className="text-md text-blue-100 mt-2">Discover the mighty heros of the {elem} Universe</p>
    </div>
  )

}
