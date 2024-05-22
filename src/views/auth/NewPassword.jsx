import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import clientAxios from "../../config/clientAxios";
export default function NewPassword() {
    const [vtoken, setVtoken] = useState(false);
    const [message, setMessage] = useState("");

    const { token } = useParams();

    useEffect(() => {
        const validateToken = async () => {
            try {
                await clientAxios(`/api/auth/forget-password/${token}`);
                setVtoken(true);
            } catch (error) {
                setMessage(error.response.data.msg);
            }
        };
        validateToken();
    }, []);
    console.log(vtoken);
    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl text-center capitalize">
                Restablece tu Contraseña <br></br>
                <span className="text-pink-700">Haciendola</span>
            </h1>
            <p className="text-center font-semibold mt-5 text-2xl">{message}</p>
            {vtoken && (
                <form className="my-10 bg-white shadow rounded-lg px-10 py-8">
                    <div className="my-5">
                        <label
                            htmlFor="password"
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Nueva Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            value=""
                            placeholder="Escribe tu nueva contaseña"
                            className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                        />
                    </div>
                    <div className="my-5">
                        <label
                            htmlFor="password2"
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Repetir Nueva Contraseña
                        </label>
                        <input
                            id="password2"
                            type="password"
                            value=""
                            placeholder="Repite tu nueva contaseña"
                            className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Guardar nueva contraseña"
                        className="bg-sky-700 w-full py-3 text-white font-bold rounded uppercase mb-5 hover:cursor-pointer hover:bg-sky-900 transition-colors"
                    />
                </form>
            )}
            <Link
                className="block bg-white p-5 font-semibold text-center my-5 text-slate-500 uppercase"
                to="/"
            >
                Inicia Sesión
            </Link>
        </>
    );
}
