//https://firebasestorage.googleapis.com/v0/b/yonnatanbustos-landing-page.appspot.com/o/assets%2Ffoto-perfil.png?alt=media&token=a0a79d5c-250d-4af1-9a82-ae08b43d7b0b



export const HomePage = () => {
    return (
        <div className="flex mt-16 flex-wrap md:mx-1 xl:mx-5 my-10 px-5 pt-1 rounded-2xl md:border-l-8 md:border-l-[#7B003A]">
            <div className="flex w-full md:w-1/4 justify-center py-8">
                <img
                    className="w-64 h-64 rounded-full bg-white object-cover"
                    src="foto-perfil.png" />
            </div>
            <div className="w-full md:w-3/4">
                <p className="text-[40px] font-bold">Hola Soy Yonnatan Bustos,
                </p>
                <p className="text-[40px]">estudiante de Ingeniería de Sistemas y Computación.</p>
                <p className="text-[40px]">Conoce un poco mas de mi...😀</p>
            </div>
        </div>
    )
}