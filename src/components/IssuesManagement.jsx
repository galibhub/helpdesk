import { use, useState } from "react";
import Container from "./Container";
import Toggles_Btns from "./Toggles_Btns";
import CountBox from "./CountBox";
import Card from "./Card";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const initialData = use(fetchPromise);
  const [data,setData]=useState(initialData);

const filteredData= toggleStatus=="All"? data : data.filter((element)=>element.status==toggleStatus);

  return (
    <div>
      <CountBox data={data} />

      <Toggles_Btns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      />
{/* ekhane first e data filter kora hoise .perviously initialData k data state e rakha hoicilo seta diye just data show kora hoisilo akhon filteredData er moddhe filter kora hoise tai map er moddhe data.map bad diye filteredData.map kore data dekhano hoiase */}
      <Container>

        {filteredData.length==0 ?(  <h2 className="text-2xl font-bold text-center mb-4 text-red-400 text-shadow-xs">No Data Found</h2> ): (<div className="grid grid-cols-3 gap-[12px] mb-4">
          {filteredData.map((issue, ind) => {
            console.log(issue);
            return <Card key={ind} issue={issue} data={data} setData={setData}></Card>;
          })}
        </div>




       ) }
      </Container>
    </div>
  );
};

export default IssuesManagement;
