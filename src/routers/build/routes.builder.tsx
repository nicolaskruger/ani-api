import { FC } from "react";
import { BrowserRouter, RouteProps, Switch, Redirect } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { ROUTE_FRONT } from "../../constants";
import { token } from "../../reducer";
import { AnimeScreen, LoginScreen, SearchScreen } from "../../ui";
import { NoTokenRoute } from "../custom/no-token.route";
import { PublicRoute } from "../custom/public.route";
import { TokenRoute } from "../custom/token.route";

const { LOGIN, SEARCH, ANIME } = ROUTE_FRONT;

type RouteBuild = {
    path: string,
    exact: boolean,
    component: FC,
    CustomRoute: FC<RouteProps>
}

const RouteRedirect = () => {
    const tk = useAppSelector(token)

    if (tk) {

    }

    return (
        <Redirect to={LOGIN} />
    )
}

const RouterBuilder = () => {
    const builder: RouteBuild[] = [
        {
            path: LOGIN,
            exact: true,
            component: LoginScreen,
            CustomRoute: NoTokenRoute
        },
        {
            path: SEARCH,
            exact: true,
            component: SearchScreen,
            CustomRoute: TokenRoute
        },
        {
            path: ANIME,
            exact: true,
            component: AnimeScreen,
            CustomRoute: TokenRoute
        },
        {
            path: "/",
            exact: false,
            component: RouteRedirect,
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