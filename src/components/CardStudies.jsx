export const CardStudies = ({ title, institution, startDate, endDate, image }) => {
    return (
        <div className="flex flex-wrap mx-4 w-full text-center sm:w-full md:w-1/2 xl:w-1/4">
            <div className="py-4 px-12 mb-5 w-full bg-gray-50 duration-300 rounded-2xl hover:-translate-y-2 hover:shadow-xl">
                <div className="inline-block text-gray-900 rounded-full p-5 h-40 w-40">
                    <img className="rounded-full" src={image} />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{title}</h3>
                <p>{institution}</p>
                <p>{startDate}{' '}-{' '}{endDate}</p>
            </div>
        </div>
    )
}