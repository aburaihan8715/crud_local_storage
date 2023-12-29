import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Topic } from "../types";
import { getOneTopicById, updateOneTopicById } from "../libs/local-storage-db";

const EditTopic = () => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLInputElement | null>(null);
  const [topic, setTopic] = useState<Topic | null>(null);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id as string;

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!titleRef.current?.value || !descRef.current?.value) return alert("Input should not be empty!");
    const form = e.currentTarget;
    const updatedTopic = {
      id: id,
      title: titleRef.current.value,
      desc: descRef.current.value,
    };
    updateOneTopicById(id, updatedTopic);
    alert("Topic updated");
    form.reset();
    navigate("/");
  };

  useEffect(() => {
    const topicData = getOneTopicById(id);
    topicData && setTopic(topicData);
  }, [id]);

  return (
    <form onSubmit={submitHandler} className="mt-8">
      <div className="flex flex-col gap-4">
        {/* topic title input */}
        <input defaultValue={topic?.title} ref={titleRef} className="py-2 px-3 border rounded text-black" type="text" placeholder="Topic title" />

        {/* topic description input */}
        <input defaultValue={topic?.desc} ref={descRef} className="py-2 px-3 border rounded text-black" type="text" placeholder="Topic description" />

        {/* topic action button */}
        <div className=" flex justify-end">
          <button className="bg-red-600 py-2 px-3 rounded capitalize">submit</button>
        </div>
      </div>
    </form>
  );
};

export default EditTopic;
