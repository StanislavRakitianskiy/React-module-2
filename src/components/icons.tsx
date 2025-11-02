import { AiOutlineAliwangwang } from "react-icons/ai";
import css from '../css/icons.module.css';

interface IconsAiProps {
    name: string;
}

export default function IconsAi({name}: IconsAiProps) {
    return (
        <div>
            <AiOutlineAliwangwang className={css.icons} size={96}/>{name}
        </div>
    )
}