import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase-config";
const auth = getAuth(app);

export const Home = (props) => {
   
    return (
        <div>
            HOME
            <button onClick={props.handleLogout}> Sign Out </button>
        </div>
    )

}

export default Home