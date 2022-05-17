export default function Hero({ heading, eyebrow, cta, ctaLink }) {
    
  return (
      <div className="hero">
        <h5>{eyebrow}</h5>
        <h1>{heading}</h1>
        <p>{cta ? cta : 'No CTA yet'}</p>
      </div>
    )
  }