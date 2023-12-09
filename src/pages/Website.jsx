import { Hero } from "../components/Hero"
import { Company } from "../components/Company"
import { Carieer } from "../components/carieer"
import { Counting } from "../components/Counting"
import { OurBest } from "../components/OurBest"
import { WhyWork } from "../components/WhyWork"
import { Feedback } from "../components/FeedBack"
import { Partner } from "../components/Partner"
import { Heor } from "../components/Heor"
import { Work } from "../components/Work"


export const Website = () => {
    return (
        <div >
            {/* <Heor /> */}
            <Hero />
            <Company />
            <Carieer />
            <Counting />
            <OurBest />
            <WhyWork />
            <Work />
            <Feedback />
            <Partner />




        </div>
    )
}