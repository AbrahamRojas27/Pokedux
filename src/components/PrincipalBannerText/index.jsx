import img from '/assets/pokemon-5101360_1280 (1).jpg'
import img2 from '/assets/pokemon-5975183_1280.jpg'

function PrincipalBannerText(){
    return(
        <article className='principal-banner-text'>
            <div className='principal-banner-text-container'>
                    <p className="principal-banner-text-content">
                        Catch em! Collect your strongest and rarest Pokemon
                    </p>    
            </div>


            <div className='principal-banner-text-img-container'>
                <figure className="principal-banner-text-img">
                    <img src={img2} alt="" />
                </figure>
                <figure className="principal-banner-text-img">
                    <img src={img} alt="" />
                </figure>
            </div>
        </article>
    )
}

export default PrincipalBannerText