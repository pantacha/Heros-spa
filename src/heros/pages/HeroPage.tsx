import { useEffect, useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useAppStore } from '../../stores/useAppStore';

export const HeroPage = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const selectedItem = useAppStore((state) => state.selectedItem);
  const setHeroById = useAppStore((state) => state.setHeroById);

  useEffect(() => {
    setHeroById(id);
  }, [id, setHeroById]);

  const heroImageUrl = useMemo(() => `/assets/images/${id}.jpg`, [id]);

  if(!selectedItem){
    return <Navigate to="/" />
  }

  return (
    <div className="animate__animated animate__fadeIn container mx-auto px-4 py-12">
        <div className="bg-slate-800 text-white
                         rounded-lg shadow-lg overflow-hidden max-w-4xl
                          mx-auto md:flex">
            <div className="w-full md:w-1/2 h-80 md:h-auto">
                <img src={heroImageUrl} alt={selectedItem.superhero}
                        className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4">{selectedItem.superhero}</h1>
                <p className="text-lg mb-2"><strong>Publisher:</strong> {selectedItem.publisher}</p>
                <p className="text-lg mb-2"><strong>Alter Ego:</strong> {selectedItem.alter_ego}</p>
                <p className="text-lg mb-2"><strong>First Appearance:</strong> {selectedItem.first_appearance}</p>
                <p className="text-lg mb-2"><strong>Characters:</strong> {selectedItem.characters}</p>
                <button
                     onClick={() => navigate(-1)}
                     className="mt-12 bg-blue-500 text-white font-bold
                                 py-2 px-4 bg-gradient-to-r from-red-500 to-blue-700 rounded-lg shadow-lg p-6">
                   back          
                </button>
            </div>
        </div>
    </div>
  )

}
