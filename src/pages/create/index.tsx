import {Button} from 'antd';
import {Form} from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';

const Create = () => {
    return (
        <>
            <Breadcrumb />
            <Form method="post" action="/list">
                <label>
                    Project title
                    <br />
                    <input type="text" name="title" />
                </label>
                <br />
                <button type="submit">
                    提交
                </button>
            </Form>
        </>
    );
};
export default Create;
