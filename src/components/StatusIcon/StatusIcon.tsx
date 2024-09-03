import styles from './StatusIcon.module.css';

import IconSuccess from '/icon-success.svg';
import IconError from '/icon-error.svg';
import clsx from 'clsx';
import { Transaction } from '../../hooks/useFetchTransactionInfo';

export const StatusIcon = ({ type }: { type: Transaction['status'] }) => {
    return (
        <div className={clsx(styles.statusIcon, styles[type])}>
            <img className={styles.icon} src={type === 'FAILED' ? IconError : IconSuccess} alt="icon" />
        </div>
    )
}
