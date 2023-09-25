"use client"
import BottomBar from "@/components/BottomBar";
import MessageBubble from "@/components/MessageBubble";
import SideBar from "@/components/SideBar";
import Topbar from "@/components/TopBar";
import { auth, db } from "@/firebase";
import { IMessage } from "@/types";
import { User } from "firebase/auth";
import { query, orderBy, collection, doc } from "firebase/firestore";
import { useParams } from "next/navigation";
import React, { useEffect, useRef } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData, useDocumentData } from "react-firebase-hooks/firestore";
import { CgSpinner } from "react-icons/cg";
import { IoChatbubblesOutline } from "react-icons/io5";

const Chat = () => {

    const [user] = useAuthState(auth);
    const { id } = useParams();

    const bottomOfChat = useRef<null | HTMLDivElement>(null);

    const q = query(
        collection(db, "chats", id, "messages"),
        orderBy("timestamp")
    );
    const [messages, loading] = useCollectionData(q);
    const [chat] = useDocumentData(doc(db, "chats", id));

    const getOtherUser = (users: User[], currentUser: User) => {
        return users?.filter((user) => user.email !== currentUser?.email)[0];
    };

    useEffect(() => {
        bottomOfChat.current?.scrollIntoView({
            behavior: "auto",
            block: "start",
        })
    }, [messages]);


    return (
        <>
            <div className="grid w-full grid-cols-8">
                <div className="col-span-2">
                    <SideBar selectedChatId={id} />
                </div>
                <div className="flex flex-col w-full col-span-6 ">
                    <Topbar user={getOtherUser(chat?.usersData, user as User)} />

                    <div className="flex w-full h-full max-h-screen px-6 pt-4 mb-2 overflow-y-scroll no-scrollbar">
                        <div className="flex flex-col w-full h-full">
                            {loading && (
                                <div className="flex items-center justify-center flex-1">
                                    <CgSpinner className="w-12 h-12 text-gray-400 animate-spin" />
                                </div>
                            )}

                            {!loading && messages?.length === 0 && (
                                <div className="flex flex-col items-center justify-center flex-1">
                                    <IoChatbubblesOutline className="w-24 h-24 text-gray-300" />
                                    <p className="text-2xl font-medium tracking-tight text-gray-300">
                                        Start the conversation
                                    </p>
                                </div>
                            )}

                            {messages?.map((msg, index) => (
                                <MessageBubble
                                    user={user!}
                                    photoURL={msg.photoURL}
                                    message={msg as IMessage}
                                    key={index}
                                    numberOfMessages={messages?.length}
                                    currentMessageIndex={index}
                                />
                            ))}
                            <div ref={bottomOfChat} className="py-8"></div>
                        </div>
                    </div>

                    <BottomBar user={user as User} chatId={id} />
                </div>
            </div>
        </>
    )
}

export default Chat