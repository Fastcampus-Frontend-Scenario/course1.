"use client"
import { IMessage } from "@/types";
import { User } from "firebase/auth";
import Moment from "moment";
import Image from "next/image";

interface IMessageBubbleProps {
  user: User;
  message: IMessage;
  photoURL: string;
  numberOfMessages: number;
  currentMessageIndex: number;
}

export default function MessageBubble({
  user,
  message,
  photoURL,
  numberOfMessages,
  currentMessageIndex,
}: IMessageBubbleProps) {
  const sender = message.sender === user?.email;
  return (
    <>
      <div className={!sender ? `flex justify-start` : `flex justify-end`}>
        {!sender &&
          <div className="mr-3">
            <Image
              width={30}
              height={30}
              src={photoURL}
              alt={message.sender}
              className="rounded-full"
            />
          </div>
        }
        <div
          className={
            !sender
              ? `bg-[#D9D9D9] py-3 px-4 rounded-lg rounded-tl-none my-1 text-sm w-auto max-w-lg`
              : `bg-[#EDEDED]  py-3 px-4 rounded-lg rounded-br-none my-1 text-sm w-auto max-w-lg`
          }
        >
          {message.text}
        </div>
      </div>

      {/* {numberOfMessages === currentMessageIndex + 1 && (
        <div className={!sender ? `flex justify-start` : `flex justify-end`}>
          <span className="px-1 text-xs text-gray-400">
            Sent{" "}
            {Moment(new Date(message?.timestamp?.seconds * 1000)).format(
              "MMM DD, YYYY h:mm a"
            )}
          </span>
        </div>
      )} */}
    </>
  );
}
