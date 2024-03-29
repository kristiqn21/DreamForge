import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import { preview } from "../assets";
import Loader from "../components/Loader";
import { getRandomPrompt } from '../utils';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    propmt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImg = () => {

  }

  const handleSubmit = () => {

  };

  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value })

  };

  const handleSurpriseMe = () => {
    const randomPropmt= getRandomPrompt(form.propmt);
    setForm({...form, propmt: randomPropmt})

  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px] ">
          Create Image
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]">
          Create a captivating and artistically crafted visuals brought to life
          by the innovative DALL-E AI
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="Kris"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Propmt"
            type="text"
            name="prompt"
            placeholder="a sea otter with a pearl earring by Johannes Vermeer"
            value={form.propmt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-65 flex justify-center items-centre">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.photo}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
          type="button"
          onClick={generateImg}
          className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? 'Generating...' : 'Generate Image'}
            </button> 

        </div>
        <div className="mt-10">
          <p className="mt-2 text-gray-900 text-[14px]">Once you have created the image you want, you can share it with others in the community</p>
          <button
          type="submit"
          className="mt-3 text-white bg-[#336A86] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            {loading ? "Sharing..." : 'Share with the community'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
