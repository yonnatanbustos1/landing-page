export const ProfilePage = ({ fullName, numberIdentification, birthDate, placeBirth, civilStatus }) => {

    return (
        <div className="flex flex-wrap md:mx-1 xl:mx-5 my-10 px-5 pt-1 rounded-2xl md:border-l-8 md:border-l-[#7B003A]">
            <div className="w-full pb-3 xl:text-left md:text-left text-center">
                <h1 className="text-[30px]">Perfil</h1>
            </div>
            <div className="flex w-full md:justify-center md:flex md:w-full sm:flex sm:justify-center sm:w-full max-w-full border-cyan-700">
                <form className="block w-full md:w-2/3 sm:w-1/3">
                    <div className="md:flex md:items-center mb-1">
                        <div className="md:w-1/3 ">
                            <p className="block font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Nombre:
                            </p>
                        </div>
                        <div className="md:w-2/3">
                            <p
                                className="appearance-none w-full py-2 px-4 leading-tight">{fullName}</p>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-1">
                        <div className="md:w-1/3">
                            <p className="block font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Documento de identidad:
                            </p>
                        </div>
                        <div className="md:w-2/3">
                            <p
                                className="appearance-none w-full py-2 px-4 leading-tight">{numberIdentification}</p>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-1">
                        <div className="md:w-1/3 sm:w-">
                            <p className="block font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Fecha de nacimiento:
                            </p>
                        </div>
                        <div className="md:w-2/3">
                            <p
                                className="appearance-none w-full py-2 px-4 leading-tight">{birthDate}</p>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-1">
                        <div className="md:w-1/3 sm:w-">
                            <p className="block font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Lugar de nacimiento:
                            </p>
                        </div>
                        <div className="md:w-2/3">
                            <p
                                className="appearance-none w-full py-2 px-4 leading-tight">{placeBirth}</p>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-1">
                        <div className="md:w-1/3 sm:w-">
                            <p className="block font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Estado civil:
                            </p>
                        </div>
                        <div className="md:w-2/3">
                            <p
                                className="appearance-none w-full py-2 px-4 leading-tight">{civilStatus}</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}