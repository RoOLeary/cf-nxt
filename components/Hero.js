export default function Hero(props) {
    const { heading, eyebrow, cta, ctaLink } = props;
    return (
      <div className="hero">
        <h5>{eyebrow}</h5>
        <h1>{heading}</h1>
        <p>{cta ? cta : 'No CTA yet'}</p>
      </div>
    )
  }