import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { SearchItemsForm } from '../../types'
import { useAppStore } from '../../stores/useAppStore';
import { HeroCard } from '../components/HeroCard';
import { MessageSearchHero } from '../Messages/MessageSearchHero';
import { MessageError } from '../Messages/MessageError';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  console.log({location});

  const query = queryString.parse(location.search);
  const {q=''} = query;

  const searchItems = useAppStore((state) => state.searchItems); // Acción del store para el buscador
  const searchFilteredItems = useAppStore((state) => state.searchFilteredItems); // Estado de los resultados filtrados
  const resetSearch = useAppStore((state) => state.resetSearch);
 
  const [searchItemsForm, setSearchItemsForm] = useState<SearchItemsForm>({
    hero: q as string
  });
  const [messageSearchHero, setMessageSearchHero] = useState('');
  const [messageError, setMessageError] = useState('');

  useEffect(() => { // Hacer la búsqueda cuando cambie el query en la URL
    setMessageSearchHero('');
    searchItems({hero: q as string}); // Realiza la busqueda desde el store
  }, [q, searchItems]);
  
  useEffect(() => {
    if(!searchItemsForm.hero){
        setMessageSearchHero('Search a Hero');
        resetSearch()
    }
  }, [searchItemsForm.hero])
  
  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    setSearchItemsForm({
        ...searchItemsForm,
        [name]: value
    });
    setMessageError('');
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(Object.values(searchItemsForm).includes('')){
        console.log('All the fields are mandatory')
        return;
    }
    navigate(`?q=${searchItemsForm.hero}`);
    console.log({searchItemsForm});
    setMessageError(`No results found for ${q}`);
  }

  return (
    <>
        <div className="grid grid-cols-2 gap-4 py-20 px-4">
            {/* Search Section */}
            <section className="mt-8">
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center px-4">
                        <input
                        type="text"
                        id="hero"
                        name="hero"
                        value={searchItemsForm.hero}
                        onChange={handleInputChange}
                        placeholder="Search a hero..."
                        className="w-full max-w-md p-4 border-2 border-blue-500
                                    rounded-lg focus:ring-2 focus:ring-blue-500 uppercase"
                        />
                        <button
                        className="mt-4 border-blue-500 text-blue-500 px-6 py-2 rounded-lg
                                    bg-transparent hover:bg-blue-600 hover:text-white
                                        transition-colors"
                        >
                        Search
                        </button>
                </form>
            </section>
        {/* Mostrar resultados de la búsqueda */}
        <section className="grid grid-cols-1 gap-4 mt-8">
            {messageSearchHero && <MessageSearchHero>{messageSearchHero}</MessageSearchHero>}
            {
                searchFilteredItems.length>0 ? searchFilteredItems.map((item) => (
                    <HeroCard key={item.id} {...item} /> // MOstrar cada hero en una card
                )) : messageError && <MessageError>{messageError}</MessageError>
            }
        </section>
        </div>
    </>
  )

}
