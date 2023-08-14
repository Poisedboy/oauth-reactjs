import { useGoogleLogin } from "@react-oauth/google";

// const clientId = '710847608373-v4as3aack4t4pdsfamo3beqj610to91i.apps.googleusercontent.com';

export const Login = () => {

    const handleLogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse)
    });

    return (
        <div>
            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}