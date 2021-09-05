import { FC } from "react";
import { Route, RouteProps } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Redirect } from "react-router-dom";
import { token } from "../../reducer";
import { ROUTE_FRONT } from "../../constants";

const { SEARCH } = ROUTE_FRONT;

const NoTokenRoute: FC<RouteProps> = (props) => {

    const tk = useAppSelector(token);

    if (tk) {
        return <Redirect to={SEARCH} />
    }

    return <Route {...props} />
}

export { NoTokenRoute }