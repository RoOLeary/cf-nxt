const Stats = ({ content, statistics }) => {
console.log(content);
const showHorizontal = true;
const image = 'https://placedog.net/500/280';

  const ShowHorizontalComponent = () => (
    <div className="o-wrapper">
      <header className="c-bodyBlock__header">
        <h6 className="c-bodyBlock__subheading">SubTitle</h6>
        <br />
        <h2 className="c-bodyBlock__heading">TITLE</h2>
      </header>
      <br />
      <ul className="c-bodyTextVisual__stats">
          {/* {stats.map((st, i) => {
            return(
              <li className="c-bodyTextVisual__stat" >
                 <div className="c-bodyTextVisual__statValue">
                   Over 9000
                 </div>
                 <div className="c-bodyTextVisual__statMetric">
                   Things
                 </div>
               </li>
            )
          })}   */}
        </ul>
    </div>
  );

  const ShowVerticalComponent = () => (
    <>
      <figure className="c-bodyTextVisual__visual js-parallax o-parallax">
        <img
          alt={image.title}
          className="c-bodyTextVisual__visualImage js-parallaxLayer o-parallax__content js-lazy"
          data-src={image.url}
          src={image.url}
          style={{ opacity: 1 }}
        />

        <noscript>
          <img
            alt=""
            className="c-bodyTextVisual__visualImage o-parallax__content"
            src={image.url}
          />
        </noscript>
      </figure>
      <div className="o-wrapper">
        <div className="c-bodyTextVisual__text">
          <div className="c-bodyBlock c-bodyTextVisual__textInner">
            <div className="o-wrapper">
              <header className="c-bodyBlock__header">
                <h6 className="c-bodyBlock__subheading">SubTitle</h6>
                <br />
                <h2 className="c-bodyBlock__heading">TITLE</h2>

              </header>
            </div>
            <br />
            <div className="c-bodyTextVisual__body">
              <ul className="c-bodyTextVisual__stats">
               
              {/* {stats.map((st, i) => {
                return(
                  <li className="c-bodyTextVisual__stat" >
                    <div className="c-bodyTextVisual__statValue">
                      Over 9000
                    </div>
                    <div className="c-bodyTextVisual__statMetric">
                      Things
                    </div>
                  </li>
                )
              })}   */}

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {showHorizontal ? <ShowHorizontalComponent /> : <ShowVerticalComponent />}
    </>
  );
};

export default Stats;