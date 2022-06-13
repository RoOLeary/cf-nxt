
export default function Faq({ content }) {
    
    const { ctaLabel, ctaLink, text, hasCta } = content;

    console.log(hasCta);

    return (
        <section className="b-faq c-section js-faq">
            <div className="o-wrapper">
                <div className="o-grid o-grid--gap-xxl l:o-grid--reverse">
                    <div className="o-grid__col l:o-grid__col--span-4">
                        <div className="c-section__sticky">
                                <h2 className="c-section__heading">{ctaLabel}</h2>
                                <div className="c-formatted c-section__text" dangerouslySetInnerHTML={{ __html: text}} />
                               
                                <div className="c-section__cta">
                                    <a className="c-button c-button--primary" href={ctaLink}></a>
                                </div>
                        </div>
                    </div>
                    <div className="o-grid__col l:o-grid__col--span-8">
                        <ul className="b-faq__list">
                        
                                <li className="b-faq__listItem">
                                    <div className="b-faq__question js-faqQuestion">Title</div>
                                    <div className="b-faq__answer">
                                        <div className="b-faq__answerInner c-formatted js-faqAnswerInner">
                                            Answer
                                        </div>
                                    </div>
                                </li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
  }






