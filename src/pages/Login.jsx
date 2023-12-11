import { useState } from "react"
import { apiLogin } from "../api/api"
import { useNavigate } from "react-router-dom"
import useAuth from "../UseAuth"

const Login = () => {
    const { setAuth } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const userData = await apiLogin(email, password);

            const { token, ...userInfo } = userData

            localStorage.setItem("auth", JSON.stringify(userInfo))
            localStorage.setItem("token", token)

            setAuth(userInfo)

            navigate("/")
            setEmail("");
            setPassword("");
            setError("");
        } catch (error) {
            console.error("Error logging in", error.message);
            setError("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="my-6 flex gap-6 flex-wrap items-center justify-center md:justify-between">
            <div className="shrink-1 basis-auto mx-6 mb-6 md:w-5/12">
                <img src="./image3.jpg"
                    className="rounded-2xl"
                    alt="" />
            </div>

            <div className="mb-12 md:w-5/12 ">
                <div className="flex justify-center items-center md:justify-start">
                    <h2 className="font-medium text-xl mr-5 text-gray-700">Sign in</h2>
                    <button className="bg-blue-400 leading-normal w-9 h-9 rounded-full text-white shadow-[0_4px_6px_-4px_blue] hover:bg-blue-300 transition duration-200 ease-linear mr-5">f</button>
                    <button className="bg-blue-400 text-white h-9 w-9 rounded-full hover:bg-blue-300 transition duration-200 ease-linear shadow-[0_4px_4px_-4px_blue]">t</button>
                </div>
                <div className="my-4 flex items-center before:-mt-0.5 after:-mt-0.5 before:flex-1 before:border-t before:border-neutral-300 affter:flex-1 after:border-t after:border-neutral-300">
                    Or
                </div>
                <div className="p-5">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div >
                            <h2 className="mb-5 text-xl">Email</h2>
                            <input type="email"
                                placeholder="email"
                                className="p-5 w-full rounded-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <h2 className="mb-5 text-xl">Password</h2>
                            <input type="password"
                                placeholder="password"
                                className="p-5 w-full rounded-md"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="self-center w-48 rounded-xl text-xl text-gray-200 p-3 bg-gray-800 disabled:opacity-90 hover:opacity-90" disabled={loading}>{loading ? "Submitting" : "Submit"}</button>
                        {error && <p className="text-red-900">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login