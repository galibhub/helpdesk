import React from "react";
import Container from "./Container";
const toggles_Btns = ({ toggleStatus, setToggleStatus }) => {

    //button using map 
  const btns = ["All", "Pending", "Submitted", "Reviewed"];

  return (
    <Container>
      <div className="text-right mb-[50px]">
        {
        
        btns.map((btn,ind) => {
          return (
            <button key={ind}
              onClick={() => setToggleStatus(btn)} className={`${ind == 0 && "rounded-l-md "} ${ind==btns.length-1 && "rounded-r-md "}  toggle-btn ${toggleStatus == btn && "!bg-purple-500 !text-white"
              }`}
            >
              {btn}
            </button>
          );
        })
        
        }

      </div>
    </Container>
  );
};

export default toggles_Btns;
