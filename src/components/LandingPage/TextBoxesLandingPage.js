import "./TextBoxesLandingPage.css"



export default function TextBoxesLandingPage(props){

    const style = {width:(props.numberOfBoxes * 100)+"vw", overflowX : props.overflowX, height:"50vh", }

    return (
        <section className = "text-boxes-landing-page" style={style}>

        {props.children}

        </section>
    )
}