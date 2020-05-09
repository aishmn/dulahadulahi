import React, { Fragment } from "react";

const Search = () => {
  return (
    <Fragment>
      <div
        className="jumbotron card card-image "
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "luminosity",
        }}
      >
        <div class=""></div>
        <div className="text-center py-5 px-4">
          <div>
            <h1 className="card-title h1-responsive my-5 text-uppercase text-danger font-weight-bold display-2">
              Search your life partner today!
            </h1>
            <p className="mx-5 mb-5 ">
              <form className="form  ">
                <div className="form-row justify-content-md-center">
                  <div className="col-md-6">
                    <div className="md-form mt-0 ">
                      <input
                        type="text"
                        className="form-control text-center text-white bg-white rounded-pill h6-responsive"
                        placeholder="What do you want to search?"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <button className="form-control btn-danger">
                      Search now.
                    </button>
                  </div>
                </div>
              </form>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
