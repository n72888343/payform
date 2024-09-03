
import clsx from 'clsx';
import { useState } from 'react';
import IconCopy from '../../assets/icons/IconCopy';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import styles from './CopyButton.module.css';
export const CopyButton = ({ text }: { text: string }) => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const { copyToClipboard } = useCopyToClipboard();

    const handleCopy = () => {
        copyToClipboard(text).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    }

    return (
        <div className={styles.copyButton} onClick={handleCopy}>
            {/* <img src={IconCopyBlue} alt="copy icon" className={styles.iconCopy} /> */}
            <IconCopy className={clsx(styles.iconCopy, { [styles.isCopied]: isCopied })} />

            <span className={isCopied ? styles.copied : ''}>Копировать ID платежа</span>
        </div>
    )
}
