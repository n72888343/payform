import { Outlet, useNavigate, useParams } from 'react-router-dom';
import styles from './root.module.css';
import clsx from 'clsx';
import useFetchTransactionData from '../../hooks/useFetchTransactionInfo';
import { Loader } from '../../components/Loader/Loader';
import { useEffect } from 'react';
export const Root = () => {
  const { id } = useParams()
  const { data, loading, error } = useFetchTransactionData(id ?? '', 10000)
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.transaction?.status === 'CONFIRMED' || data?.transaction?.status === 'FAILED' || !!error) {
      return navigate('status')
    }
  }, [data, error])

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>

          <div className={clsx(styles.bgCircles, styles.left)}></div>
          <div className={clsx(styles.bgCircles, styles.top)}></div>
          <div className={clsx(styles.bgCircles, styles.bottom)}></div>

          <div className={styles.content}>
            {loading ? <Loader /> : <Outlet context={data} />}
          </div>
        </div>
      </div >
    </>
  )
}
