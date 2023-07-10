import {lazy} from 'react';
import {redirect} from 'react-router-dom';
import Layout from '@/components/Layout';
import ErrorBoundary from '@/components/ErrorBoundary';

const Home = lazy(() => import('@/pages/home'));
const List = lazy(() => import('@/pages/list'));
const Create = lazy(() => import('@/pages/create'));

const routes = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                index: true,
                path: '/list',
                element: <List />,
                action: async ({request}) => {
                    const data = await request.formData();
                    console.log(data.get('title'));
                    return redirect('/list');
                },
            },
            {
                path: 'create',
                element: <Create />,
            },
        ],
    },
];

export default routes;
