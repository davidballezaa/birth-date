export default function PersonCard({ data }) {
  return (
    <div className="col-md-4 mt-3 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {data.name} {data.surname}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Born: {data.birthdayMonth}/{data.birthdayDay}/{data.birthdayYear}
          </h6>

          <p className="card-text">{data.description}</p>
          <a
            href={data.contact}
            className="btn btn-info"
            rel="noopener"
            target="_blank"
          >
            <strong>Connect!</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
