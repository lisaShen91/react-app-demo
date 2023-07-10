import {useState, useEffect} from 'react';
import {Table} from 'antd';
import {userApi} from '@/apis';

interface User {
    gender: string;
    name: {
        first: string;
        last: string;
    };
    email: string;
    login: {
        uuid: string;
    };
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: ({first, last}: User['name']) => `${first} ${last}`,
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];

const rowKey = (record: User) => record.login.uuid;

export default function UserList() {
    const [users, setUsers] = useState([]);

    const getUserList = async () => {
        const res = await userApi.getUserList({results: 10});
        setUsers(res.results);
    };

    useEffect(
        () => {
            getUserList();
        },
        []
    );

    return (
        <Table
            loading={users === null}
            dataSource={users ?? []}
            columns={columns}
            rowKey={rowKey}
            pagination={false}
        />
    );
}
