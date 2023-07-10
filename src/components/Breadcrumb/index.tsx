import {Breadcrumb} from 'antd';
import {Link, useLocation} from 'react-router-dom';
import c from './index.less';

const breadcrumbNameMap: Record<string, string> = {
    '/create': '创建',
    '/list': '列表',
};

const CustomBreadcrumb = () => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter(i => i);

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return {
            key: url,
            title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
        };
    });

    const breadcrumbItems = [
        {
            title: <Link to="/">首页</Link>,
            key: 'home',
        },
    ].concat(extraBreadcrumbItems);

    return <Breadcrumb className={c.container} items={breadcrumbItems} />;
};
export default CustomBreadcrumb;
