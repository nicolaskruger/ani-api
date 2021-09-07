import { COLOR } from "../../../constants"
import { IconProps } from "../props/props.icon"


const PrevIcon = (props: IconProps) => {

    const { Comment } = COLOR;

    const color = props.color as string || Comment;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={color}><path d="M0 0h24v24H0V0z" fill="none" opacity=".87" /><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" /></svg>
    )
}

export { PrevIcon }