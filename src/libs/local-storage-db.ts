interface Topic {
  id: string;
  title: string;
  desc: string;
}

// create
const createTopic = (topic: Topic) => {
  // Retrieve existing topics from local storage
  const storedTopics = localStorage.getItem("topics");
  const topics = storedTopics ? JSON.parse(storedTopics) : [];

  // Push the new topic to the array
  topics.push(topic);

  // Save the updated topics array back to local storage
  localStorage.setItem("topics", JSON.stringify(topics));

  // return topics;
};

// read all
const getAllTopics = () => {
  const storedTopics = localStorage.getItem("topics");
  const topics = storedTopics ? JSON.parse(storedTopics) : [];

  return topics;
};

// read one
const getOneTopicById = (id: string) => {
  const storedTopics = localStorage.getItem("topics");
  const topic = storedTopics && storedTopics.length > 0 ? JSON.parse(storedTopics).find((item: Topic) => item.id === id) : {};

  return topic;
};

// update one
const updateOneTopicById = (id: string, updateTopic: Topic) => {
  const storedTopics = localStorage.getItem("topics");
  if (storedTopics && storedTopics.length > 0) {
    const topics = JSON.parse(storedTopics).filter((item: Topic) => item.id !== id);
    // Save the updated topics array back to local storage
    localStorage.setItem("topics", JSON.stringify([...topics, updateTopic]));
  }
};

// delete one
const deleteOneTopicById = (id: string) => {
  const storedTopics = localStorage.getItem("topics");
  if (storedTopics && storedTopics.length > 0) {
    const topics = JSON.parse(storedTopics).filter((item: Topic) => item.id !== id);
    // Save the updated topics array back to local storage
    localStorage.setItem("topics", JSON.stringify([...topics]));
  }
};

// delete all
const deleteAllTopic = () => {
  localStorage.removeItem("topics");
};

export { createTopic, getAllTopics, getOneTopicById, updateOneTopicById, deleteOneTopicById, deleteAllTopic };
