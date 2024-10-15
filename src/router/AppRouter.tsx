import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from '../auth';
import { HerosRoutes } from '../heros/routes/HerosRoutes';

export const AppRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
            {/* <Route element={<Layout />}> */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<HerosRoutes />} />
            {/* </Route> */}
        </Routes>
      </BrowserRouter>
  )

}
