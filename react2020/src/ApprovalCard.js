import React from "react";

const ApprovalCard = () => {
  return (
    <div className="ui card">
      <div className="content">you sure?</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">approve</div>
          <div className="ui basic red button">reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
