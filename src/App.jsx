import { useState } from "react";
import General from "./components/General";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/styles.css";

let nextEdId = 2;
let nextExpId = 2;

export default function App() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  function handleContactChange(e) {
    const newContact =
      e.target.name === "fname"
        ? { ...contact, firstName: e.target.value }
        : e.target.name === "lname"
        ? { ...contact, lastName: e.target.value }
        : e.target.name === "phone"
        ? { ...contact, phone: e.target.value }
        : { ...contact, email: e.target.value };

    setContact(newContact);
  }

  const placeHolderEducationItems = [
    {
      institutionName: "University of Missouri",
      title: "BS Mechanical Engineering",
      startDate: "2011",
      endDate: "2015",
      id: 0,
    },
    {
      institutionName: "University of Utah",
      title: "MS Computer Science",
      startDate: "2022",
      endDate: "present",
      id: 1,
    },
  ];

  const [educationItems, setEducationItems] = useState(
    placeHolderEducationItems
  );

  function handleEducationItemChange(id, e) {
    setEducationItems(
      educationItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [e.target.name]: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  function handleAddEducation(e) {
    const newEducationItem = {
      institutionName: "",
      title: "",
      startDate: "",
      endDate: "",
      id: nextEdId++,
    };
    setEducationItems([...educationItems, newEducationItem]);
    return nextEdId;
  }

  function handleDeleteEducation(id, e) {
    const newEducationArray = educationItems.filter((item) => item.id !== id);
    setEducationItems([...newEducationArray]);
  }

  const placeHolderExperienceItems = [
    {
      company: "1-800 Contacts",
      position: "Marketing Systems Administrator",
      description:
        "Leverage data and marketing technology tools to develop solutions for marketing operations",
      startDate: "2022",
      endDate: "present",
      id: 1,
    },
    {
      company: "Kasasa",
      position: "Marketing Solutions Architect",
      description:
        "Managed a team of marketing operations specialists to design, implement, and execute marketing campaigns in SFMC",
      startDate: "2017",
      endDate: "2022",
      id: 0,
    },
  ];

  const [experienceItems, setExperienceItems] = useState(
    placeHolderExperienceItems
  );

  function handleExperienceChange(id, e) {
    setExperienceItems(
      experienceItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [e.target.name]: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  function handleAddExperience(e) {
    const newExperienceItem = {
      company: "",
      position: "",
      description: "",
      startDate: "",
      endDate: "",
      id: nextExpId++,
    };
    setExperienceItems([...experienceItems, newExperienceItem]);
    return nextExpId;
  }

  function handleDeleteExperience(id, e) {
    const newExperienceArray = experienceItems.filter((item) => item.id !== id);
    setExperienceItems([...newExperienceArray]);
  }

  return (
    <>
      <div className="main">
        <div className="configuration">
          <General contact={contact} handleChange={handleContactChange} />
          <Experience
            experienceItems={experienceItems}
            handleExperienceChange={handleExperienceChange}
            handleAddExperience={handleAddExperience}
            handleDeleteExperience={handleDeleteExperience}
          />
          <Education
            educationItems={educationItems}
            handleEducationItemChange={handleEducationItemChange}
            handleAddEducation={handleAddEducation}
            handleDeleteEducation={handleDeleteEducation}
          />
        </div>
        <div className="resume-area">
          <Resume
            contact={contact}
            educationItems={educationItems}
            experienceItems={experienceItems}
          />
        </div>
      </div>
    </>
  );
}
