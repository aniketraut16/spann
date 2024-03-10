import React, { useEffect, useState } from "react";
import img1 from "../Images/Grey Two Side Person Friday Meme (1) (1).png";
import img2 from "../Images/Grey Two Side Person Friday Meme (2) (1).png";
import img3 from "../Images/Grey Two Side Person Friday Meme (3) (1).png";
import img4 from "../Images/Grey Two Side Person Friday Meme.png";
function HighlightOfService() {
  const [counter, setcounter] = useState(0);
  const nextFunc = () => {
    if (counter < 3) {
      setcounter(counter + 1);
    }
  };

  const prevFunc = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };
  useEffect(() => {
    // Increment the counter every 8 seconds
    const interval = setInterval(() => {
      if (counter < 3) {
        setcounter(counter + 1);
      } else {
        // Reset counter to 0 when reaching the last slide
        setcounter(0);
      }
    }, 4000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [counter]);
  return (
    <div id="HighlightOfService">
      <h1>Highlights of Service</h1>
      <div className="corausol">
        <i className="fa-solid fa-angle-right next" onClick={nextFunc}></i>
        <i className="fa-solid fa-angle-left prev" onClick={prevFunc}></i>

        <div style={{ transform: `translateX(${-counter * 100}%)` }}>
          <img src={img1} alt="" />
          <div>
            <h1>Investigation</h1>
            {window.innerWidth > 1000 ? (
              <>
                <p>
                  The Investigations and Enforcements Unit at SPAN Consulting
                  Private Limited delivers an unparalleled array of
                  investigative services that encompass in-depth online and
                  offline research, meticulous due diligence, advanced fraud
                  analysis and extensive audits. Our unit excels in the art of
                  open-source intelligence by mining a rich vein of information
                  across various platforms to assess and address potential risks
                  and industry threats. We conduct sophisticated market surveys
                  and intelligence operations to capture the subtlest shifts in
                  consumer trends and competitor movements, providing our
                  clients with a significant strategic advantage.{" "}
                </p>
                <p>
                  Field investigations are a cornerstone of our service suite,
                  undertaken by experts who combine years of experience with
                  acute analytical skills to manoeuvre through and resolve
                  complex investigative challenges. Our team’s discreet and
                  strategic approach ensures maximum confidentiality and
                  accuracy in all undertakings.
                </p>
              </>
            ) : (
              <p>
                The Investigations and Enforcements Unit at SPAN Consulting
                Private Limited offers comprehensive investigative services,
                utilizing advanced techniques such as online research, due
                diligence, fraud analysis, and audits. We specialize in
                open-source intelligence gathering, conducting market surveys,
                and intelligence operations to identify risks and industry
                trends.
              </p>
            )}
          </div>
        </div>
        <div style={{ transform: `translateX(${-counter * 100}%)` }}>
          <img src={img2} alt="" />
          <div>
            <h1>Legal </h1>
            {window.innerWidth > 1000 ? (
              <p>
                At SPAN Consulting Private Limited, the Legal Services Unit is
                renowned for its precision in navigating the complex landscapes
                of intellectual property, healthcare regulatory compliance,
                media, entertainment law, and digital & IT law. As a
                distinguished boutique consultancy, our expertise extends to IP
                registration, prosecution and detailed audits. We excel in
                creating robust strategies for product security and the
                enforcement of rights, providing comprehensive solutions through
                our acclaimed Total Legal & Business Solutions (TLBS) practice.
                This practice is our commitment to combat counterfeiting,
                product diversion, and IPR infringement, ensuring not only
                consumer safety but also the reinforcement of trust in our
                clients' products, thereby significantly enhancing their market
                standing and revenue
              </p>
            ) : (
              <p>
                SPAN Consulting Private Limited's Legal Services Unit
                specializes in intellectual property, healthcare regulatory
                compliance, media, entertainment, and digital law, offering
                expertise in IP registration, prosecution, and audits. Our Total
                Legal & Business Solutions (TLBS) practice focuses on combating
                counterfeiting, product diversion, and IPR infringement.
              </p>
            )}
          </div>
        </div>
        <div style={{ transform: `translateX(${-counter * 100}%)` }}>
          <img src={img3} alt="" />
          <div>
            <h1>Consulting</h1>
            {window.innerWidth > 1000 ? (
              <p>
                Our Business Risk Advisory and Strategic Consulting Unit at SPAN
                Consulting Private Limited leverages a wealth of industry
                knowledge to provide strategic consulting that transcends
                conventional risk management. By integrating innovative tools
                and tailored advisory services, we address the unique challenges
                presented by today’s volatile business environments. This unit
                stands at the crossroads of technology and strategic foresight,
                offering dynamic solutions for brand protection, efficient
                budget management, and comprehensive training for stakeholders.
                Our tech-driven, bespoke consultancy approach ensures that our
                clients are equipped to navigate market complexities with
                strategic planning and developmental insights that are both
                proactive and reactive, fostering an atmosphere of trust and
                superior performance
              </p>
            ) : (
              <p>
                At SPAN Consulting Private Limited, our Business Risk Advisory
                and Strategic Consulting Unit offers innovative solutions for
                brand protection, budget management, and stakeholder training,
                blending industry expertise with tech-driven strategies. We
                specialize in navigating complex business landscapes through
                tailored advisory services, ensuring proactive and reactive
                planning .
              </p>
            )}
          </div>
        </div>
        <div style={{ transform: `translateX(${-counter * 100}%)` }}>
          <img src={img4} alt="" />
          <div>
            <h1>Trainings</h1>
            {window.innerWidth > 1000 ? (
              <p>
                In the ever-evolving landscape of intellectual property (IP),
                staying informed and adept in the nuances of IP laws is crucial
                for businesses and legal professionals alike. SPAN Consulting
                can play a pivotal role in enhancing the knowledge and skills of
                individuals and organizations through tailored training
                programs, bringing in a wealth of expertise in various aspects
                of intellectual property, including patents, trademarks,
                copyrights, and trade secrets. These training programs are
                designed to cater to the specific needs of participants, whether
                they are legal professionals seeking to deepen their
                understanding or businesses aiming to safeguard their
                intellectual assets. These would provide a comprehensive
                coverage of a spectrum of topics ranging from the fundamentals
                of IP law to advanced strategies for IP protection and
                enforcement. Furthermore, practical insights and case studies
                covering the latest developments in the sector, augmented by the
                latest technology on offer will empower professionals and
                businesses to navigate the intricate terrain of intellectual
                property laws, fostering a culture of innovation, protection,
                and strategic growth.
              </p>
            ) : (
              <p>
                SPAN Consulting offers tailored training programs to enhance
                understanding of intellectual property laws, covering patents,
                trademarks, copyrights, and trade secrets. These programs cater
                to legal professionals and businesses, providing comprehensive
                coverage from fundamentals to advanced strategies, supported by
                practical insights and technology to navigate the evolving IP
                landscape.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightOfService;
