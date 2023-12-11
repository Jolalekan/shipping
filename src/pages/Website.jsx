import { Hero } from "../components/Hero"
import { Company } from "../components/Company"
import { Carieer } from "../components/carieer"
import { Counting } from "../components/Counting"
import { WhyWork } from "../components/WhyWork"
import { Feedback } from "../components/FeedBack"
import { Partner } from "../components/Partner"
import { Work } from "../components/Work"


export const Website = () => {
    return (
        <div >
            <Hero />
            <Company />
            <Carieer />
            <Counting />
            <WhyWork />
            <Work />
            <Feedback />
            <Partner />
        </div>
    )
}