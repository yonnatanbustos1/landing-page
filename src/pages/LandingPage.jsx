import { Footer } from "../components/Footer"
import { NavBar } from "../components/Navbar"
import { BriefcasePage } from "./BriefcasePage"
import { ContactPage } from "./Contactpage"
import { ExperiencePage } from "./ExperiencePage"
import { HomePage } from "./HomePage"
import { ProfilePage } from "./ProfilePage"
import { StudiesPage } from "./StudiesPage"
import { profile } from "../database/profile"

export const LandingPage = () => {

    return (
        <div className="flex flex-wrap">
            <NavBar></NavBar>
            <div className="w-full bg-gradient-to-r from-blue-100 via-[#A3C5E9] to-[#95BFE5]">
                <section id="home">
                    <HomePage />
                </section>
                <section id="profile">
                    <ProfilePage
                        fullName={profile.fullName}
                        numberIdentification={profile.numberIdentification}
                        birthDate={profile.birthDate}
                        placeBirth={profile.placeBirth}
                        civilStatus={profile.civilStatus}
                        email={profile.email}
                    />
                </section>
                <section id="studies">
                    <StudiesPage />
                </section>
                <section id="experience">
                    <ExperiencePage />
                </section>
                <section id="briefcase">
                    <BriefcasePage />
                </section>
                <section id="contact">
                    <ContactPage />
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}