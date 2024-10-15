import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/', {
      replace: true
    })
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
            Go to page
        </button>
      </div>
    </>
  )

}
