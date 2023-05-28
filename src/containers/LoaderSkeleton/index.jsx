import LoaderCard from "../../components/LoaderCard"

function LoaderSkeleton(){
    return(
        <section className="loader-container">
            <LoaderCard/>
            <LoaderCard/>
            <LoaderCard/>
            <LoaderCard/>
            <LoaderCard/>
            <LoaderCard/>
            <LoaderCard/>
            <LoaderCard/>
        </section>
    )
}

export default LoaderSkeleton