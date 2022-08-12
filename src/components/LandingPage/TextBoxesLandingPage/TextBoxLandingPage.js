import "./TextBoxLandingPage.css"

export default function TextBoxLandingPage(props){

    return (<div className="text-box-landing-page-wrapper"><article className="text-box-landing-page">
            {props.children}
    </article></div>)

}