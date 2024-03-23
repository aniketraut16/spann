import React from "react";

function Disclamer() {
  return (
    <div className="modal">
      <article className="modal-container">
        <header className="modal-container-header">
          <span className="modal-container-title">
            <svg
              aria-hidden="true"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z"
                fill="currentColor"
              ></path>
            </svg>
            Terms and Services
          </span>
          <button className="icon-button">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </header>
        <section className="modal-container-body rtf">
          <h2>
            {" "}
            In India, lawyers and law firms are not permitted to solicit work
            andadvertise themselves. By clicking on the “I agree” button, you
            hereby agreeand acknowledge that:
          </h2>
          <p>
            {" "}
            • You will not access or use this knowledge site in any manner that
            would knowingly resultin contravention of any law, including the
            rules of the Bar Council of India that prohibitlaw firms and lawyers
            from soliciting or advertising.
          </p>
          <p>
            {" "}
            • You are accessing this site out of your own volition and for
            informational andeducational purposes only.
          </p>
          <p>
            {" "}
            • SPAN Consulting or any of its members has not reached out to you
            directly or indirectly to solicit any work from you or your
            organisation through this site.
          </p>
          <p>
            {" "}
            • Your access or use of the knowledge site in any manner will not,
            under any circumstances, create a lawyer-client relationship.
          </p>
          <p>
            {" "}
            • All information about SPAN Consulting and its members on this
            website is being provided to you upon expression of your interest.
          </p>
          <p>
            {" "}
            • Any information obtained or materials downloaded from this website
            will be used for informational and educational purposes only.
          </p>
          <p>
            {" "}
            • SPAN Consulting does not warrant that the information on this
            Knowledge-site would be accurate or complete or updated from time to
            time. Therefore, SPAN Consulting will not assume any responsibility
            for any decision made on the basis of the content of the knowledge
            site under any circumstances.
          </p>
          <p>
            {" "}
            • SPAN Consulting hereby disclaims any and all liability to any
            person for any loss or damage caused by errors or omissions in the
            content of the site.
          </p>
          <p>
            {" "}
            • SPAN Consulting assumes no liability for the interpretation and/or
            use of the information contained on this website, nor does it offer
            a warranty of any kind, either express or implied.
          </p>
          <p>
            {" "}
            • The contents of this knowledge site do not constitute, and shall
            not be construed as, legal advice or a substitute for legal advice.
          </p>
        </section>
        <footer className="modal-container-footer">
          <button className="button is-ghost">Decline</button>
          <button className="button is-primary">Accept</button>
        </footer>
      </article>
    </div>
  );
}

export default Disclamer;
