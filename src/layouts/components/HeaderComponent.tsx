import { NavLink, useNavigate } from 'react-router-dom'
import logo from '/assets/logo.svg';
import { useAppStore } from '../../stores/useAppStore';

export const HeaderComponent = () => {

  const navigate = useNavigate();

  const filteredPublisher = useAppStore((state) => state.setPublisherFilter)

  const handleLogout = () => {
    navigate('/login', {
        replace: true
    })
  }

  return (
    <>
        <header className="bg-slate-800">
            <div className="container mx-auto px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src={logo} alt="logo" />
                    </div>
                    <nav className="flex items-center space-x-28">
                        <div className="flex space-x-4 text-xl">
                            <NavLink
                                to="/marvel"
                                onClick={() => filteredPublisher("Marvel Comics")}
                                className={({isActive}) =>
                                    isActive ? "text-red-500 uppercase font-bold"
                                    : "text-white uppercase font-bold"}>Marvel Heros</NavLink>
                            <NavLink
                                to="/dc"
                                onClick={() => filteredPublisher("DC Comics")}
                                className={({isActive}) =>
                                    isActive ? "text-blue-500 uppercase font-bold"
                                    : "text-white uppercase font-bold"}>DC Heros</NavLink>
                            <NavLink
                                to="/search"
                                className={({isActive}) =>
                                    isActive ? "text-yellow-200 uppercase font-bold"
                                    : "text-white uppercase font-bold"}>Search</NavLink>
                        </div>
                        <div>
                            <button
                                onClick={handleLogout}
                                className="bg-slate-800 text-white font-bold py-2 px-4
                                                 rounded border border-transparent hover:border-blue-600
                                                     ml-4">Logout</button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </>
  )

}
