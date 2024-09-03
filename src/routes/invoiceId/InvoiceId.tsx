import { Timer } from '../../components/Timer/Timer'
import logoImg from '/logo.png'
import styles from './InvoiceId.module.css';
import { Button } from '../../components/Button/Button';
import { DataField } from '../../components/DataField/DataField';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { ApiResponse } from '../../hooks/useFetchTransactionInfo';
import { Card } from '../../components/Card/Card';

export const InvoiceId = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const data = useOutletContext<ApiResponse>()

    const { copyToClipboard } = useCopyToClipboard();

    const getName = () => {
        switch (data?.requisite?.method.toLowerCase()) {
            case 'any_rub_bank':
                return 'Любой'
            case 'sberbank':
                return 'Сбербанк'
            case 'sbp':
                return 'СБП'
            case 'tinkoff':
                return 'Т-Банк'
            default:
                return 'Любой'
        }
    }

    const handleCopy = () => {
        copyToClipboard(data?.requisite?.accountNumber).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    }

    return (
        <div className={styles.invoiceId}>
            <div className={styles.header}>
                <img src={logoImg} alt="platega.io" className={styles.logo} />
                <Timer />
            </div>


            <p className={styles.title}>Выполните все действия</p>

            <div className={styles.card}>
                <DataField text={data?.requisite?.maskedAccountNumber} onClick={handleCopy} isCopied={isCopied} />
            </div>

            <div className={styles.bank}>
                <DataField text={getName()} />
            </div>

            <div className={styles.bank}>
                <DataField text={`${data?.transaction?.pricing?.local?.amount} ${data?.transaction?.pricing?.local?.currency}`} />
            </div>

            <Card />

            <Link to={'status'}>
                <Button>
                    Я оплатил
                </Button>
            </Link>
        </div>
    )
}

