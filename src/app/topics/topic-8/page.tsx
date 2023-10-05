export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex">
      <div className="w-3/5">
        <h1 className="text-center mb-4 mt-4">Topic 1: Introduction to Software Engineering Ethics</h1>
        <p>Objective:</p>
        <br></br>
        <p>- Begin with...</p>
        <br></br>
        <h2>SUBTOPICS</h2>
        <p>Significane of Ethics:...</p>
        <br></br>
        <p>Historical Cases:...</p>
        <br></br>
      </div>
      <div className="w-2/5">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfCCfX4bBvie969_WXA2O9IRduG8QjeeAjd1EMjHER_fV8mow/viewform?embedded=true" className="w-full" height="2091">Loading…</iframe>      
      </div>
    </div>
    
  )
}