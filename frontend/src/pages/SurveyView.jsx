import React, { useState } from "react";
import PageComponent from "../components/PageComponent";
import TButton from "../components/core/TButton";
import { FaPlusCircle } from "react-icons/fa";
import { FaPhotoFilm } from "react-icons/fa6";

export default function SurveyView() {
  const [survey, setSurvey] = useState({
    title: "",
    slug: "",
    status: false,
    description: "",
    image: "",
    image_url: "",
    expiry_date: "",
    questions: [],
  });
  const onImageChoose = ()=>{
    console.log('Image chooose');
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }
  return (
    <PageComponent title="Create Survey">
      <form action="" method="post" onSubmit={(e)=>handleOnSubmit(e)}>
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-white px-4 py-4 sm:p-6">
            {/* Image */}
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo
              </label>
              <div className="mt-1 flex items-center">
                {survey.image_url && (
                    <img src={survey.image_url} alt="" className="w-32 h-32 object-cover" />
                )}
                {!survey.image_url && (
                    <span className="flex justify-center items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                        <FaPhotoFilm className="w-8 h-8"/>
                    </span>
                )}

                <button className="relative ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <input type="file" className="absolute left-0 top-0 right-0 bottom-0 opacity-0"  onChange={onImageChoose}/>
                    Change
                </button>
              </div>
            </div>
            {/* Image */}

            {/* Title */}
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Survey Title
                    </label>

                    <input type="text" value={survey.title} onChange={(e)=>({...survey,title:e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
            {/* Title */}

            {/* description */}
            <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>

                    <textarea value={survey.description} onChange={(e)=>({...survey,description:e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" >

                    </textarea>
                </div>
            {/* description */}

            {/* dexpiry date */}
            <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="expiry_date" className="block text-sm font-medium text-gray-700 ">
                        Expiry date
                    </label>

                    <input type="date" value={survey.expiry_date} onChange={(e)=>({...survey,expiry_date:e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
            {/* dexpiry date */}

            {/* Active */}
            <div className="flex items-start">
                <div className="flex h-5 items-center">
                    <input type="checkbox" id="status" name="status" checked={survey.status} onChange={(e)=>({...survey,status:e.target.value})} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor="comments" className="font-medium text-gray-700">Active</label>
                    <p className="text-gray-500">Whether to  make publicaly available</p>
                </div>
            </div>
            {/* Active */}

          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <TButton>
                Save
            </TButton>
          </div>
        </div>
      </form>
    </PageComponent>
  );
}
