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
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdBber-U74GlyVnsdxZ2h5Iy8l-sJQjROnPnB8KmARGrOm1hQ/viewform?embedded=true" className="w-full" height="7595">Loading…</iframe>
      </div>
    </div>
    
  )
}