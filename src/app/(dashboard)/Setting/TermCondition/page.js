'use client';

import { useState, useRef } from 'react';
import AccountLayout from '../page';
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaListUl,
  FaListOl,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from 'react-icons/fa';

export default function TermsPage() {
  const [language, setLanguage] = useState('English');
  const [termsText, setTermsText] = useState(defaultTerms);
  const textareaRef = useRef(null);

  const applyFormatting = (tagStart, tagEnd) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = termsText.substring(start, end);
    const before = termsText.substring(0, start);
    const after = termsText.substring(end);
    const newText = `${before}${tagStart}${selectedText}${tagEnd}${after}`;
    setTermsText(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + tagStart.length + selectedText.length + tagEnd.length;
    }, 0);
  };

  const handleSave = () => {
    alert('Changes saved!');
  };

  return (
    <AccountLayout>
      <div className="max-w-4xl mx-auto  bg-white ">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="language-heading text-2xl text-black">Terms & Conditions</h2>
          <select
  className="w-[200px] h-[38px] px-[14px] py-[7px] rounded-md focus:outline-none text-[#2F2B3D]"
  style={{
    border: '1px solid rgba(47, 43, 61, 0.22)',
  }}
>
  <option>English</option>
</select>

        </div>

        {/* Toolbar */}
        <div className="mb-3 flex space-x-3 text-gray-600 text-lg border-b pb-2 " style={{
          borderColor: 'rgba(47, 43, 61, 0.22)',
        }}>
          <button onClick={() => applyFormatting('<b>', '</b>')} title="Bold"><FaBold /></button>
          <button onClick={() => applyFormatting('<i>', '</i>')} title="Italic"><FaItalic /></button>
          <button onClick={() => applyFormatting('<u>', '</u>')} title="Underline"><FaUnderline /></button>
          <button onClick={() => applyFormatting('<s>', '</s>')} title="Strikethrough"><FaStrikethrough /></button>
          <button onClick={() => applyFormatting('<ul><li>', '</li></ul>')} title="Unordered List"><FaListUl /></button>
          <button onClick={() => applyFormatting('<ol><li>', '</li></ol>')} title="Ordered List"><FaListOl /></button>
          <button title="Align Left"><FaAlignLeft /></button>
          <button title="Align Center"><FaAlignCenter /></button>
          <button title="Align Right"><FaAlignRight /></button>
        </div>

        {/* Textarea with lined background */}
        <textarea
          ref={textareaRef}
          value={termsText}
          onChange={(e) => setTermsText(e.target.value)}
          className="w-full h-[500px] border border-gray-300 p-3 rounded resize-none text-sm text-gray-700"
          style={{
            backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 24px, rgba(0,0,0,0.03) 25px)',
            backgroundSize: '100% 25px',
          }}
        />

        {/* Save Button */}
      <div className="flex justify-end">
  <button
    onClick={handleSave}
    className="mt-4 text-white font-medium py-2 px-4 rounded transition-all"
    style={{
      background: 'linear-gradient(270deg, rgba(43, 182, 115, 0.7), #2BB673)',
    }}
  >
    Save Changes
  </button>
</div>


      </div>
    </AccountLayout>
  );
}


const defaultTerms = `Introduction
These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.
These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
Minors or people below 18 years old are not allowed to use this Website.

Intellectual Property Rights
Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.
You are granted limited license only for purposes of viewing the material contained on this Website.

Restrictions
You are specifically restricted from all of the following:
publishing any Website material in any other media;
selling, sublicensing and/or otherwise commercializing any Website material;
publicly performing and/or showing any Website material;
using this Website in any way that is or may be damaging to this Website;
using this Website in any way that impacts user access to this Website;
using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
using this Website to engage in any advertising or marketing.
Certain areas of this Website are restricted from being access by you and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.

Your Content
In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Company Name a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
Your Content must be your own and must not be invading any third-party's rights. Company Name reserves the right to remove any of Your Content from this Website at any time without notice.
No warranties
This Website is provided “as is,” with all faults, and Company Name express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
Limitation of liability
In no event shall Company Name, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Company Name, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
Indemnification
You hereby indemnify to the fullest extent Company Name from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
Severability
If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
Variation of Terms
Company Name is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
Assignment
The Company Name is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
Entire Agreement
These Terms constitute the entire agreement between Company Name and you in relation to your use of this Website, and supersede all prior agreements and understandings.
Governing Law & Jurisdiction
These Terms will be governed by and interpreted in accordance with the laws of the State of Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Country for the resolution of any disputes.`;
