"use client";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

type Props = {};

const Contact = (props: Props) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const Submit = async (e: any) => {
    e.preventDefault();
    const form = e.target;

    setTimeout(() => {
      setSuccess(true);
      let subject = form.subject.value;
      let mailBody = `
        Name: ${form.name.value} \n
        Email:${form.email.value} \n \n
        Message: ${form.message.value}
    `;
      window.open(
        `mailto:healthladakh@gmail.com?subject=${subject}&body=${mailBody}`,
        "_blank",
        "noopener,noreferrer"
      );
    }, 1000);
  };
  return (
    <div id="Contact" className="bg-white text-black">
      <div className="flex justify-between max-w-7xl mx-auto w-full h-full px-8  py-24 gap-24">
        <div className="w-full">
          <form onSubmit={Submit}>
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="text-sm mt-1 text-gray-500">
              <i className="fa fa-envelope" /> healthladakh@gmail.com
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <Input
                name="name"
                placeholder="Name"
                startsWith={<i className="fa fa-user" />}
              />
              <Input
                name="email"
                placeholder="Email"
                startsWith={<i className="fa fa-envelope" />}
              />
              <Input
                name="subject"
                placeholder="Subject"
                startsWith={<i className="fa fa-envelope" />}
              />
              <Input
                name="message"
                wrapper="textarea"
                placeholder="Message"
                startsWith={<i className="fa fa-comment" />}
              />
            </div>

            <div className="flex items-center gap-4 justify-between mt-4">
              {!success && !error && <div />}
              {!success && error && (
                <p className="bg-red-500/5 px-4 py-2 rounded-lg shadow-xl text-red-500 italic flex items-center gap-2">
                  <i className="fa fa-exclamation-circle" />
                  {error}
                </p>
              )}
              {success && (
                <p className="bg-green-500/5 px-4 py-2 rounded-lg shadow-xl text-green-500 italic flex items-center gap-2">
                  <i className="fa fa-check-circle" />
                  Message sent successfully
                </p>
              )}

              <Button
                disabled={loading}
                className={`flex items-center gap-4 ${
                  loading && "opacity-50 cursor-not-allowed"
                }`}
              >
                {loading && <i className="fal fa-spinner-third fa-spin" />}
                {!loading && (
                  <>
                    <i className="fa fa-paper-plane" />
                    Send
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
