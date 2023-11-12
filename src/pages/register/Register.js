import React, { useEffect, useState } from "react";
import techie from "../../assets/tech-guy.png";
import purpleStar from '../../assets/starpurp.svg'
import purpleStar1 from '../../assets/purp-sta.svg'
import whiteStar from '../../assets/star.svg'
import greyStar from '../../assets/star-grey.png'
import flare from "../../assets/head-purple-flare.png"
import "./Register.css";
import axios from "axios";
import Notiflix from "notiflix";


const Register = () => {
  const [categoryData, setCategoryData] = useState([]);

  const [regData, setRegData] = useState({
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    category: "",
    group_size: "",
    privacy_poclicy_accepted: false,
  });

  //  fetch data for the category select field
  useEffect(() => {
    axios
      .get("https://backend.getlinked.ai/hackathon/categories-list")
      .then((res) => setCategoryData(res.data));
    console.log(categoryData);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegData({ ...regData, [name]: type === "checkbox" ? checked : value });
  };
  const registerUser = async (e) => {
    e.preventDefault();

    if (regData.privacy_poclicy_accepted) {
      try {
        let response = await axios.post(
          "https://backend.getlinked.ai/hackathon/registration",
          regData
        );
        console.log(response.status);
        Notiflix.Notify.success("Message sent successfully");


        // clears out the form input after submitting
        setRegData({
          team_name: "",
          phone_number: "",
          email: "",
          project_topic: "",
          category: "",
          group_size: "",
          privacy_poclicy_accepted: false,
        });
      } catch (error) {
        console.log(error.message);
        Notiflix.Notify.failure(error.message);
      }
    } else {
      Notiflix.Notify.failure("agree to terms and conditions to continue");
    }
  };
  return (
    <>
      <div className="reg__wrapper flex__wrapper">
        <div className="flex_img">
          <img src={techie} alt="register" />
        </div>

        <div className="register-form">
          <div className="regform-wrapper">
            <h2>Register</h2>
            <div className="container">
              <small>Be part of this movement!</small>
              <div>
                <span>🚶‍♀️🚶‍♂️</span> <hr />
              </div>
            </div>
            <h3>CREATE YOUR ACCOUNT</h3>
            <form action="POST" onSubmit={registerUser}>
              <div className="flex-inputs">
                <div className="form-control">
                  <label htmlFor="teamName"> Team's Name</label>
                  <input
                    type="text"
                    id="teamName"
                    name="team_name"
                    value={regData.team_name}
                    placeholder="Enter the name of your group"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="phoneNumber">Phone</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phone_number"
                    value={regData.phone_number}
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex-inputs">
                <div className="form-control">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={regData.email}
                    placeholder="Enter your email address"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="project">Project Topic</label>
                  <input
                    type="text"
                    id="project"
                    name="project_topic"
                    value={regData.project_topic}
                    placeholder="What is your group project topic"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex-inputs flex-select">
                <div className="form-control">
                  <label htmlFor="category">Category</label>

                  <select
                    id="category"
                    name="category"
                    value={regData.category}
                    onChange={handleChange}
                  >
                    <option defaultValue="">Select your category</option>
                    {categoryData.map((category) => {
                      let { id, name } = category;
                      return (
                        <option key={id} value={id}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="form-control">
                  <label htmlFor="groupSize">Group Size</label>
                  <select
                    id="groupSize"
                    name="group_size"
                    value={regData.group_size}
                    onChange={handleChange}
                  >
                    <option defaultValue="select">Select</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                  </select>
                </div>
              </div>
              <small className="review-txt">
                please review your registration before submitting
              </small>
              <div className="checkbox-wrap">
                <input
                  type="checkbox"
                  name="privacy_poclicy_accepted"
                  value={regData.privacy_poclicy_accepted}
                  onChange={handleChange}
                />
                <small>
                  I agreed with the event terms and conditions and privacy
                  policy
                </small>
              </div>
              <button type="submit" className="btn reg-btn">
                Register Now
              </button>
            </form>
          </div>
        </div>
        <img src={purpleStar} alt="background-asset" className='sec-bg-img asset1 anim_stars' />
        <img src={purpleStar1} alt="background-asset" className='sec-bg-img asset2 anim_delay1' />
        <img src={whiteStar} alt="background-asset" className='sec-bg-img asset3 anim_delay2' />
        <img src={greyStar} alt="background-asset" className='sec-bg-img asset4 anim_stars' />
        <img src={flare} alt="background-asset" className='sec-bg-img full-flare' />
      </div>
    </>
  );
};

export default Register;
