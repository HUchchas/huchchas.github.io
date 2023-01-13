export default function Projects() {
  function Card(heading, text) {
    return (
      <div className="items-center bg-slate-300 flex flex-col rounded-xl shadow-2xl w-full lg:w-[35rem] h-[15rem] lg:h-[35rem]">
        <h1>
          {heading}
        </h1>

        {text}

      </div>
    )
  }

  const aterlierWebstoreText = <p>
    Designed an interactive product overview section with image gallery, style, size selection, and conditional rendering features<br></br>
    Integrated a third-party API catalog to display hundreds of product stock-keeping units <br></br>
    Optimized Lighthouse metrics from 67 to 90 utilizing webpack compression reducing blocking time <br></br>
  </p>

  return (
    <div className="h-[100vh] flex flex-col">
      <div className="text-white">
        Projects I worked on
      </div>
      <div className="flex flex-col lg:flex-row bg-slate-700 lg:justify-between">
        {Card("Atelier Webstore", aterlierWebstoreText)}
        {Card("blah", "ipson")}
      </div>
    </div>

  )
}