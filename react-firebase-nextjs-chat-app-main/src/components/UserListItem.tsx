"use client"
import { useRouter } from "next/navigation";
import Moment from "moment";
import { User } from "firebase/auth";
import { IChat } from "@/types";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import Image from "next/image";

interface IUserListItemProps {
    sender: User;
    receiver: User;
    selectedChatId?: string;
    chats: IChat[];
}

export default function UserListItem({ sender, receiver, selectedChatId, chats }: IUserListItemProps) {
    const router = useRouter();

    console.log('receiver', receiver);

    const chatExists = (receiverEmail: string) => {
        const senderEmail = sender.email!;
        return chats?.find(
            (chat: IChat) => chat?.users?.includes(senderEmail) && chat.users.includes(receiverEmail)
        );
    }

    const chat = chatExists(receiver.email!);

    const redirect = (id: string) => {
        router.push(`/chat/${id}`);
    };

    const handleClick = async () => {

        const senderData = {
            displayName: sender.displayName,
            photoURL: sender.photoURL,
            email: sender.email
        };

        const receiverData = {
            displayName: receiver.displayName,
            photoURL: receiver.photoURL,
            email: receiver.email
        };

        if (!chat) {
            const { id } = await addDoc(collection(db, "chats"), {
                usersData: [senderData, receiverData],
                users: [sender.email, receiver.email],
                timestamp: serverTimestamp(),
            });
            redirect(id);
        } else {
            redirect(chat.id);
        }
    }

    return (
        <div className="w-full p-4">
            <div
                className={
                    `w-5/6 mx-auto px-4 flex flex-row  items-center py-2 pointer cursor-pointer ` +
                    (chat && chat.id === selectedChatId
                        ? "border rounded-md"
                        : " ")
                }
                onClick={handleClick}
            >
                <div>
                    <Image
                        src={receiver.photoURL!}
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt={receiver.displayName!}
                    />
                </div>

                <div className="ml-4">
                    <p>
                        {receiver.displayName}
                    </p>
                </div>

                {/* {chat &&
                <div className="flex flex-shrink-0 mt-1 text-sm">
                    {Moment(new Date(chat?.timestamp?.seconds * 1000)).format("MMM DD")}
                </div>
            } */}
            </div>
        </div>
    );
}
