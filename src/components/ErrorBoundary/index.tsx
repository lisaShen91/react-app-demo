import {Link, useRouteError} from 'react-router-dom';
import {Button} from 'antd';
import c from './index.less';

function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className={c.container}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Button type="primary">
                <Link to="/">返回首页</Link>
            </Button>
        </div>
    );
}

export default ErrorBoundary;
