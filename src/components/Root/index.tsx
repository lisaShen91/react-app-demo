import {Input, Button} from 'antd';
import {Outlet} from 'react-router-dom';
import c from './index.less';
function Root() {
    return (
        <div className={c.container}>
            <div className={c.sidebar}>
                <div className={c.top}>
                    <Input size="small" style={{width: 100}} />
                    <Button type="primary" size="small">搜索</Button>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href={'/create'}>创建</a>
                        </li>
                        <li>
                            <a href={'/list'}>列表</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={c.detail}>
                <Outlet />
            </div>
        </div>
    );
}

export default Root;

