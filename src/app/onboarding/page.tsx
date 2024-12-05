import React from "react";
import Builder from "builder-ui-library";

const page = () => {
  return (
    <div>
      <div>Onboarding process</div>
      <div>
        This button start
        <Builder.Button />
        this button ends
      </div>
      <input type="text" placeholder="Enter site name" />
    </div>
  );
};

export default page;
