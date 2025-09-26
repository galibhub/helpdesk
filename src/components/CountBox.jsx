import React from 'react';
import Container from './Container';

const CountBox = ({data}) => {
    

    const pendingData=data.filter((element)=>element.status=="Pending");
     const submittedData=data.filter((element)=>element.status=="Submitted");
      const reviewedData=data.filter((element)=>element.status=="Reviewed");

    return (
        <Container>
        <div className="grid grid-cols-3 gap-[20px] my-[50px]">
          <div className="rounded-md p-7 text-white h-[250px] bg-gray-600 flex flex-col justify-center items-center">
            <h2 className="font-bold text-[35px]">Pending</h2>
            <p className="font-semibold text-[25px]">{pendingData.length}</p>
          </div>

          <div className="rounded-md p-7 text-white h-[250px] bg-purple-600 flex flex-col justify-center items-center">
            <h2 className="font-bold text-[35px]">Submitted</h2>
            <p className="font-semibold text-[25px]">{submittedData.length}</p>
          </div>

          <div className="rounded-md p-7 text-white h-[250px] bg-teal-600 flex flex-col justify-center items-center">
            <h2 className="font-bold text-[35px]">Reviewed</h2>
            <p className="font-semibold text-[25px]">{reviewedData.length}</p>
          </div>
        </div>
      </Container>

    );
};

export default CountBox;