export default function Hero({ content }) {
  let { eyebrow, heading, cta } = content; 
  return (
      <div className="hero">
        <h5>{eyebrow}</h5>
        <h1>{heading}</h1>
        <p>{cta ? cta : 'No CTA yet'}</p>
      </div>
    )
  }