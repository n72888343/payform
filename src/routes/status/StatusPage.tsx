import { useEffect, useState } from 'react';
import styles from './StatusPage.module.css';
import { Loader } from '../../components/Loader/Loader';
import clsx from 'clsx';
import { StatusIcon } from '../../components/StatusIcon/StatusIcon';
import { CopyButton } from '../../components/CopyButton/CopyButton';
import { Button } from '../../components/Button/Button';
import useFetchTransactionData, { Transaction } from '../../hooks/useFetchTransactionInfo';
import { useParams } from 'react-router-dom';

export const StatusPage = ({ state }: { state?: Transaction['status'] }) => {
  const { id } = useParams();
  const { data, loading, error } = useFetchTransactionData(id ?? '', 5000)
  const status = data?.transaction?.status;
  // const [status, setStatus] = useState<Transaction['status']>(data?.transaction?.status ?? 'PENDING');

  const getContent = () => {
    switch (status) {
      case 'PENDING': {
        return (
          <>
            <Loader />
            <p className={clsx(styles.title, styles.loaderTitle)}>Ожидайте</p>
          </>
        )
      }

      default: {
        return (
          <>
            <StatusIcon type={status ?? 'FAILED'} />

            <p className={clsx(styles.title, styles.condition)}>{status === 'CONFIRMED' ? 'Успешно' : 'Отказ'}</p>
            <CopyButton text={id ?? ''} />
            <Button onClick={() => status === 'CONFIRMED' ? window.open(data?.transaction?.redirectUrl ?? document.referrer, '_self') : window.open('https://t.me/platega_manager', '_blank')}>
              {status === 'CONFIRMED' ? 'Вернуться в магазин' : 'Написать в поддержку'}
            </Button>
          </>
        )
      }
    }
  }

  return (
    <>

      <div className={styles.statusPage}>
        <div className={styles.statusPageContent}>
          {loading ? <Loader /> : getContent()}
        </div>

      </div >
    </>
  )
}
