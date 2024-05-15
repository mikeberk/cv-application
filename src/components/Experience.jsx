import Form from "./Form";
import { useState } from "react";

export default function Experience({
  experienceItems,
  handleExperienceChange,
  handleAddExperience,
  handleDeleteExperience,
}) {
  const initialItemState =
    experienceItems.length > 0 ? experienceItems[0].id : null;
  const [currentExperienceItem, setCurrentExperienceItem] =
    useState(initialItemState);

  function saveExperienceItem(e) {
    setCurrentExperienceItem(null);
  }

  function editExperienceItem(e) {
    let targetId = parseInt(e.target.dataset.exedit, 10);
    setCurrentExperienceItem(targetId);
  }

  function addExperienceItem(e) {
    const newId = handleAddExperience(e);
    setCurrentExperienceItem(newId);
    handleAddExperience(e);
  }
  return (
    <div className="experience-form form-section">
      <h2>Experience</h2>
      {experienceItems.map((item) => (
        <div key={`ex-form-${item.id}`}>
          {currentExperienceItem !== item.id && (
            <div className="collapsed">
              <h3>{item.company ? item.company : "New Experience"}</h3>
              <button
                className="btn-edit"
                data-exedit={item.id}
                onClick={editExperienceItem}
              >
                Edit
              </button>
            </div>
          )}
          {currentExperienceItem === item.id && (
            <div className="uncollapsed">
              <Form
                label="Company"
                name="company"
                value={item.company}
                handleChange={(e) => {
                  handleExperienceChange(item.id, e);
                }}
                inputType={"text"}
              />
              <Form
                label="Position"
                name="position"
                value={item.position}
                handleChange={(e) => {
                  handleExperienceChange(item.id, e);
                }}
                inputType={"text"}
              />
              <Form
                label="Start Date"
                name="startDate"
                value={item.startDate}
                handleChange={(e) => {
                  handleExperienceChange(item.id, e);
                }}
                inputType={"text"}
              />
              <Form
                label="End Date"
                name="endDate"
                value={item.endDate}
                handleChange={(e) => {
                  handleExperienceChange(item.id, e);
                }}
                inputType={"text"}
              />
              <Form
                label="Responsibilities"
                name="description"
                value={item.description}
                handleChange={(e) => {
                  handleExperienceChange(item.id, e);
                }}
                inputType={"area"}
              />
              <div className="form-btns">
                <button
                  className="btn-delete"
                  onClick={(e) => {
                    handleDeleteExperience(item.id, e);
                  }}
                >
                  Delete
                </button>
                <button onClick={saveExperienceItem}>Save</button>
              </div>
            </div>
          )}
        </div>
      ))}
      <button
        onClick={(e) => {
          addExperienceItem(e);
        }}
      >
        Add Experience
      </button>
    </div>
  );
}
