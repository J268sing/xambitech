import React from 'react';
import { EditForm } from './EditForm';

function App() {
  const onSubmitSuccess = (entity) => {
    console.log("Form submitted successfully", entity);
  };

  const editEntries = [
    { attribute: "name", attributeName: "Name", type: "Text", isRequired: true },
    // Add more fields as needed
  ];

  const entityObj = {
    name: "John Doe"
  };

  return (
    <div className="App">
      <h1>Edit Form Example</h1>
      <EditForm
        title="Edit Entry"
     //   description="Edit the following fields:"
       // editEntries={editEntries}
       // entityObj={entityObj}
        //onSubmitSuccess={onSubmitSuccess}
      />
    </div>
  );
}

export default App;
