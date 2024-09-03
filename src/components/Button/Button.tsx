import { ButtonHTMLAttributes, FC } from "react";
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean; // Флаг для отображения состояния загрузки
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button className={styles.button} {...props}>{children}</button>
    )
}
