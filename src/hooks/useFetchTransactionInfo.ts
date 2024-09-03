import { useState, useEffect } from 'react';

// Типизация данных, которые мы ожидаем получить от API
export interface ApiResponse {
    transaction: Transaction;
    requisite: Requisite;
}

export interface Transaction {
    userId: number;
    status: "PENDING" | "CONFIRMED" | "FAILED";
    pricing: Pricing;
    isPartnerFee: boolean;
    redirectUrl: string;
    invoiceId: string;
    id: number;
    cancelUrl: string;
    selectedProvider: Provider;
    providerId: string;
    expiredAt: string;
}

interface Pricing {
    local: LocalPricing;
}

interface LocalPricing {
    amount: string;
    currency: string;
}

interface Provider {
    method: string;
}

interface Requisite {
    accountNumber: string;
    maskedAccountNumber: string;
    accountName: string;
    method: string;
    expDate: string | null;
    imageUrl: string | null;
    id: string;
}

// Кастомный хук для выполнения запроса
const useFetchTransactionData = (transactionId?: string, refetchInterval?: number) => {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isNeedToFetch, setIsNeedToFetch] = useState<boolean>(true);

    useEffect(() => {
        let intervalId: any;

        const fetchData = async () => {
            try {

                const response = await fetch(`http://185.18.52.13/api/transaction/${transactionId}`);

                if (!response.ok) {
                    if (response.status === 404) {
                        setError('Ресурс не найден (404)');
                    } else if (response.status === 500) {
                        setError('Внутренняя ошибка сервера (500)');
                    } else {
                        setError(`Произошла ошибка: ${response.status}`);
                    }
                    setIsNeedToFetch(false); // Останавливаем дальнейшие запросы в случае ошибки
                    return;
                }

                const result: { data: ApiResponse } = await response.json();

                if (result?.data?.transaction?.status === 'CONFIRMED' || result?.data?.transaction?.status === 'FAILED') {
                    setIsNeedToFetch(false);
                }
                setData(result?.data);
            } catch (err) {
                setError('Произошла ошибка')
            } finally {

                setLoading(false);
            }
        };

        !!transactionId && isNeedToFetch && fetchData();

        if (!!refetchInterval && !!transactionId && isNeedToFetch) {
            intervalId = setInterval(fetchData, refetchInterval);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };

    }, [transactionId, isNeedToFetch]);

    return { data, loading, error };
};

export default useFetchTransactionData;
