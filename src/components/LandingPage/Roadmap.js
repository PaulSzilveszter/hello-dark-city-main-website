import "./Roadmap.css";
export default function Roadmap(props){
    return(
        <section id = "roadmap">
    <header id = "roadmap-title"><h1 >ROADMAP</h1></header>
   {/*  <article id ="roadmap-stage-1" class="stage-description"><h2>Stage <span>1</span>:</h2>
    <p> text text texttext text texttext text texttext text texttext text text</p> 
    </article>
    <article id ="roadmap-stage-2" class="stage-description"><h2>Stage <span>2</span>:</h2>
    <p> text text texttext text texttext text texttext text texttext text text</p> </article>
    <article id ="roadmap-stage-3" class="stage-description"><h2>Stage <span>3</span>:</h2>
    <p> text text texttext text texttext text texttext text texttext text text</p>  </article>
    <article id ="roadmap-stage-4" class="stage-description"><h2>Stage <span>4</span>:</h2>
    <p> text text texttext text texttext text texttext text texttext text text</p>  </article> */}


    <div id = "roadmap-stage-container">
    <article className="roadmap-stage" id="roadmap-stage1">
      <div className="roadmap-stage-text-box">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT </div>
    </article>

    <article className="roadmap-stage" id="roadmap-stage2">
    <div className="roadmap-stage-text-box">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT </div>
    </article>

    <article className="roadmap-stage" id="roadmap-stage3">
    <div className="roadmap-stage-text-box">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT </div>
    </article>

    <article className="roadmap-stage" id="roadmap-stage4">
    <div className="roadmap-stage-text-box">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT </div>
    </article>
    </div>

  </section>
    )
}