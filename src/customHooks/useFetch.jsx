import { useState } from 'react';
import axios from 'axios';

export const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            setError(null);
            return response.data;
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, fetchData };
};
