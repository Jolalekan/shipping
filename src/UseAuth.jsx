import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
const UseAuth = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error("UseAuth must be used within an AuthProvider");
    }
    return authContext;
};
export default UseAuth;