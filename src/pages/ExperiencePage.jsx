import { CardExperience } from "../components/CardExperience"
import { experiences } from "../database/experiences"

export const ExperiencePage = () => {
    return (
        <div className="flex flex-wrap md:mx-1 xl:mx-5 my-10 px-5 pt-1 rounded-2xl md:border-l-8 md:border-l-[#7B003A]">
            <div className="w-full pb-3 xl:text-left md:text-left text-center">
                <h1 className="text-[30px]">Experiencia</h1>
            </div>
            <div className="flex flex-wrap w-full justify-center sm:mx-0 md:mx-20">
                {experiences.map((experience) => (
                    <CardExperience
                        key={experience.id}
                        name={experience.name}
                        arrayImages={experience.images}
                    />
                ))}
            </div>
        </div>
    )
}