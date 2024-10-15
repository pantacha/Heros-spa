import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';
import 'animate.css';

type Props = {
    id: string,
    superhero: string,
    publisher: string,
    alter_ego: string,
    first_appearance: string,
    characters: string
}

export const HeroCard = ({superhero, alter_ego, first_appearance, characters, id}: Props) => {

  const heroImageUrl = useMemo(() => `/assets/images/${id}.jpg`, [id]);

  return (
    <div className="animate__animated animate__fadeIn max-w-sm rounded overflow-hidden shadow-lg bg-slate-800 text-white mx-auto">
        {/* Imágen del superhero */}
        <img src={heroImageUrl} alt={superhero} className="w-full h-34 hover:scale-125 transition-transform hover:rotate-2" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{superhero}</div>
            <p className="text-sm text-slate-400">Alter Ego: {alter_ego}</p>
            <p className="text-sm text-slate-400">First Appearance: {first_appearance}</p>
            <p className="text-sm text-slate-400">Characters: {characters}</p>
        </div>
        <div className="flex justify-center items-center">
          <Link
            to={`/hero/${id}`}
            className="block text-lg text-blue-400 hover:text-blue-200
                          hover:underline">
            more...
          </Link>
        </div>
    </div>
  )
  
}
