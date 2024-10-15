import React, { useEffect } from 'react'
import { useAppStore } from '../../stores/useAppStore'
import { HeroCard } from './HeroCard';

export const HeroList = () => {

  const publisherFilter = useAppStore((state) => state.publisherFilter);
  const filteredHeros = useAppStore((state) => state.filteredHeros);
  const getFilteredHeros = useAppStore((state) => state.getFilteredHeros);

  useEffect(() => { // Cada vez que cambie el filtro, se obtendrán los heros filtrados
    getFilteredHeros(); 
  }, [publisherFilter]);
  

  return (
    <div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {
                filteredHeros.map((filteredHeros) => (
                    <HeroCard key={filteredHeros.id} {...filteredHeros} />
                ))
            }
        </ul>
    </div>
  )

}
