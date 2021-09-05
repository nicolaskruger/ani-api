import { Me } from "../../../dto";
import { myAniApi } from "../axios"
import { PopUpState } from "../token.slicer";

export type MeTokenDto = {
    token: string,
    me?: Me,
    pop_up: PopUpState
};

const setTokenAsync = async (token: string): Promise<MeTokenDto> => {
    const { me } = myAniApi(token);

    try {
        const resposne = await me();
        return {
            token,
            me: resposne,
            pop_up: {
                message: "Ok !!!",
                show: true,
                success: true
            }
        }
    } catch (error) {
        return {
            token,
            pop_up: {
                message: "Fail ;(",
                show: true,
                success: false
            }
        }
    }


}

export { setTokenAsync }