
import IconCopy from '../../assets/icons/IconCopy';
import styles from './DataField.module.css';
import clsx from 'clsx';
// import { ReactComponent as IconCopy } from '/icon-copy.svg';
// import MyIcon from './icon-copy.svg?react';


interface DataFieldProps {
    text: string,
    onClick?: () => void;
    isCopied?: boolean;
}
export const DataField = ({
    text,
    onClick,
    isCopied
}: DataFieldProps) => {

    return (
        <div className={clsx(styles.dataField,
            {
                [styles.clickable]: !![onClick],
                [styles.copied]: !!isCopied
            }
        )
        }
            onClick={onClick && onClick}>

            <span>
                {text}
            </span>

            {!!onClick &&
                <button className={styles.copyButton}>
                    {/* <img src={IconCopy} alt="" className={styles.copyIcon} /> */}
                    {/* <MyIcon /> */}
                    <IconCopy className={clsx(styles.iconCopy, { [styles.isCopied]: !!isCopied })} />
                </button>
            }
        </div>
    )
}
