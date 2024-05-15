import Form from "./Form";
import { useState } from "react";

export default function Education({
  educationItems,
  handleEducationItemChange,
  handleAddEducation,
  handleDeleteEducation,
}) {
  const initialItemState =
    educationItems.length > 0 ? educationItems[0].id : null;
  const [currentEducationItem, setCurrentEducationItem] =
    useState(initialItemState);

  function saveEducationItem(e) {
    setCurrentEducationItem(null);
  }

  function editEducationItems(e) {
    let targetId = parseInt(e.target.dataset.ededit, 10);
    setCurrentEducationItem(targetId);
  }

  function addEducationItem(e) {
    const newId = handleAddEducation(e);
    setCurrentEducationItem(newId);
    handleAddEducation(e);
  }
  return (
    <div className="education-form form-section">
      <h2>Education</h2>
      {educationItems.map((item) => (
        <div key={`ed-form-${item.id}`}>
          {currentEducationItem !== item.id && (
            <div className="collapsed">
              <h3>
                {item.institutionName
                  ? item.institutionName
                  : "New Institution"}
              </h3>
              <button
                className="btn-edit"
                data-ededit={item.id}
                onClick={editEducationItems}
              >
                Edit
              </button>
            </div>
          )}
          {currentEducationItem === item.id && (
            <div className="uncollapsed">
              <Form
                label="Institution"
                name="institutionName"
                value={item.institutionName}
                handleChange={(e) => {
                  handleEducationItemChange(item.id, e);
                }}
                inputType={"text"}
              />
              <Form
                label="Title or degree"
                name="title"
                value={item.title}
                handleChange={(e) => {
                  handleEducationItemChange(item.id, e);
                }}
                inputType={"text"}
              />
              <Form
                label="Start Date"
                name="startDate"
                value={item.startDate}
                handleChange={(e) => {
                  handleEducationItemChange(item.id, e);
                }}
                inputType={"text"}
              />
              <Form
                label="End Date"
                name="endDate"
                value={item.endDate}
                handleChange={(e) => {
                  handleEducationItemChange(item.id, e);
                }}
                inputType={"text"}
              />
              <div className="form-btns">
                <button
                  className="btn-delete"
                  onClick={(e) => {
                    handleDeleteEducation(item.id, e);
                  }}
                >
                  Delete
                </button>
                <button onClick={saveEducationItem}>Save</button>
              </div>
            </div>
          )}
        </div>
      ))}
      <button
        onClick={(e) => {
          addEducationItem(e);
        }}
      >
        Add Education
      </button>
    </div>
  );
}
