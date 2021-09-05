import { PopUpComponent } from "../.."
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { hide, popUp } from "../../../../reducer"

const PopUPComponentConnect = () => {

    const info = useAppSelector(popUp);

    const dispath = useAppDispatch();

    if (info.show) {
        setTimeout(() => {
            dispath(hide())
        }, 2000)
    }

    return (
        <PopUpComponent {...info} />
    )
}

export { PopUPComponentConnect };