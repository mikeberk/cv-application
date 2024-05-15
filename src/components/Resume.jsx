export default function Resume({ contact, educationItems, experienceItems }) {
  function displayExperience(text) {
    const lines = text.split("\n");
    return (
      <>
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </>
    );
  }
  return (
    <div className="resume">
      <div className="resume-contact">
        <h2>
          {contact.firstName === "" && contact.lastName === ""
            ? "Your Name"
            : contact.firstName + " " + contact.lastName}
        </h2>
        <p>
          {contact.phone === "" ? "Phone Number" : contact.phone}
          {" | "}
          {contact.email === "" ? "Email" : contact.email}
        </p>
      </div>
      <div className="resume-experience">
        <h2>Work History</h2>
        {experienceItems.map((item) => (
          <div key={`exp-${item.id}`}>
            <h3>{item.company}</h3>
            <div className="position-container">
              <p>{item.position}</p>
              <p>
                {item.startDate}
                {item.startDate && " - "}
                {item.endDate}
              </p>
            </div>
            <div className="experience-description">
              {displayExperience(item.description)}
            </div>
          </div>
        ))}
      </div>
      <div className="resume-education">
        <h2>Education</h2>
        {educationItems.map((item) => (
          <div key={`ed-${item.id}`}>
            <h3>{item.institutionName}</h3>
            <div className="degree-container">
              <p>{item.title}</p>
              <p>
                {item.startDate}
                {item.startDate && " - "}
                {item.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
