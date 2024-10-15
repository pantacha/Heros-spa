import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';
import { Layout } from '../../layouts/Layout';

export const HerosRoutes = () => {

  return (
    // <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/marvel" element={<MarvelPage />} />
                <Route path="/dc" element={<DcPage />} index />
                <Route path="/" element={<Navigate to="marvel" />} />
                <Route path='/hero/:id' element={<HeroPage />}></Route>
                <Route path='/search' element={<SearchPage />}></Route>
            </Route>
        </Routes>
    //   </BrowserRouter>
  )

}
