import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteAllTopic, deleteOneTopicById, getAllTopics } from "../libs/local-storage-db";
import { Topic } from "../types";
import Message from "../components/ui/Message";

const Home = () => {
  const [topics, setTopics] = useState<Topic[] | null>(null);

  // delete all
  const deleteAllHandler = () => {
    deleteAllTopic();
    alert("Topic deleted");
    window.location.reload();
  };

  useEffect(() => {
    const topicsData = getAllTopics();
    topicsData && setTopics(topicsData);
  }, []);
  // console.log(topics);
  return (
    <div>
      <ul className="mt-6 flex flex-col gap-4">
        {topics ? (
          topics.map((topic: Topic) => (
            <li key={topic.id} className="border py-6 px-4  flex justify-between rounded">
              <div>
                <h2 className="text-2xl font-medium uppercase">{topic.title}</h2>
                <p className="capitalize">{topic.desc}</p>
              </div>
              <div className="flex gap-2 items-start">
                <TopicDeleteBtn id={topic.id} />
                <Link to={`/editTopic/${topic.id}`} className="bg-green-600 px-3 py-2 rounded capitalize">
                  edit
                </Link>
              </div>
            </li>
          ))
        ) : (
          <Message>No topics to display!</Message>
        )}
      </ul>
      {topics && topics.length > 0 && (
        <div className="text-center mt-2">
          <button onClick={deleteAllHandler} className="bg-red-600 px-3 py-2 rounded capitalize">
            delete all
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

// delete one by id button
const TopicDeleteBtn = ({ id }: { id: string }) => {
  const deleteHandler = () => {
    deleteOneTopicById(id);
    alert("Topic deleted");
    window.location.reload();
  };
  return (
    <button onClick={deleteHandler} className="bg-red-600 px-3 py-2 rounded capitalize">
      delete
    </button>
  );
};
