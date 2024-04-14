import React from "react";
import TButton from "./core/TButton";
import { FaPencilAlt, FaArrowCircleUp,FaTrash } from "react-icons/fa";

const SurveyListItem = ({ survey,onDeleteClick }) => {
  return (
    <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
      <img
        src={survey.image_url}
        alt={survey.title}
        className="w-full h-48 object-cover"
      />
      <h4 className="mt-4 text-lg font-bold">{survey.title}</h4>

      <div
        className="ovewrflow-hidden flex-1"
        dangerouslySetInnerHTML={{ __html: survey.description }}
      ></div>

      <div className="flex justify-between items-center mt-3">
        <TButton to={`surveys/${survey.id}`}>
          <FaPencilAlt className="w-5 h-5 mr-2" />
          Edit
        </TButton>

        <div className="flex items-center">
          <TButton href={`/view/survey/${survey.slug}`} circle link>
            <FaArrowCircleUp  className="w-5 h-5 mr-2 w-full"/>
          </TButton>

          {survey.id && (
            <TButton circle link color="red" onClick={(e)=>onDeleteClick()}>
                <FaTrash className="w-5 h-5"/>
            </TButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyListItem;
