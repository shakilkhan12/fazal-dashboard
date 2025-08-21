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

    // Set the cursor back to after the newly inserted tags
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
      <div className="max-w-4xl mx-auto ">
      <div className="flex justify-between items-center mb-10">
          <h2 className="language-heading text-2xl text-black">Privacy & Policy</h2>
          <select
  className="w-[200px] h-[38px] px-[14px] py-[7px] rounded-md focus:outline-none text-[#2F2B3D]"
  style={{
    border: '1px solid rgba(47, 43, 61, 0.22)',
  }}
>
  <option>English</option>
</select>

        </div>

        {/* Toolbar */}<div className="mb-3 flex space-x-3 text-gray-600 text-lg border-b border-gray-300 pb-2">

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

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={termsText}
          onChange={(e) => setTermsText(e.target.value)}
          className="w-full h-[500px] border border-gray-300 p-2 rounded resize-none text-sm text-gray-700"
        />
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

const defaultTerms = `Information Collection and Use
The Khorfakkan Municipality is the sole owner of the information collected on this website and our other digital services. We will not sell, share or rent this information to third parties in ways other than those disclosed in this policy. KM collects information from its users at several different points on this website and via our digital services, including our app.

Personal Data
All personal data that you provide to us must be true, complete and accurate.

You do not need to provide us with any personal data to access many of our resources and services, however some services – such as receiving marketing communications, purchasing items from our store, registering for events, accessing our mobile app, requesting access to certain content and accessing members-only information and resources – requires the collection of personal information.

Sections of SIA’s website and digital services have restricted access to online content. To access content on these sections of the website and digital services, users must first complete a registration form. During registration for our site, users are required to give select personal information and contact information (such as name, address and email address). Users may also be asked to provide optional demographic and other personal information. Some of that information (e.g., interests) is used to keep our content as relevant as possible. Where online access to content is part of a membership or subscription package, registration forms will often contain full subscriber details used to identify and fulfill that subscriber’s account.

When you contact us by email or post, we may keep a record of the correspondence.

If a user wishes to subscribe to SIA’s email communications, a user is asked for contact and delivery information such as name and email address.

Communications
All members will receive essential membership communications, including notices about your membership and renewals, account activation notices and essential information on SIA activities, programs and services.

If you opt in to receive marketing communications from us, you consent to the processing of your data to send you such communications, which may include newsletters and news alerts, surveys and promotions about programs, services and events. We retain a record of your consent.

You can choose to no longer receive marketing communications by contacting us at info@securityindustry.org or clicking unsubscribe from a marketing email. If you do unsubscribe to marketing communications, it may take up to 5 business days for your new preferences to take effect. We shall therefore retain your personal data in our records for marketing purposes until you notify us that you no longer wish to receive marketing emails from us.

Surveys and Polls
From time to time SIA’s websites and digital services may request information from users via a survey. Participation in a survey is completely voluntary, and the user therefore has a choice whether or not to disclose this information. Information requested may include contact information (such as name and email address) and demographic information (such as post code and age level). This information will be used for the purpose of monitoring and improving the functionality of this website, SIA’s other websites, mobile application and other digital services.

Sharing
SIA may share aggregated demographic information with its partners and sponsors. This is not linked to any personal information that can identify an individual person. SIA will also share information when using a credit card processing company to bill users for goods and services, using industry standard security and encryption.

Mobile Application
All SIA users/account holders will have access to our mobile application, commonly referred to as the “mySIA app.” Registrants for specific events will or may be visible to other registered attendees of that event. All registered users will be visible in our app’s user directory, which aids to support services such as direct messaging. This visibility does not display your email but will show your name in addition to fields such as company, job title and certifications (if provided).

By posting or commenting to the community in our mobile application, your message will be visible to other users of our mobile application.

Orders
SIA requests information from users on its order forms. To place an order, a user must provide contact information (like name and email address) and financial information (like credit card number and expiration date). This information is used for billing purposes and to fulfill customer’s orders. If SIA has trouble processing an order, this contact information is used to contact the user. All online transactions are processed via Authorize.net or Stripe.

Data We Automatically Collect
When you visit our digital platforms, we, or third parties on our behalf, automatically collect and store information about your device and your activities. This information could include (a) your computer or other device’s unique ID number; (b) technical information about your device such as type of device, web browser or operating system; (c) your preferences and settings such as time zone and language; and (d) statistical data about your browsing actions and patterns. We collect this information using cookies in accordance with the Cookies and Log Files sections of this policy, and we use the information we collect on an anonymous basis to improve our platforms and the services we provide and for analytical and research purposes.

Cookies
SIA’s websites use cookies; a cookie is a piece of data stored on the user’s hard drive containing information about the user. Usage of cookies is for the convenience of visitors. For instance, by setting a cookie on SIA’s website, a user only needs to log in once, thereby saving time while on the website. If a user rejects the cookie, they may still use the SIA website. Cookies may also enable SIA to track and target the interests of its users in order to enhance user experience.

Security
SIA takes every precaution to protect its users’ information. That is why SIA picked Authorize.net and Stripe as its secure transaction intermediary for online payments. When users submit sensitive information via SIA’s website and Authorize.net and Stripe, your information is protected both online and offline. When SIA’s registration/order form asks users to enter sensitive information (such as credit card number), that information is encrypted and is protected with encryption software, while accessing a secure page, such as SIA’s order form, the lock icon in address bar of web browsers should appears. This confirms that the page is secure and not unlocked, or open, such as when you are “surfing.” While SIA uses SSL encryption to protect sensitive information online, SIA also does everything in its power to protect user information offline. All of SIA’s users’ information, not just sensitive information mentioned above, is restricted in the SIA’s offices. Only employees who need information to perform a specific job (for example, our billing clerk or a customer service representative) are granted access to personally identifiable information. The servers that store personally identifiable information for SIA are maintained in a highly secure environment.
`;
