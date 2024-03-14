import React from "react";

function Enquiry() {
  return (
    <div id="Enquiry">
      <h1>Inquiry Form</h1>
      <div className="form">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" required />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" required />
        </div>
        <div>
          <label htmlFor="">Phone Number</label>
          <input type="number" required />
        </div>
        <div>
          <label htmlFor="">Organization/Company:</label>
          <input type="text" />
        </div>
        <div id="message">
          <label>Type of Inquiry:</label>
          <div>
            <input type="radio" name="enquirytype" id="geninquiry" />
            <label htmlFor="geninquiry">General Inquiry</label>
            <input type="radio" name="enquirytype" id="consultation" />
            <label htmlFor="consultation">Consultation</label>
            <input type="radio" name="enquirytype" id="request" />
            <label htmlFor="request">Request</label>
            <input type="radio" name="enquirytype" id="other" />
            <label htmlFor="other">Other</label>
          </div>
          <label htmlFor="discription">Brief Description of Inquiry:</label>
          <textarea name="" cols="30" rows="10" id="discription"></textarea>
          <label>Preferred Method of Contact:</label>
          <div>
            <input
              type="radio"
              name="preferedmethodofcontact"
              id="is-prefered-method-email"
            />
            <label htmlFor="is-prefered-method-email">Email</label>
            <input
              type="radio"
              name="preferedmethodofcontact"
              id="is-prefered-method-phone"
            />
            <label htmlFor="is-prefered-method-phone">Phone</label>
          </div>
          <label htmlFor="availabilityofconsulting">
            Availability for Consultation:
          </label>
          <textarea
            name=""
            cols="30"
            rows="5"
            id="availabilityofconsulting"
          ></textarea>
          <label htmlFor="additionalquestions">
            Additional Information or Questions:
          </label>
          <textarea
            name=""
            cols="30"
            rows="10"
            id="additionalquestions"
          ></textarea>
          <label htmlFor="howdidyouhearaboutus">
            How did you hear about us?
          </label>
          <textarea
            name=""
            cols="30"
            rows="10"
            id="howdidyouhearaboutus"
          ></textarea>
          <label>
            Would you like to receive updates and newsletters from us?
          </label>
          <div>
            <input
              type="radio"
              name="wanttoreceivenewsletter"
              id="wanttoreceivenewsletter-yes"
            />
            <label htmlFor="wanttoreceivenewsletter-yes">Yes</label>
            <input
              type="radio"
              name="wanttoreceivenewsletter"
              id="wanttoreceivenewsletterno"
            />
            <label htmlFor="wanttoreceivenewsletterno">No</label>
          </div>
          <p>
            By submitting this form, you agree to our Privacy Policy and Terms
            of Service.
          </p>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Enquiry;
