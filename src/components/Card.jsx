import React from "react";

const Card = ({ issue, ind, data, setData }) => {
  const handleClick = () => {
    const currentData = data.find((elem) => elem.ticketId == issue.ticketId);

    if (currentData.status == "Pending") {
      currentData.status = "Submitted";
    } else if (currentData.status == "Submitted") {
      currentData.status = "Reviewed";
    }

    const restData = data.filter((elem) => elem.ticketId != issue.ticketId);

    setData([currentData, ...restData]);
  };

  return (
    <div
      key={issue.id }
      className="shadow-md rounded-md cursor-pointer bg-slate-100 p-5 "
      onClick={() => handleClick()}
    >
      <div>
        <img
          className="h-[80px] w-[80px] rounded-full"
          src={issue.userImg}
          alt={issue.requestedBy}
          title={issue.requestedBy}
        />
        <h2 className="font-semibold   text-lg">{issue.requestedBy}</h2>
      </div>
      <div className="flex justify-between my-2">
        <h2 className="font-bold text-[26px]">{issue.subject}</h2>
        <div>
          <span
            className={`font-semibold py-1 px-2 shadow rounded mr-2 ${
              issue.priority == "High"
                ? "text-red-500 bg-red-100"
                : issue.priority == "Medium"
                ? "Text-yellow-500 bg-yellow-100"
                : "text-green-500 bg-green-100"
            }`}
          >
            {issue.priority}
          </span>

          <span
            className={`font-semibold py-1 px-2 shadow rounded mr-2 ${
              issue.status == "pending"
                ? "text-red-500 bg-red-100"
                : issue.status == "submitted"
                ? "Text-yellow-500 bg-yellow-100"
                : "text-green-500 bg-green-100"
            }`}
          >
            {issue.status}
          </span>
        </div>
      </div>
      <p className="text-[17px] text-slate-700">{issue.description}</p>
    </div>
  );
};

export default Card;
