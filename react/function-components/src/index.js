import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {

   return (
      <div className="ui container comments">

         <ApprovalCard>
            <CommentDetail
               avatar={faker.image.avatar()}
               author="Sam"
               date="Today at 6:00 PM"
               text="Nice blog post!"
            />
         </ApprovalCard>

         <ApprovalCard>
            <CommentDetail
               avatar={faker.image.avatar()}
               author="Tom"
               date="Today at 6:00 PM"
               text="Bad blog post"
            />
         </ApprovalCard>

         <ApprovalCard>
            <CommentDetail
               avatar={faker.image.avatar()}
               author="Jess"
               date="Today at 6:00 PM"
               text="Awesome blog post!"
            />
         </ApprovalCard>
      </div>
   );
};

ReactDOM.render (<App />, document.querySelector ("#root"));