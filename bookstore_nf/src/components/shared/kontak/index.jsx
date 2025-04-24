export default function Kontak() {
  return (
    <>
      <div className="container py-5">
        <h2 className="text-center mb-4">Hubungi Kami</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="nama@contoh.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subjek
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subjek pesan"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Pesan
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
