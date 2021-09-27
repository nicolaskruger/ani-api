import { FC } from "react";
import { useAppSelector } from "../../../../../../../app/hooks";
import { loadingEpSelect } from "../../../../../../../reducer";
import { LoadinComponent } from "../../../../../../components";

const LoadingEp: FC = () => {
    const loading = useAppSelector(loadingEpSelect);
    return (
        <LoadinComponent loading={loading} />
    );
}

export {
    LoadingEp
}