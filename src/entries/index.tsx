import React from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import routes from '@/routes';
import '@/utils/interseptors';
import '@/styles';

const router = createBrowserRouter(routes);
const container = document.createElement('div');
document.body.append(container);
const root = createRoot(container);
// 初始化代码
root.render(
    // <React.StrictMode>
        <RouterProvider router={router} />
    // </React.StrictMode>
);
