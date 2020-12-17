import React, { useEffect, useState } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { GlobalStore } from '../init/globalStore';

/**
 * 路由验证token，跳转登录页面
 * @param param0 
 */
export function CheckTokenRoute<T extends RouteProps = RouteProps, P = {}>({ component, ...rest }: T & { component: React.ElementType<P> }) {
    let [beValide, setValide] = useState(true);
    let Comp = component as any;
    return <Route {...rest} render={props => {
        if (GlobalStore.authInfo?.token == null) {
            setValide(false);
        } else {
            //在这调用api检查token
        }
        return beValide ? <Comp {...props} />
            :
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    }}
    />;
}