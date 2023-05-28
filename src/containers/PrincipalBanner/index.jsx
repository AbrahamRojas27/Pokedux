import PrincipalBannerText from "../../components/PrincipalBannerText"
import PrincipalBannerImg from "../../components/principalBannerImg"

function PrincipalBanner(){
    return(
        <section className="principal-banner">
            <PrincipalBannerImg />
            <PrincipalBannerText/>
        </section>
    )
}

export default PrincipalBanner