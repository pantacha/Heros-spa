import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DcPage } from '../heros';
import { MarvelPage } from '../heros';
import { Layout } from '../layouts/Layout';
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
