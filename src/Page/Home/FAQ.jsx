import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "How do I add a new task?",
    answer:
      "Click on the 'Add Task' button, enter the task details, and save it.",
  },
  {
    question: "How can I edit a task?",
    answer:
      "Click on the task you want to edit, update the details, and save your changes.",
  },
  {
    question: "How do I delete a task?",
    answer: "Click on the delete icon next to a task to remove it permanently.",
  },
  {
    question: "Can I reorder my tasks?",
    answer:
      "Yes! You can drag and drop tasks to reorder them within categories.",
  },
  {
    question: "How do I move a task between categories?",
    answer:
      "Simply drag a task to another category (To-Do, In Progress, Done).",
  },
  {
    question: "Is my data saved automatically?",
    answer:
      "Yes, all changes are instantly saved in the database for persistence.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-6">FAQ & Help</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
