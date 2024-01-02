let fullName = document.querySelector(".full-name");
let userName = document.querySelector("#username");
let email = document.querySelector(".email");
let phone = document.querySelector(".phone");
let country = document.querySelector(".country");
let state = document.querySelector(".state");
let image = document.querySelector("img");

const fetchUser = () => {
  fetch("https://randomuser.me/api/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const user = document.querySelector(".user");

      // console.log(data.results[0])
      const results = data.results[0];

      if (results.gender === "female") {
        document.body.style.backgroundColor = "#ff5bfa";
      } else {
        document.body.style.backgroundColor = "#00c8ff";
      }
      user.innerHTML = `
      <div class="user-card">
        <div class="page-content page-container" id="page-content">
          <div class="padding">
            <div class="row container d-flex justify-content-center">
              <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                  <div class="row m-l-0 m-r-0">
                    <div class="col-sm-4 bg-c-lite-green user-profile">
                      <div class="card-block text-center text-white">
                        <div class="m-b-25">
                          <img
                            src="${results.picture.medium}"
                            class="img-radius"
                            alt="User-Profile-Image"
                          />
                        </div>
                        <h5 class="full-name f-w-600">${results.name.first} ${results.name.last}</h5>
                        <p id="username">${results.login.username}</p>
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="card-block">
                        <h6 class="m-b-20 p-b-5 b-b-default info f-w-600">
                          Information
                        </h6>
                        <div class="row">
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Email</p>
                            <h6 class="text-muted email f-w-400">
                              ${results.email}
                            </h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Phone</p>
                            <h6 class="text-muted phone f-w-400">
                              ${results.phone}
                            </h6>
                          </div>
                        </div>
                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                          Address
                        </h6>
                        <div class="row">
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Country</p>
                            <h6 class="text-muted country f-w-400">
                            ${results.location.country}
                            </h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">State</p>
                            <h6 class="text-muted state f-w-400">${results.location.state}</h6>
                          </div>
                        </div>
                        <ul class="social-link list-unstyled m-t-40 m-b-10">
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="facebook"
                              data-abc="true"
                              ><i
                                class="mdi mdi-facebook feather icon-facebook facebook"
                                aria-hidden="true"
                              ></i
                            ></a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="twitter"
                              data-abc="true"
                              ><i
                                class="mdi mdi-twitter feather icon-twitter twitter"
                                aria-hidden="true"
                              ></i
                            ></a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="instagram"
                              data-abc="true"
                              ><i
                                class="mdi mdi-instagram feather icon-instagram instagram"
                                aria-hidden="true"
                              ></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    });
};

document.addEventListener("DOMContentLoaded", fetchUser);
document.querySelector("#generate").addEventListener("click", fetchUser);
