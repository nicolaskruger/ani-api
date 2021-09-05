import { FC } from "react";
import { Route, RouteProps } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Redirect } from "react-router-dom";
import { token } from "../../reducer";
import { ROUTE_FRONT } from "../../constants";

const { LOGIN } = ROUTE_FRONT;

const TokenRoute: FC<RouteProps> = (props) => {

    const tk = useAppSelector(token);

    if (!tk) {
        return <Redirect to={LOGIN} />
    }

    return <Route {...props} />
}

export { TokenRoute }