import {useCallback} from 'react';
import {Link, useNavigate, NavLink} from 'react-router-dom';
import {Button} from 'antd';

function App() {
    const navigate = useNavigate();

    const goToCreate = useCallback(
        () => {
            navigate('/create');
        },
        []
    );

    return (
        <>
            <Button type="primary" onClick={goToCreate}>创建</Button>
        </>
    );
}

export default App;
