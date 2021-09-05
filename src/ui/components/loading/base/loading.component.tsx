import { LoadingDiv, LoadingLoader } from "./loading.style";

type LoadingProps = {
    loading: boolean;
}

const LoadinComponent = (props: LoadingProps) => {

    const { loading } = props;

    return (
        <LoadingDiv>
            {loading && <LoadingLoader />}
        </LoadingDiv>
    )
}

export { LoadinComponent }