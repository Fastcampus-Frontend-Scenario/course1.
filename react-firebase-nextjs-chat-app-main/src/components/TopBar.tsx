import { User } from "firebase/auth";
import Image from "next/image";

interface ITopbarProps {
  user: User
}

export default function Topbar({ user }: ITopbarProps) {
  return (
    <div className="h-[70px] flex items-center w-full px-6 py-4 space-x-4 border-b-[1px]">
      <Image
        src={user?.photoURL!}
        alt={user?.email!}
        width={40}
        height={40}
        className="object-cover rounded-full"
      />

      <span className="font-bold">
        {user?.displayName}
      </span>
    </div>
  );
}
