import Navbar from "../components/Navbar"

export default function Landing(){
    return (
        <>
        <Navbar/>
        {/* stuff on the landing page */}
        <div className="italic"> hello</div>  {/*check*/}
        
        <div> Hello ! Welcome to the new world of learning. </div> {/*Greeting*/}
        <section> 
            This is a platform which will help you to open new ways of learning of Enviourmental Studies. {/*About Section*/}
        </section>
        <section>
            Start Yout Journey by Clicking the Button { /*Add some features accordingly*/}
            <button> Join Now! </button>
        </section>

        </>
    )
}
