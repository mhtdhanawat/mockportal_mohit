import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Addquestion() {
  return (
    <>
      <div className="main-container">
        <div className="small-container">
          <div className="main-title">
            <Link to="/question">
              <h1>
                <i className="mdi mdi-chevron-left"></i>Add Question{" "}
              </h1>
            </Link>
          </div>
          <div className="col-bx-bottom">
            <div className="form">
              <div className="form-element">
                <div className="col-6">
                  <label>Select Question Type</label>
                  <label className="radio">
                    Text
                    <input type="radio" name="gender" />
                    <i className="input-helper"></i>
                  </label>
                  <label className="radio">
                    Image
                    <input type="radio" name="gender" />
                    <i className="input-helper"></i>
                  </label>
                </div>
              </div>

              <div className="form-element">
                <div className="col-6">
                  <label>Select Exame</label>
                  <select>
                    <option selected="">SSC</option>
                    <option>SBI</option>
                    <option>BANK</option>
                    <option>general studies</option>
                    <option>Bank</option>
                    <option>NABARD</option>
                    <option>IBPS</option>
                    <option>RAILWAY</option>
                    <option>SSC SECTIONAL TEST</option>
                    <option>BANK SECTIONAL TEST</option>
                  </select>
                </div>
                <div className="col-6">
                  <label>Select Subject</label>
                  <select>
                    <option selected="">English</option>
                    <option> Aptitude</option>
                    <option> Math</option>
                    <option> SSC</option>
                    <option> GS</option>
                    <option> Reasoning</option>
                  </select>
                </div>
              </div>

              <div className="form-element">
                <label>Select Question set</label>
                <select>
                  <option selected="">Set 1</option>
                  <option>Set 2</option>
                  <option>Set 3</option>
                  <option>Set 4</option>
                  <option>Set 5</option>
                </select>
              </div>

              <div className="form-element">
                <label>Question</label>
                <textarea></textarea>
              </div>

              <div className="uploadImg uploadImg_1">
                <div className="upload-img">
                  <Link href="#" className="remove-img">
                    <span className="mdi  mdi-close"></span>
                  </Link>
                  <div className="img-border">
                    <div className="add-more-images">Add Image</div>
                    <input
                      id="upload"
                      value="Choose file"
                      className="upload-photo"
                      title=""
                      accept="image/*"
                      // type="file"
                    />
                    <div id="priview_image">
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-element">
                <label>Question In Hindi</label>
                <textarea></textarea>
              </div>

              <div className="form-element">
                <div className="col-6">
                  <label>Option A</label>
                  <input type="text" name="" />
                </div>
                <div className="col-6">
                  <label>Option A in Hindi</label>
                  <input type="text" name="" />
                </div>
              </div>

              <div className="form-element">
                <div className="col-6">
                  <label>Option B</label>
                  <input type="text" name="" />
                </div>
                <div className="col-6">
                  <label>Option B in Hindi</label>
                  <input type="text" name="" />
                </div>
              </div>

              <div className="form-element">
                <div className="col-6">
                  <label>Option C</label>
                  <input type="text" name="" />
                </div>
                <div className="col-6">
                  <label>Option C in Hindi</label>
                  <input type="text" name="" />
                </div>
              </div>

              <div className="form-element">
                <div className="col-6">
                  <label>Option D</label>
                  <input type="text" name="" />
                </div>
                <div className="col-6">
                  <label>Option D in Hindi</label>
                  <input type="text" name="" />
                </div>
              </div>

              <div className="form-element">
                <label>Answer</label>
                <input type="text" name="" />
              </div>

              <div className="form-element">
                <label>Answer in Hindi</label>
                <input type="text" name="" />
              </div>

              <div className="form-element">
                <label>Chose Solution type </label>
                <select>
                  <option selected="">Solution with File</option>
                  <option>Solution with Text</option>
                </select>
              </div>

              <div className="form-element">
                <label>Solution in English </label>
                <textarea> </textarea>
              </div>

              <div className="form-element">
                <label>Solution with File</label>
                <input type="file" name="" />
              </div>

              <div className="form-element">
                <label>Chose Solution type </label>
                <select>
                  <option selected="">Solution with File</option>
                  <option>Solution with Text</option>
                </select>
              </div>

              <div className="form-element">
                <label>Chose Solution type For Hindi </label>
                <textarea> </textarea>
              </div>

              <div className="form-element">
                <label>Solution in Hindi</label>
                <input type="text" name="" />
              </div>

              <div className="form-element">
                <label>Solution with File</label>
                <input type="file" name="" />
              </div>

              <div className="form-element space">
                <Link className=" common-btn" href="#">
                  Submit{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addquestion;
