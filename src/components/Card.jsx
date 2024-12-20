import React from "react";

const Card = () => {
  let myData = {
    data: [
      {
        id: 1605,
        triggerWords: [
          {
            id: 3810,
            word: "lorem ipsum text",
            speaker: "AGENT",
            linkedToCueId: null,
          },
          {
            id: 3813,
            word: "lorem ipsum text",
            speaker: "CUSTOMER",
            linkedToCueId: null,
          },
          {
            id: 3812,
            word: "lorem ipsum text",
            speaker: "AGENT",
            linkedToCueId: null,
          },
          {
            id: 3809,
            word: "lorem ipsum text",
            speaker: "BOTH",
            linkedToCueId: null,
          },
          {
            id: 3811,
            word: "lorem ipsum text",
            speaker: "AGENT",
            linkedToCueId: null,
          },
        ],
        reservedWords: [],
        myTitle: "Lorem Card",
        cueResponse:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
        cueQuestion: "Lorem Ipsum is simply dummy text ",
        productId: 259,
        nextCues: [
          {
            id: 3630,
            triggerWords: [
              {
                id: 12250,
                word: "lorem ipsum text",
                speaker: "BOTH",
                linkedToCueId: null,
              },
              {
                id: 12253,
                word: "lorem ipsum text",
                speaker: "AGENT",
                linkedToCueId: null,
              },
              {
                id: 12251,
                word: "lorem ipsum text",
                speaker: "AGENT",
                linkedToCueId: null,
              },
              {
                id: 12252,
                word: "lorem ipsum text",
                speaker: "AGENT",
                linkedToCueId: null,
              },
              {
                id: 12249,
                word: "lorem ipsum text",
                speaker: "AGENT",
                linkedToCueId: null,
              },
            ],
            reservedWords: [],
            myTitle: "Linked Card",
            cueResponse:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            cueQuestion: "When an unknown printer?",
            productId: 259,
            nextCues: [
              {
                id: 2310,
                triggerWords: [
                  {
                    id: 6422,
                    word: "lorem ipsum text",
                    speaker: "CUSTOMER",
                    linkedToCueId: null,
                  },
                  {
                    id: 6420,
                    word: "lorem ipsum text",
                    speaker: "AGENT",
                    linkedToCueId: null,
                  },
                  {
                    id: 6421,
                    word: "lorem ipsum text",
                    speaker: "CUSTOMER",
                    linkedToCueId: null,
                  },
                ],
                reservedWords: [],
                cueResponse:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                cueQuestion: "What Document Lorem Ipsum is simply dummy text ?",
                productId: 259,
                nextCues: [],
              },
            ],
          },
        ],
      },
      {
        id: 1706,
        triggerWords: [
          {
            id: 4820,
            word: "sample trigger text",
            speaker: "CUSTOMER",
            linkedToCueId: null,
          },
          {
            id: 4821,
            word: "sample trigger text",
            speaker: "AGENT",
            linkedToCueId: null,
          },
        ],
        reservedWords: [],
        cueResponse:
          "The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        cueQuestion: "What if the Lorem Ipsum ?",
        productId: 260,
        nextCues: [],
      },
      {
        id: 1807,
        triggerWords: [
          {
            id: 5820,
            word: "example word",
            speaker: "AGENT",
            linkedToCueId: null,
          },
          {
            id: 5821,
            word: "example word",
            speaker: "CUSTOMER",
            linkedToCueId: null,
          },
        ],
        reservedWords: [],
        cueResponse:
          "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.m",
        cueQuestion: "When an unknown printer works?",
        productId: 261,
        nextCues: [
          {
            id: 3922,
            triggerWords: [
              {
                id: 14210,
                word: "next trigger word",
                speaker: "AGENT",
                linkedToCueId: null,
              },
              {
                id: 14211,
                word: "next trigger word",
                speaker: "CUSTOMER",
                linkedToCueId: null,
              },
            ],
            reservedWords: [],
            cueResponse:
              "Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            cueQuestion: "How to handle Lorem Ipsum issues?",
            productId: 261,
            nextCues: [],
          },
        ],
      },
    ],
  };

  //   async function fetchData() {
  //     const data = await fetch("../cueData.json");
  //     newData = await data.json();
  //   }

  //   let newData = fetchData().then((res) => res.data);

  //   console.log(newData);

  //   myData.data.forEach((item, id) => {
    //     console.log(item);
    //   });
    let data = myData.data;
    console.log(data.nextCues)
  return (
    <div className="container-fluid">
      <div className="">
        <div className="shadow  p-3">
          <h3>Real - Time Sales Assitance</h3>
        </div>
        <div>
            <img src="" alt="" />
        </div>
        {data.map((item, id) => {
          let splittedResponse = item.cueResponse.split(".");
          return (
            <>
              <div key={id} className=" mt-2">
                <div key={id} className="card">
                  <div className="card-header">
                    {<h5>{item.myTitle}</h5>}
                    <ul>
                      {splittedResponse.map((listItem, id) => {
                        return (
                          <li className="" key={id}>
                            {listItem}
                          </li>
                        );
                      })}
                    </ul>
                    {
                        
                    }
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
