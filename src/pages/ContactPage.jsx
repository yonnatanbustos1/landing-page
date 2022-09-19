
import emailjs from '@emailjs/browser'
import { useState } from 'react';
import emailkey from '../../.env/emailkey';
import validator from 'validator';
import { AlertError } from '../components/AlertError';

export const ContactPage = () => {

    const [subject, setSubject] = useState("");
    const [fullName, setFullName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const [error, setError] = useState(false);
    const [messageError, setMessageError] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        if ([fullName, email, subject, message].includes('')) {
            console.error("Faltan campos")
            setMessageError("Faltan campos por diligenciar")
            setError(true)
            return
        }

        if (!validator.isEmail(email)) {
            console.error("No es un email")
            setMessageError("El email no es valido")
            setError(true)
            return
        }

        const data = {
            to_name: "Yonnatan Bustos",
            from_name: fullName,
            from_email: email,
            subject: subject,
            message: message
        }
        console.log(data)
    }


    const sendEmail = (data) => {

        emailjs.send(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, data, emailkey.PUBLIC_KEY)
            .then((response) => {
                //Presentar mensaje de exito
                console.log(response)
                alert("Mensaje enviado con exito" + response.text)
            },
                (error) => {
                    console.error(error);
                    alert("Se presento un error enviando el mensaje" + error.text);
                })
    }

    return (
        <div className="flex flex-wrap md:mx-1 xl:mx-5 my-10 px-5 pt-1 rounded-2xl md:border-l-8 md:border-l-[#7B003A]">
            <div className="w-full pb-3 xl:text-left md:text-left text-center">
                <h1 className="text-[30px]">Contacto</h1>
            </div>
            {error && (
                <div className="w-full bg-red-500">
                    <AlertError
                        message={messageError}
                    />
                </div>
            )}
            <div className="py-8 px-4 mx-auto max-w-screen-md">
                <p className="mb-8 text-left">
                    Si desea contactarme puedes enviarme un mensaje indicandome lo que requieres.
                </p>
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2">Correo: <span className="text-red-600">*</span></label>
                        <input type="text" id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5 shadow-sm-light"
                            placeholder="example@exmple.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="fullName" className="block mb-2">
                            Nombre completo:
                            <span className="text-red-600">*</span>
                        </label>
                        <input type="text" id="fullName"
                            className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5 shadow-sm-light"
                            placeholder="Ingrese su nombre completo"
                            onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2">Asunto: <span className="text-red-600">*</span></label>
                        <input type="text" id="subject"
                            className="block p-3 w-full bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                            placeholder="Déjame saber cómo puedo ayudarte"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2">Mensaje: <span className="text-red-600">*</span></label>
                        <textarea id="message" rows="6"
                            className="block p-2.5 w-full bg-gray-50 rounded-lg shadow-sm border border-gray-300 placeholder-gray-400"
                            placeholder="Ingresa tu mensaje..."
                            maxLength="250"
                            onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button type="submit"
                        className="sm:justify-center py-3 px-5 text-center text-white rounded-lg bg-[#7B003A] focus:shadow-orange-400">
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </div>
    )
}