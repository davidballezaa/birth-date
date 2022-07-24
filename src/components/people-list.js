import axios from "axios";
import { useState } from "react";
import PersonCard from "./PersonCard";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function PeopleList() {
  const [people, setPeople] = useState(null);
  const { width, height } = useWindowSize();

  function handleSubmit(e) {
    e.preventDefault();
    const day = e.target.day.value;
    const month = e.target.month.value;
    axios
      .get(`http://localhost:5000/?month=${month}&day=${day}`)
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h1 className="text-center">BIRTH-DATE</h1>
      <h2 className="text-secondary text-center">
        Search for people you share birthday with
      </h2>
      <form onSubmit={handleSubmit} className="row">
        <div className="form-group col-md-6">
          <label>Day: </label>
          <input
            type="number"
            className="form-control"
            name="day"
            required
            min="1"
            max="31"
          />
        </div>

        <div className="form-group col-md-6">
          <label>Month: </label>
          <input
            type="number"
            className="form-control"
            name="month"
            required
            min="0"
            max="12"
          />
        </div>
        <div className="form-group text-center">
          <input
            type="submit"
            value="Search"
            className="btn btn-dark mt-3 mb-3"
          />
        </div>
      </form>
      {people && people.length > 0 && (
        <>
          <Confetti width={width} height={height} />
          <div className="row g-4">
            {people.map((person) => (
              <PersonCard key={person._id} data={person} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
