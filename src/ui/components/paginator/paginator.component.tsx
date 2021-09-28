import { FC } from "react"
import { NextIcon } from "../../../assets/img/next/next.icon";
import { PrevIcon } from "../../../assets/img/prev/prev.icon";
import { PaginatorButton, PaginatorDiv, PaginatorSpan } from "./paginator.styled";

type PaginatorComponentProps = {
    page: number,
    handlePrev: () => void,
    handleNext: () => void
}

const PaginatorComponent: FC<PaginatorComponentProps> = (props) => {

    const { page, handlePrev, handleNext } = props;

    return (
        <PaginatorDiv>
            <PaginatorButton onClick={handlePrev}>
                <PrevIcon />
            </PaginatorButton>
            <PaginatorSpan>
                {page}
            </PaginatorSpan>
            <PaginatorButton onClick={handleNext}>
                <NextIcon />
            </PaginatorButton>
        </PaginatorDiv>

    )
}

export { PaginatorComponent }