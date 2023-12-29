import { FormEvent, useRef } from "react";

const CreateTopic = () => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className="mt-8">
      <div className="flex flex-col gap-4">
        {/* topic title input */}
        <input ref={titleRef} className="py-2 px-3 border rounded text-black" type="text" placeholder="Topic title" />

        {/* topic description input */}
        <input ref={descRef} className="py-2 px-3 border rounded text-black" type="text" placeholder="Topic description" />

        {/* topic action button */}
        <div className=" flex justify-end">
          <button className="bg-red-600 py-2 px-3 rounded capitalize">submit</button>
        </div>
      </div>
    </form>
  );
};

export default CreateTopic;
