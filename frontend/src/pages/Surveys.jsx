import React from "react";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";
import SurveyListItem from "../components/SurveyListItem";
import TButton from "../components/core/TButton";
import { FaPlusSquare } from "react-icons/fa";

export default function Surveys() {
  const { surveys } = useStateContext();
   const handleOnDeleteSurvey =() => {
    console.log('delete');
   }
  return <PageComponent title="Surveys" buttons={
    (<TButton to='/surveys/create' >
      <FaPlusSquare className="w-6 h-6 mr-2"/> Create New
    </TButton>)

  }>

      <div className="grid grid-cold-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {
          surveys.map((survey)=>(
            <SurveyListItem survey={survey} key={survey.id} onDeleteClick={handleOnDeleteSurvey}/>
          ))
        }
      </div>
  </PageComponent>;
}
