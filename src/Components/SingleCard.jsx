import React from "react";
import { BsDatabaseFill } from "react-icons/bs";
import { LuMessagesSquare, LuCalendarDays, LuPaperclip,LuChurch } from "react-icons/lu";

const SingleCard = ({ card, SetModalData, tittle }) => {
  const openmodal = (id, tittle) => {
    const data = { id, tittle };
    SetModalData(data);
  };
  return (
    <>
      <label
        htmlFor="my_modal_6"
        className="p-5 bg-white my-2 block rounded-md space-y-5 text-sm cursor-pointer"
        onClick={() => {
          openmodal(card?._id, tittle);
        }}
      >
        {/* first section */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              className="w-10 h-10 rounded-full"
              src={card?.clientImg}
              alt=""
            />
            <h1 className="text-sm font-bold">{card?.client}</h1>
          </div>
          <div className="flex justify-between items-center gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src={card?.userPic}
              alt=""
            />
            <h1 className="text-sm font-bold">{card?.userName}</h1>
          </div>
        </div>
        {/* secound section */}
        <div className="flex justify-between items-center gap-10">
          <p>
            <BsDatabaseFill className="inline-block text-xs font-thin" /> {card?.details}
          </p>
          <span className="px-2 py-1 bg-base-300 rounded-md flex justify-between items-center gap-2">
            <LuChurch/>
            {card?.count}
          </span>
        </div>
        {/* third section */}
        <div className="flex justify-between items-center font-bold">
          <span className="flex gap-2 justify-center items-center">
            <img
              className="w-8 h-8 rounded-full"
              src={card?.clientImg}
              alt=""
            />
            <img
              className="w-8 h-8 rounded-full"
              src={card?.userPic}
              alt=""
            />
          </span>
          <span className="px-2 py-2 bg-base-300 rounded-full">
            {card?.member}+
          </span>
          <span className="flex justify-center items-center gap-1">
            <LuMessagesSquare /> {card?.Message}
          </span>
          <span className="flex justify-center items-center gap-1">
            <LuPaperclip />
            {card?.attachments}
          </span>
          <span className="px-2 py-1 bg-base-300 rounded-md flex justify-center items-center gap-1">
            {" "}
            <LuCalendarDays />
            {card?.date}
          </span>
        </div>
      </label>
    </>
  );
};

export default SingleCard;
