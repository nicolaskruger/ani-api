import { useAppSelector } from "../../../../app/hooks";
import { loading } from "../../../../reducer";
import { LoadinComponent } from "../base/loading.component";

const LoadingConnectComponent = () => {

    const load = useAppSelector(loading)

    return (
        <LoadinComponent loading={load} />
    );
}

export { LoadingConnectComponent }