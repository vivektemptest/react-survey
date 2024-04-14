import { useContext, useState, createContext } from "react";
const StateContext = createContext({
  currentUser: {},
  setCurrentUser: () => {},
  userToken: "",
  setUserToken: () => {},
  surveys: [],
});

const tmpSurveys = [
  {
    id: 1,
    image_url:
      "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
    title: "title",
    slug: "title",
    status: true,
    description: `<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
  </dl>`,
    created_at: "2024-02-05",
    updated_at: "2024-02-05",
    expiry_date: "2024-02-05",
    questions: [
      {
        id: 1,
        type: "text",
        question: "question",
        description: null,
      },
      {
        id: 2,
        type: "checkbox",
        question: "question",
        description: null,
        data: {
          options: [
            {
              uuid: "sds45455sd-44754sd",
              text: "javascript",
            },
            {
              uuid: "sds45455sd-44754sd54",
              text: "javascript",
            },
          ],
        },
      },
      {
        id: 2,
        type: "radio",
        question: "question",
        description: null,
        data: {
          options: [
            {
              uuid: "sds45455sd-44754sd",
              text: "javascript",
            },
            {
              uuid: "sds45455sd-44754sd54",
              text: "javascript",
            },
          ],
        },
      },
      {
        id: 3,
        type: "textarea",
        question: "question",
        description: null,
        data: [],
      },
      {
        id: 4,
        type: "text",
        question: "question",
        description: null,
        data: [],
      },
    ],
  },
  {
    id: 2,
    image_url:
      "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
    title: "title",
    slug: "title",
    status: true,
    description: "description",
    created_at: "2024-02-05",
    updated_at: "2024-02-05",
    expiry_date: "2024-02-05",
    questions: [
      {
        id: 1,
        type: "text",
        question: "question",
        description: null,
      },
      {
        id: 2,
        type: "checkbox",
        question: "question",
        description: null,
        data: {
          options: [
            {
              uuid: "sds45455sd-44754sd",
              text: "javascript",
            },
            {
              uuid: "sds45455sd-44754sd54",
              text: "javascript",
            },
          ],
        },
      },
      {
        id: 2,
        type: "radio",
        question: "question",
        description: null,
        data: {
          options: [
            {
              uuid: "sds45455sd-44754sd",
              text: "javascript",
            },
            {
              uuid: "sds45455sd-44754sd54",
              text: "javascript",
            },
          ],
        },
      },
      {
        id: 3,
        type: "textarea",
        question: "question",
        description: null,
        data: [],
      },
      {
        id: 4,
        type: "text",
        question: "question",
        description: null,
        data: [],
      },
    ],
  },
];

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');
  const [surveys, setSurveys] = useState(tmpSurveys);

  const setUserToken = (token)=>{
    if(token){
      localStorage.setItem('TOKEN',token);
    }else{
      localStorage.removeItem('TOKEN')
    }
    _setUserToken(token)
  }

  return (
    <StateContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
        surveys,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
