import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "sonner";

export const useUser = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});

    const fetchUser = useCallback(async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/profile`);
            if (res.status === 200) {
                setUser(res.data.Response.user);
            } else if (res.status === 401) {
                toast.error("You Are Not Logged In? Please Sign In.");
            }
        } catch {
            toast.error("Error While Fetching User Data");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return { user, loading, refetch: fetchUser };
};