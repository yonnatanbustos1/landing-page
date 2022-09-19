import { useState } from "react"

export const Card = ({ image, title, description, url, repository }) => {

    const [fontProject, setFontProject] = useState(false);

    return (
        <div className="w-full md:w-1/3 lg:w-1/3 my-3 mx-3 flex flex-col border rounded-2xl overflow-hidden bg-gray-50">
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4">
                <div className="flex flex-col border-b sm:border-b-none items-center sm:h-full sm:justify-center grayscale hover:grayscale-0">
                    <img className="object-fill object-center w-full h-24" src={image} />
                </div>
                <div className="flex flex-col sm:border-l pt-4 col-span-3">
                    <div className="flex flex-col space-y-4 sm:space-y-2 pb-4 px-4 text-gray-600">
                        <div className="flex flex-row text-sm">
                            <div className="flex flex-row">
                                <p className="mr-3 flex justify-between">
                                    <span className="font-bold mr-2">{title}</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row text-sm">
                            <div className="flex flex-row">
                                <p className="mr-3 flex justify-between">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex mr-3 mb-3 justify-around md:justify-end xl:justify-end">
                        <a href={repository}
                            target="_blank"
                            className="bg-red-600 rounded-full px-5 py-1 shadow-xl hover:bg-red-800">
                            Fuente
                        </a>
                        <a href={url}
                            target="_blank"
                            className="bg-red-600 rounded-full px-5 py-1 shadow-xl hover:bg-red-800">
                            Ver mas
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}