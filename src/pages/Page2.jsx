import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const emptyForm = {
  crn: '',
  lastName: '',
  firstName: '',
  middleName: '',
  dateOfBirth: '',
  email: ''
};

export default function Page2() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {                                           
    e.preventDefault();
    setSubmitted(true);
  };

  const fullName = [formData.firstName, formData.middleName, formData.lastName]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="app-shell">
      <main className="card">
        <div className="brand">
          <span className="brand-mark">SS</span>
          <span className="brand-name">Social Security System</span>
        </div>

        {submitted ? (
          <section className="success">
            <div className="success-icon" aria-hidden="true">
              &#10003;
            </div>
            <h1>Registration submitted</h1>
            <p className="lead">Your details have been recorded.</p>

            <dl className="summary">
              <div className="summary-row">
                <dt>Name</dt>
                <dd>{fullName}</dd>
              </div>
              <div className="summary-row">
                <dt>Email</dt>
                <dd>{formData.email}</dd>
              </div>
            </dl>

            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => navigate('/')}
            >
              Back to Home
            </button>
          </section>
        ) : (
          <>
            <p className="eyebrow">Registration</p>
            <h1>Applicant information</h1>
            <p className="lead">Enter your details to continue.</p>

            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="crn">
                  CRN / SSS Number <span className="optional">Optional</span>
                </label>
                <input
                  id="crn"
                  type="text"
                  name="crn"
                  autoComplete="off"
                  value={formData.crn}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  autoComplete="family-name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="middleName">
                  Middle Name <span className="optional">Optional</span>
                </label>
                <input
                  id="middleName"
                  type="text"
                  name="middleName"
                  autoComplete="additional-name"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  id="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  autoComplete="bday"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="btn-row">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate('/')}
                >
                  Back
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit Record
                </button>
              </div>
            </form>
          </>
        )}
      </main>
    </div>
  );
}
