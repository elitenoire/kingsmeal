import React from "react";

// importing images
import multiple from "../assets/images/multiple.png";
import person from "../assets/images/person.png";

// importing css file
import "./css/About.css";

export default function About() {
  return (
    <>
      <div className="imgBanner">
        <img src={multiple} alt="different food" />
      </div>

      <main>
        <h1>About Us</h1>
        <p>
          KingsMeal is a restaurant on the go! Here we have a variety of
          different cuisines and dishes to choose from.
        </p>

        <h2>Name</h2>
        <p>
          <span>KingsMeal</span> the name comes from the pride we have in our
          different and rich cuisines and the service we provide to our
          customers. We provide the king level services with top hygiene.
        </p>

        <h2>Founders</h2>
        <p>
          <span>KingsMeal</span> was founded by six friends who worked together
          to make this a reality.
        </p>

        <ul className="grid">
          <li>
            <img src={person} alt="person" />
            <a href="https://github.com/elitenoire">Eva Raymond</a>
          </li>
          <li>
            <img src={person} alt="person" />
            <a href="https://github.com/tab21">Tabassum Fatima</a>
          </li>
          <li>
            <img src={person} alt="person" />
            <a href="https://github.com/d-emrys">d-emrys</a>
          </li>
          <li>
            <img src={person} alt="person" />
            <a href="https://github.com/heisluke">Luke Bamtefa</a>
          </li>
          <li>
            <img src={person} alt="person" />
            <a href="https://github.com/andreyscott">Andrew Irorere</a>
          </li>
          <li>
            <img src={person} alt="person" />
            <a href="https://github.com/elsashai">Elsa</a>
          </li>
        </ul>

        <div className="flex">
          <div className="flexItem">
            <h2>Business Hours</h2>
            <div className="flex">
              <div className="left">
                <p>
                  Tuesday-Friday :
                  <br />
                  Saturday-Sunday :
                  <br />
                  Monday :
                </p>
              </div>

              <div className="right">
                <p>
                  11:00am-9:00pm
                  <br /> 11:00am-11:00pm
                  <br /> Closed
                </p>
              </div>
            </div>
            
            <p>INDOOR & OUTDOOR SEATING, TAKEOUT, AND DELIVERY AVAILABLE</p>
          </div>

          <div className="flexItem">
            <h2>Location</h2>
            <p>
              <span>KingsMeal</span> is located at
              <br />
              Virtual address: Near the corner of the Eiffel Tower street.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
