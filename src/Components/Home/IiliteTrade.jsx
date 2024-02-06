import React, { useEffect, useRef, useState } from "react";

function IiliteTrade() {
  const [isVisible, setIsVisible] = useState(false);

  const h1Ref = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    }, options);

    if (h1Ref.current && cardsRef.current) {
      observer.observe(h1Ref.current);
      observer.observe(cardsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const h1Element = h1Ref.current;
    const cardsElement = cardsRef.current;

    if (isVisible) {
      h1Element.style.transform = "translateY(0px)";
      cardsElement.style.transform = "translateY(0px)";
    } else {
      h1Element.style.transform = "translateY(5em)";
      cardsElement.style.transform = "translateY(5em)";
    }
  }, [isVisible]);

  return (
    <div id="IiliteTrade">
      <div>
        <h1 ref={h1Ref}>Illicit Trade Overview </h1>
        <h3>What is Counterfeit? </h3>
        <p>
          A product designed, dressed, branded and/or packaged in a manner
          intended to be distinguishable from that of the genuine original and
          not manufactured and/or distributed with the authorization of the
          Brand Owners.
        </p>
        <div className="lilite-cards" ref={cardsRef}>
          <div>
            In the global environment, the sale of counterfeit goods remains a
            significant issue plagues oblivious consumers and brand owners in
            all industries. In 2022 , the total estimated value of counterfeit
            and pirated goods including digital piracy is projected to reach an
            astounding $1.90 – $2.81 trillion.
          </div>
          <div>
            An exercise to illustrate how the size of domestic production and
            consumption of counterfeit and pirated goods may change over time,
            recent data and forecast rates of growth in global trade and GDP,
            projected growth in the rate of counterfeiting. By this approach,
            the value of domestically produced and consumed counterfeit and
            pirated goods is expected to range from $524 - $959 Billion by 2022.
            By combining two different approaches to project digital piracy into
            the future wherein the first approach assumes that digital piracy
            will maintain its share of total counterfeiting and piracy over time
            and the second approach assumes that digital piracy grows
            proportionally to global IP traffic, it is expected that the value
            of digital piracy in movies, music and software could reach from
            $384 - $856 Billion by 2022.
          </div>
          <div>
            The impact of counterfeiting is growing exponentially mostly due the
            proliferation of counterfeiting on the Internet. Criminals prefer to
            sell counterfeits on the Internet for many reasons. They can hide
            behind the anonymity of the Internet with the Dark Web even their IP
            addresses can be hidden. The Internet gives them the reach to sell
            to consumers globally outside of the national limits of law
            enforcement. This international reach forces brand owners to
            prosecute cases outside of their local jurisdictions. Counterfeiters
            can display genuine goods on their site and ship counterfeit goods
            to the consumer. This makes it difficult for brand owners to even
            determine if a site is selling counterfeits without making costly
            purchases from the site. Criminal networks are involved with
            counterfeiting which leads to hundreds of sites selling the same
            products on various servers.
          </div>
        </div>
      </div>
    </div>
  );
}

export default IiliteTrade;
