import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="today at 5:00"
          comment="words"
          profileImage={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetail
        author="Sally"
        timeAgo="today at 7:00"
        comment="bulgogi"
        profileImage={faker.image.avatar()}
      />
      <CommentDetail
        author="Nat"
        timeAgo="today at 9:00"
        comment="apples"
        profileImage={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
