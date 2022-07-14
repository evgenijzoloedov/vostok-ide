import React from 'react';
import {Route, Routes,} from "react-router-dom";
import {MainLayout} from "./layouts/mainLayout";
import {Constructor} from "./pages/construcor";
import {Start} from "./pages/start";
import {Dashboard} from "./pages/dashboard";

export const App = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path={'/'} element={<Start/>}/>
                <Route path={'/constructor'} element={<Constructor/>}/>
                <Route path={'/dashboard'} element={<Dashboard/>}/>
            </Routes>
        </MainLayout>
    );
};


