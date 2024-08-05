import { useState } from "react";
import FaqItems, { FaqItem } from "../../scenes/faq/questions";
import { Outlet } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const isAbove = useMediaQuery("(min-width: 1060px)");

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex body-font overflow-hidden mx-auto w-full ">
      {isAbove ? (
        <>
      <div className="md:py-5 lg:py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {FaqItems.map((item: FaqItem, index: number) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="border rounded-lg p-6 w-full">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h2 className=" text-lg lg:text-xl ">{item.question}</h2>
                  <span className="text-lg lg:text-3xl">
                    {expandedIndex === index ? "-" : "+"}
                  </span>
                </div>
                {expandedIndex === index && (
                  <p
                    className="mt-4 text-sm lg:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: item.answer.replace(/\n/g, "<br>"),
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
      ) : (
        <div className="w-screen flex mt-3">
        <div className=" mx-auto">
          <div className="flex flex-wrap">
            {FaqItems.map((item: FaqItem, index: number) => (
              <div key={index} className="p-4 w-full">
                <div className="border rounded-lg p-6 w-full">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <h2 className="text-xl">{item.question}</h2>
                    <span className="text-3xl">
                      {expandedIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  {expandedIndex === index && (
                    <p
                      className="mt-4 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: item.answer.replace(/\n/g, "<br>"),
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
      <Outlet />
    </div>
  );
};

export default Faq;
