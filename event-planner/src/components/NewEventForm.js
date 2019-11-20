import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { newEventForm } from "../actions/";

const NewEventForm = props => {
  const [newEvent, setNewEvent] = useState({
    event_name: "",
    description: "",
    event_date: "",
    event_time: "",
    budget: "",
    assigned_to_user: null
  });

  const handleChange = e => {
    console.log(e);
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const eventValues = { ...newEvent, assigned_to_user: props.login.userId };
    console.log(eventValues);
    props.newEventForm(eventValues, props.history);
  };

  return (
    <>
      <div className="oboardingFormOuter">
        <div className="landingText">
          <h4 id="landingText">Use the form below to create a new event!</h4>
        </div>
        <div className="landingFormInner">
          <form onSubmit={handleSubmit}>
            <label className="formLabel">
              {" "}
              Name of Event:
              <br />
              <input
                type="text"
                name="event_name"
                placeholder="Stakeholders Meeting"
                onChange={event => handleChange(event)}
                className="formInput"
              />
            </label>
            <br />
            <br />
            <label className="formLabel">
              Event Description:
              <br />
              <input
                type="text"
                name="description"
                placeholder="Financial Advisory"
                onChange={event => handleChange(event)}
                className="formInput"
              />
            </label>
            <br />
            <br />
            <label className="formLabel">
              {" "}
              Event Date:
              <br />
              <input
                type="text"
                name="event_date"
                placeholder="MM-DD-YY"
                onChange={event => handleChange(event)}
                className="formInput"
              />
              <br />
              <br />
            </label>
            <label className="formLabel">
              {" "}
              Time of event:
              <br />
              <input
                type="text"
                name="event_time"
                placeholder="HH:MM AM/PM"
                onChange={event => handleChange(event)}
                className="formInput"
              />
            </label>
            <br />
            <br />
            <label className="formLabel">
              Budget:
              <br />
              <input
                type="text"
                name="budget"
                placeholder="$$$"
                onChange={event => handleChange(event)}
                className="formInput"
              />
            </label>
            <br />
            <button id="login-button" className="submit-button" type="submit">
              {/* button above needs onClick={} */}
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps, { newEventForm })(NewEventForm);
