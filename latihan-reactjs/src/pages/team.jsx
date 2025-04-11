function Team() {
  const teamMembers = [
    {
      name: "Muhammad Zikri",
      role: "Frontend Developer",
      img: "/pas_foto.png",
    },
    {
      name: "Dani Mikail",
      role: "Backend Developer",
      img: "/jikri2.jpg",
    },
    {
      name: "Rizki Jikri",
      role: "UI/UX Designer",
      img: "/jikri3.jpg",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Our Team</h1>
      <p className="text-center mb-5">
        Meet the amazing people behind our project.
      </p>

      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm text-center p-3">
              <img
                src={member.img}
                alt={member.name}
                className="rounded-circle mx-auto"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text text-muted">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
