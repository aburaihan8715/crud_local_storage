import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul className="mt-6 flex flex-col gap-4">
      <li className="border py-6 px-4  flex justify-between rounded">
        <div>
          <h2 className="text-2xl font-medium uppercase">html</h2>
          <p className="capitalize">hyper text markup language</p>
        </div>
        <div className="flex gap-2 items-start">
          <TopicDeleteBtn />
          <Link to={`/editTopic/123`} className="bg-green-600 px-3 py-2 rounded capitalize">
            edit
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default Home;

// delete button
const TopicDeleteBtn = () => {
  const deleteHandler = () => {};
  return (
    <button onClick={deleteHandler} className="bg-red-600 px-3 py-2 rounded capitalize">
      delete
    </button>
  );
};
