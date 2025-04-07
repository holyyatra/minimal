import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const FaqAccordion: React.FC = () => {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="w-full max-w-xl mx-auto rounded-md shadow-md"
    >
      {/* FAQs */}
      <Accordion.Item value="faq" className="border-b border-gray-300">
        <Accordion.Header>
          <Accordion.Trigger className="flex w-full justify-between items-center p-4 text-left font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors">
            FAQs
            <ChevronDownIcon className="transition-transform duration-200 accordion-chevron" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="p-4 bg-white text-gray-700">
          <p className="mb-2">
            <strong>Q1:</strong> How can I book a helicopter yatra?<br />
            <strong>A:</strong> You can book via our website or contact us directly.
          </p>
          <p>
            <strong>Q2:</strong> What documents are required?<br />
            <strong>A:</strong> Valid ID proof and booking confirmation are needed.
          </p>
        </Accordion.Content>
      </Accordion.Item>

      {/* Contact Info */}
      <Accordion.Item value="contact" className="border-b border-gray-300">
        <Accordion.Header>
          <Accordion.Trigger className="flex w-full justify-between items-center p-4 text-left font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors">
            Contact Information
            <ChevronDownIcon className="transition-transform duration-200 accordion-chevron" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="p-4 bg-white text-gray-700">
          <p><strong>Phone:</strong> +918757794679</p>
          <p><strong>Email:</strong> support@yatraexample.com</p>
          <p><strong>Address:</strong> Rishikesh, Uttarakhand, India</p>
        </Accordion.Content>
      </Accordion.Item>

      {/* WhatsApp */}
      <Accordion.Item value="whatsapp">
        <Accordion.Header>
          <Accordion.Trigger className="flex w-full justify-between items-center p-4 text-left font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors">
            Connect on WhatsApp
            <ChevronDownIcon className="transition-transform duration-200 accordion-chevron" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="p-4 bg-white text-gray-700">
          <a
            href="https://wa.me/+918757794679"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Chat on WhatsApp
          </a>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default FaqAccordion;
