import { Card } from "../components/Card"
import { briefcases } from "../database/briefcases"

export const BriefcasePage = () => {
    return (
        <div className="flex flex-wrap md:mx-1 xl:mx-5 my-10 px-5 pt-1 rounded-2xl md:border-l-8 md:border-l-[#7B003A]">
            <div className="w-full pb-3 xl:text-left md:text-left text-center">
                <h1 className="text-[30px]">Portafolio</h1>
            </div>
            <div className="flex flex-wrap w-full md:justify-center md:flex md:flex-wrap sm:w-full">
                {briefcases.map((briefcase) => (
                    <Card
                        key={briefcase.id}
                        image={briefcase.image}
                        title={briefcase.title}
                        description={briefcase.description}
                        url={briefcase.url}
                    />
                ))}
            </div>
        </div>
    )
}