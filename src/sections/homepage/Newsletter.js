import { db } from "@/firebase";
import { headingFont } from "@/fonts";
import { addDoc, collection } from "firebase/firestore";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { validate } from 'react-email-validator';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [success, setWasSuccess] = useState(true);
  const [attemptedToSendEmail, setAttemptedToSendEmail] = useState(false);

  const onSubmit = () => {
    setIsLoading(true)
    if (email && validate(email)){
    setAttemptedToSendEmail(true)
    setInputError(false);
    addDoc(collection(db, 'newsletter-emails'), {
      email
    }).then(() => {
      setWasSuccess(true)
      setIsLoading(false)
    }).catch((error) => {
      setWasSuccess(false)
      console.error(`There was an error saving email to DB: ${error}`)
      setIsLoading(false)
    })
  } else {
    setInputError(true);
    setIsLoading(false);
  }
  }

  return (
  <main className="py-16 md:py-32 min-[1200px]:py-36 px-8 md:px-20 flex flex-col gap-8 min-[1200px]:gap-16">
        <div className="">
          <p className={`${headingFont.className} text-[36px] md:text-[48px] min-[1200px]:text-[56px] border-t-2 pt-3 border-t-black`}>Email list</p>
        </div>
        <div className="flex flex-col gap-10 min-[1200px]:gap-12">
          <p className={`${headingFont.className} text-[40px] md:text-[60px] min-[1200px]:text-[80px] leading-[1.1]`}>Get engineering insights and articles straight to your inbox</p>
          <div className="flex flex-col gap-3">
            {!attemptedToSendEmail && <>
          <div className="flex flex-col md:flex-row gap-3">
            <input value={email} type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Your email" className={`border w-full md:w-[40%] ${inputError ? 'border-red-300' : 'border-slate-300'} px-5 py-4 focus:outline-black rounded-lg`} />
            <button onClick={onSubmit} className="px-10 py-4 bg-black text-white rounded-lg w-full justify-center md:w-auto flex flex-row items-center gap-2 text-center disabled:opacity-50" disabled={loading}>{loading && <Oval height={16} strokeWidth={4}  color="#fff" secondaryColor="#95A3B8" width={16} />} Subscribe</button>
          </div>
          <p className="text-slate-500">No spam, unsubscribe at any time</p>
          </>} 
          {success && attemptedToSendEmail &&
          <div className="flex flex-row items-center gap-1.5">
            <CheckCircleIcon className="h-6 w-6 text-green-600" />
            <p className="text-green-600 text-xl">You've been successfully added to my newsletter :)</p>
          </div>} {!success && attemptedToSendEmail && <div className="flex flex-row items-center gap-1.5">
            <XCircleIcon className="h-6 w-6 text-red-600" />
            <p className="text-red-600 text-xl">There was a problem adding you to my newsletter :(</p>
          </div>}
          </div>
        </div>
      </main>
)};

export default Newsletter;
