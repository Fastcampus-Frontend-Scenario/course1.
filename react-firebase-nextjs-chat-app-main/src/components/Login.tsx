'use client'
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { FormEvent, useState } from "react";

export default function Login() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <>
      <section className="flex items-center justify-center min-h-screen">
        <div className="w-[392px]">
          <h2 className="text-2xl font-extrabold text-center text-gray-800">
            로그인
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm  text-[#999999]"
                htmlFor="email"
              >
                이메일
              </label>
              <input
                className="border border-[#CFCFCF]  text-sm rounded-md  block w-full p-2.5 "
                id="email"
                placeholder="이메일을 입력하세요"
                type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm  text-[#999999]"
                htmlFor="password"
              >
                비밀번호
              </label>
              <input
                className="border border-[#CFCFCF]  text-sm rounded-md  block w-full p-2.5 "
                id="password"
                placeholder="비밀번호를 입력하세요"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-10 text-center">
              <button
                type="submit"
                className=" px-6 py-2 duration-200 border rounded-3xl	 bg-[#00B98D] w-full text-white hover:bg-white hover:text-[#00B98D]"
              >
                로그인
              </button>

              <button
                className="w-full px-6 py-2 mt-4 duration-200 border rounded-3xl hover:bg-[#00B98D] hover:text-white"
                onClick={() => signInWithGoogle()}
              >
                Google 계정으로 로그인
              </button>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}
