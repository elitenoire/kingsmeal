// importing images
import multiple from "../../assets/images/multiple.jpg";
import evaUrl from "../../assets/images/eva.webp";
import elsaUrl from "../../assets/images/elsa.webp";
import fatimaUrl from "../../assets/images/fatima.webp";
import andreyUrl from "../../assets/images/andrey.webp";
import lukeUrl from "../../assets/images/luke.webp";
import demrysUrl from "../../assets/images/demrys.webp";

// importing css file
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-img-banner">
        <img src={multiple} alt="different food" />
      </div>
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          <span className="highlight">KingsMeal</span> is a restaurant on the go! Here we have a variety of
          different cuisines and dishes to choose from.
        </p>

        <h2>Name</h2>
        <p>
          <span className="highlight">KingsMeal</span> the name comes from the pride we have in our
          different and rich cuisines and the service we provide to our
          customers. We provide the king level services with top hygiene.
        </p>

        <h2>Founders</h2>
        <p>
          <span className="highlight">KingsMeal</span> was founded by six friends who worked together
          to make this a reality.
        </p>

        <ul className="about-grid">
          <li>
            <img src={evaUrl} alt="person" />
            <a href="https://github.com/elitenoire" target="_blank" rel="noreferrer">Eva Raymond</a>
          </li>
          <li>
            <img src={fatimaUrl} alt="person" />
            <a href="https://github.com/tab21" target="_blank" rel="noreferrer">Tabassum Fatima</a>
          </li>
          <li>
            <img src={demrysUrl} alt="person" />
            <a href="https://github.com/d-emrys" target="_blank" rel="noreferrer">d-emrys</a>
          </li>
          <li>
            <img src={lukeUrl} alt="person" />
            <a href="https://github.com/heisluke" target="_blank" rel="noreferrer">Luke Bamtefa</a>
          </li>
          <li>
            <img src={andreyUrl} alt="person" />
            <a href="https://github.com/andreyscott" target="_blank" rel="noreferrer">Andrew Irorere</a>
          </li>
          <li>
            <img src={elsaUrl} alt="person" />
            <a href="https://github.com/elsashai" target="_blank" rel="noreferrer">Elsa</a>
          </li>
        </ul>

        <p className="about-shoutout">We are a team of young & beautiful people with a passion for tasty and traditional food.
          <span>- Team KingsMeal</span>
        </p>

        <div className="flex">
          <div className="flexItem">
            <h2>Business Hours</h2>
            <div className="flex">
              <div className="about-align-left">
                <p>
                  Tuesday-Friday :
                  <br />
                  Saturday-Sunday :
                  <br />
                  Monday :
                </p>
              </div>

              <div className="about-align-right">
                <p>
                  11:00am-9:00pm
                  <br /> 11:00am-11:00pm
                  <br /> Closed
                </p>
              </div>
            </div>
            <p className="about-info">INDOOR & OUTDOOR SEATING, TAKEOUT, AND DELIVERY AVAILABLE</p>
          </div>

          <div className="flexItem">
            <h2>Location</h2>
            <p>
              <span className="highlight">KingsMeal</span> is located at
              <br />
              Virtual address: Near the corner of the Eiffel Tower street.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
