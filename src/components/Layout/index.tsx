import {Suspense} from 'react';
import {Outlet} from 'react-router-dom';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import Root from '@/components/Root';

export default function Layout() {
    return (
        <>
            <Header mode="dark" />
            <Suspense fallback={Loading}>
                <Root>
                    <Outlet />
                </Root>
            </Suspense>
        </>
    );
}

