"use client";
import "./home.css";
import toastr from "toastr";
import { login } from "@/app/lib/actions";
import { useActionState, useEffect, useState } from "react";
import ShowBusy from "../components/busy";

import EyeSvg from "../../../../public/images/eye.svg";
import GLogo from '../../../../public/img/svg/google_logo.svg';

export default function Page() {
    // const { data: session, status } = useSession();

    const [busy, setBusy] = useState(false);
    const [email, setEmail] = useState("");
    // const searchParams = useSearchParams();
    // const [errorMessage, formAction, isPending] = useActionState(
    //     authenticate,
    //     undefined
    // );
    const [state, action, pending] = useActionState(login, undefined);

    const handler = (e) => {
        setEmail(e.target.value);
    };

    // console.log("Logging Session: ", session);
    useEffect(() => {
        console.log("Logging Action State:", pending);

        setBusy(pending ? 1 : 0);
    }, [pending]);

    useEffect(() => {
        if (state?.errors?.username) {
            toastr.error(state?.errors?.username);
            setEmail(email);
        }
        if (state?.errors?.password) {
            toastr.error(state?.errors?.password);
        }
        if(state?.message?.length){
            toastr.error(state.message)
        }
    }, [state?.errors]);

    return (
        <>
            <main className="gradient-bg min-h-screen flex items-center justify-center p-4">
                <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-8 lg:p-12 form-container">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">
                                            C
                                        </span>
                                    </div>
                                    <span className="text-gray-800 font-semibold text-lg">
                                        Collage
                                    </span>
                                    <span className="text-yellow-500 font-semibold text-lg">
                                        Forum
                                    </span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h1 className="text-3xl font-bold text-gray-900 mb-2 flex justify-center align-center">
                                    Login
                                </h1>
                            </div>

                            <form action={action} className="space-y-6">
                                <input
                                    type="hidden"
                                    name="redirectTo"
                                    value={"/dashboard"}
                                ></input>
                                <div>
                                    <label className="block text-gray-700 text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        onInput={handler}
                                        name="username"
                                        value={email.length ? email : ""}
                                        className={`input-field w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-200 ${
                                            state?.errors?.username
                                                ? "border-red-500 ring-1 ring-red-500"
                                                : ""
                                        }`}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm font-medium mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            name="password"
                                            className={`input-field w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-200 pr-12 ${
                                                state?.errors?.password
                                                    ? "border-red-500 ring-1 ring-red-500"
                                                    : ""
                                            }`}
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            <EyeSvg></EyeSvg>
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="submit-btn w-full py-3 px-6 rounded-xl text-white font-semibold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                                >
                                    Submit
                                </button>
                            </form>

                            <div className="mt-8 flex justify-between items-center text-sm">
                                <div className="rem flex aic text-gray-600 font-medium hover:text-gray-800">
                                    <input
                                        id="rem"
                                        type="checkbox"
                                        name="rem"
                                    ></input>
                                    <label htmlFor="rem" className="px-2">
                                        Remember Me
                                    </label>
                                </div>

                                <button className="google-btn">
                                    <GLogo></GLogo>
                                    <span>Sign in with Google</span>
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover"
                                style={{
                                    backgroundImage:
                                        "url('/images/IMG_4051.PNG')",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </main>

            <ShowBusy busy={busy} msg={"Authenticating..."}></ShowBusy>
        </>
    );
}
