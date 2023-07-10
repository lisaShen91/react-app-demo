import {configure} from '@reskript/settings';

export default configure(
    'webpack',
    {
        build: {
            appTitle: '我的第一个应用',
        },
        devServer: {
            port: 8081,
            https: {
                proxy: true,
            },
            apiPrefixes: ['/api'],
            defaultProxyDomain: 'randomuser.me',
        },
    }
);
