import { googleLogout } from "@react-oauth/google";

const clientId = '710847608373-v4as3aack4t4pdsfamo3beqj610to91i.apps.googleusercontent.com';


export const Logout = () => {
    const handleLogout = () => {
        googleLogout(clientId);
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
