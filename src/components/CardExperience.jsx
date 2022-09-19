export const CardExperience = ({ name, arrayImages }) => {
    return (
        <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full mb-4 bg-gray-50 rounded-2xl">
            <div className="grid pl-5 pr-5 md:text-left xl:text-left text-center">
                <h1 className="text-[20px] mt-3">{name}</h1>
            </div>
            <div className="flex">
                <div className="flex md:justify-around sm:justify-around py-8">
                    {arrayImages.map((image) => (
                        <div key={image.id} className="flex md:w-1/2 sm:w-1/6">
                            <img className="h-32 w-32" src={image.url} alt={image.name}></img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}