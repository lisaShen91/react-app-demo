import {NavLink} from 'react-router-dom';
import c from './index.less';

interface Props {
    mode?: 'light' | 'dark';
}

const Header = ({mode}: Props = {mode: 'dark'}) => {
    const navs = [
        {
            to: '/create',
            label: '创建',
        },
        {
            to: '/list',
            label: '列表',
        },
    ];
    return (
        <header className={c('root', {dark: mode === 'dark'})}>
            {navs.map(item => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({isActive, isPending}) => c('navItem', {
                        pending: isPending,
                        active: isActive,
                    })}
                >
                    {item.label}
                </NavLink>
            ))}
        </header>
    );
};

export default Header;
