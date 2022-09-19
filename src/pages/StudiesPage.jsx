import { CardStudies } from "../components/CardStudies"
import { studies } from "../database/studies"

export const StudiesPage = () => {
    return (
        <div className="flex flex-wrap md:mx-1 xl:mx-5 my-10 px-5 pt-1 rounded-2xl md:border-l-8 md:border-l-[#7B003A]">
            <div className="w-full pb-3 xl:text-left md:text-left text-center">
                <h1 className="text-[30px]">Estudios</h1>
            </div>
            <div className="flex flex-wrap w-full sm:w-full sm:justify-center md:w-full md:justify-center">
                {studies.map((studie) => (
                    <CardStudies
                        key={studie.id}
                        title={studie.title}
                        institution={studie.institution}
                        startDate={studie.startDate}
                        endDate={studie.endDate}
                        image={studie.image}
                    />
                ))}
            </div>


        </div>
    )
}