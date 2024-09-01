

import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { decodeBase64 } from "../hashing.func";
import { handleSignInSignUps } from "@/lib/actions/client-actions/create.client.action";
const fetchSignInSignUps = async () => {
    const response = await handleSignInSignUps();
    return decodeBase64(response);
};

export const useUserVerification = () => {
    const { user } = useUser();

    const { data: userData, error, isLoading } = useQuery({
        queryKey: ['signInSignUp'],
        queryFn: fetchSignInSignUps,
        enabled: !!user, // Only run query if user is logged in
    });

    return { user, userData, error, isLoading };
};//user, userData, error, isLoading 