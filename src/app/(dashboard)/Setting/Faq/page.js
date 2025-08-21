'use client';

import { useState } from 'react';
import AccountLayout from '../page';

export default function FAQPage() {
  const [faqList, setFaqList] = useState([
    { question: '', answer: '', open: true },
    { question: '', answer: '', open: true },
  ]);

  const toggleAccordion = (index) => {
    const newList = faqList.map((item, i) =>
      i === index ? { ...item, open: !item.open } : item
    );
    setFaqList(newList);
  };

  const handleInputChange = (index, field, value) => {
    const newList = [...faqList];
    newList[index][field] = value;
    setFaqList(newList);
  };

  const addQuestion = () => {
    setFaqList([...faqList, { question: '', answer: '', open: true }]);
  };

  const removeQuestion = (index) => {
    const newList = [...faqList];
    newList.splice(index, 1);
    setFaqList(newList);
  };

  const saveChanges = () => {
    alert('Changes saved!');
    console.log(faqList);
  };

  return (
    <AccountLayout>
      <div className="bg-white">
        <div className="  py-1">
          {/* Header with dropdown */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="language-heading text-2xl text-black">Frequently Asked Questions</h2>
            
            <select
  className="w-[200px] h-[38px] px-[14px] py-[7px] rounded-md focus:outline-none text-[#2F2B3D] border"
  style={{ borderColor: 'rgba(47, 43, 61, 0.22)' }}
>
  <option>English</option>
</select>

          </div>

          {/* Add Question Button */}
          <div className="flex justify-end mb-5">
            <button
              onClick={addQuestion}
              className="text-white font-medium py-2 px-6 rounded transition-all"
              style={{
                background: 'linear-gradient(270deg, rgba(43, 182, 115, 0.7), #2BB673)',
              }}
            >
              Add Question
            </button>
          </div>

          {/* FAQ Items */}
         {faqList.map((faq, index) => (
  <div key={index} className="mb-1 p-4 ">
    
    <label className="font-medium text-black">Question {index + 1}</label>
    {/* Question row */}
    <div className="flex items-center gap-2 mb-3">
     
    
      <input
        type="text"
        placeholder={`Enter Question ${index + 1} Here`}
        value={faq.question}
        onChange={(e) =>
          handleInputChange(index, 'question', e.target.value)
        }
        className="flex-1 p-2 border border-gray-300 rounded text-sm"
      />
      <button
        onClick={() => removeQuestion(index)}
        className="text-white bg-red-400 hover:bg-red-500 px-3 py-2 rounded"
      >
        –
      </button>
    </div>

    {/* Answer field */}
    <label className="font-medium text-black">Answer {index + 1}</label>
    <textarea
      placeholder="Enter Answer Here"
      value={faq.answer}
      onChange={(e) =>
        handleInputChange(index, 'answer', e.target.value)
      }
      className="w-full p-2 border border-gray-300 rounded text-sm"
      rows={3}
    />
  </div>
))}

          {/* Save Changes Button */}
          <div className="flex justify-end">
            <button
              onClick={saveChanges}
              className="mt-2 text-white font-medium py-2 px-6 rounded transition-all"
              style={{
                background: 'linear-gradient(270deg, rgba(43, 182, 115, 0.7), #2BB673)',
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
}
