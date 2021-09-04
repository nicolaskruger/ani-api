import { FC } from "react";
import { Route, RouteProps } from "react-router-dom";

const PublicRoute: FC<RouteProps> = (props) => {
    return <Route {...props} />
}

export { PublicRoute }