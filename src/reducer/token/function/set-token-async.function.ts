import { Me } from "../../../dto";
import { myAniApi } from "../axios"

export type MeTokenDto = {
    token: string,
    me?: Me
};

const setTokenAsync = async (token: string): Promise<MeTokenDto> => {
    const { me } = myAniApi(token);

    try {
        const resposne = await me();
        return {
            token,
            me: resposne
        }
    } catch (error) {
        console.log(error);
        return {
            token,
        }
    }


}

export { setTokenAsync }