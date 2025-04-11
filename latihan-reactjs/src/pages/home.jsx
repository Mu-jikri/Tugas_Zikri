function Home() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold mb-3">Welcome to Jikri App</h1>
          <p className="lead">
            This is the homepage of your application. Explore our team, get in
            touch, and learn more about what we do.
          </p>
          <a href="/contact" className="btn btn-primary mt-3">
            Contact Us
          </a>
        </div>
        <div className="col-md-6 d-none d-md-block"></div>
      </div>
    </div>
  );
}

export default Home;
