import React, { useState } from "react";
import { BsPersonGear, BsPlusLg } from "react-icons/bs";
import "../App.css";
import Header from "../components/layout/Header";
import Tags from "../components/common/Tag";
import Checkbox from "../components/common/Checkbox";

function App() {
  const [mockData, setMockData] = useState([
    {
      groupName: "group1",
      tags: [
        { name: "Obstetrics-Gynecology", isSelected: false },
        { name: "Orthopaedics", isSelected: false },
        { name: "Internal medicine", isSelected: false },
        { name: "Urologic", isSelected: false },
        { name: "Ophthalmology", isSelected: false },
        { name: "Urologic surgery", isSelected: false },
        { name: "Obstetrics-Gynecology ", isSelected: false },
      ],
    },
    {
      groupName: "group2",
      tags: [
        { name: "Obstetrics-Gynecology", isSelected: false },
        { name: "Orthopaedics", isSelected: false },
        { name: "Internal medicine", isSelected: false },
        { name: "Urologic", isSelected: false },
        { name: "Ophthalmology", isSelected: false },
        { name: "Urologic surgery", isSelected: false },
        { name: "Obstetrics-Gynecology ", isSelected: false },
      ],
    },
    {
      groupName: "group3",
      tags: [
        { name: "Obstetrics-Gynecology", isSelected: false },
        { name: "Orthopaedics", isSelected: false },
        { name: "Internal medicine", isSelected: false },
        { name: "Urologic", isSelected: false },
        { name: "Ophthalmology", isSelected: false },
        { name: "Urologic surgery", isSelected: false },
        { name: "Obstetrics-Gynecology ", isSelected: false },
      ],
    },
  ]);

  const [isChecked, setIsChecked] = useState(false);
  const [tagData, setTagData] = useState<string[]>([]);

  const handleChange = (btnEvent:boolean, value: string) => {
    setIsChecked(!isChecked);
    let newData = tagData;
    newData.push(value);
    setTagData(newData);
    console.log(tagData);
  };

  return (
    <main>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="m-4">
          <div className="flex flex-row">
            <BsPersonGear className="w-6 h-6 lg:w-7 lg:h-7 text-gray-800 mr-2" />
            <label className="text-[#595959] text-[16px] font-semibold	">
              Custom Persona
            </label>
          </div>
          {tagData.length > 0 ? (
            tagData.map((tag) => {
              return <Tags label={tag} />;
            })
          ) : (
            <></>
          )}
          <div className="flex flex-col bg-[#FAFAFA] rounded-[6px] mt-4 p-5 ">
            <div className="flex items-end">
              <button className="border-[1px] border-[#043673] bg-white py-2 px-4 rounded-[8px] w-fit flex flex-row">
                <BsPlusLg className="w-6 h-6 text-[#043673] font-bold mr-2" />
                <label className="text-[#043673] text-[14px] font-normal">
                  New Tag
                </label>
              </button>
            </div>
            {mockData.map((data) => {
              return (
                <>
                  <div key={data.groupName}>
                    <div className="flex flex-row w-full items-center mt-4">
                      <label className="text-[#595959] text-[14px] font-normal w-4/12	mr-2">
                        Tag Group Name
                      </label>
                      <div className="border-b-[1px] border-[#D9D9D9] w-9/12"></div>
                    </div>
                    {data.tags.map((tagData) => {
                      return (
                        <Checkbox
                          onClick={() =>
                            handleChange(isChecked, tagData.name)
                          }
                          label={tagData.name}
                          key={data.groupName + tagData.name}
                        />
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
