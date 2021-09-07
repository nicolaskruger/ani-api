import { COLOR } from "../../../constants";
import { IconProps } from "../props/props.icon";

const NextIcon = (props: IconProps) => {

    const { Comment } = COLOR;

    const color = props.color as string || Comment;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill={color}><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" /></g></svg>
    )
}

export { NextIcon }