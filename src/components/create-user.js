import axios from "axios";

export default function CreateUser() {
  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      name: e.target.name.value,
      surname: e.target.surname.value,
      birthdayDay: e.target.day.value,
      birthdayMonth: e.target.month.value,
      birthdayYear: e.target.year.value,
      contact: e.target.contact.value,
      description: e.target.description.value,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    window.location = "/";
  }
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            className="form-control"
            name="username"
            required
          />
        </div>
        <div className="form-group">
          <label>Name: </label>
          <input type="text" className="form-control" name="name" required />
        </div>

        <div className="form-group">
          <label>Surname: </label>
          <input type="text" className="form-control" name="surname" required />
        </div>

        <div className="form-group">
          <label>Contact (url): </label>
          <input type="url" className="form-control" name="contact" required />
        </div>

        <div className="form-group">
          <label>Describe yourself: </label>
          <textarea
            name="description"
            className="form-control"
            required
          ></textarea>
        </div>

        <h4>Birthday: </h4>
        <div className="form-group">
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

        <div className="form-group">
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

        <div className="form-group">
          <label>Year: </label>
          <input
            type="number"
            className="form-control"
            name="year"
            required
            min="1900"
            max="2022"
          />
        </div>

        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-dark mt-3" />
        </div>
      </form>
    </div>
  );
}
