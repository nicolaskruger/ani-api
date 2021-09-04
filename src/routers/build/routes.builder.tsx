import { FC } from "react";
import { BrowserRouter, RouteProps, Switch } from "react-router-dom";
import { ROUTE_FRONT } from "../../constants";
import { LoginScreen } from "../../ui";
import { PublicRoute } from "../custom/public.route";

const { LOGIN } = ROUTE_FRONT;

type RouteBuild = {
    path: string,
    exact: boolean,
    component: FC,
    CustomRoute: FC<RouteProps>
}

const RouterBuilder = () => {
    const builder: RouteBuild[] = [
        {
            path: LOGIN,
            exact: true,
            component: LoginScreen,
            CustomRoute: PublicRoute
        }
    ]
    return (
        <BrowserRouter>
            <Switch>
                {
                    builder.map(({ component, exact, path, CustomRoute }, index) => (
                        <CustomRoute key={index} component={component} exact={exact} path={path} />
                    )
                    )
                }
            </Switch>
        </BrowserRouter>
    )
}

export { RouterBuilder }