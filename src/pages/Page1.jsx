import { useNavigate } from 'react-router-dom';

const steps = [
  'Get a temporary transaction number.',
  'Check your email for the verification link.',
  'Click the link within 48 hours.',
  'Enter your personal details.',
  'Review your information.',
  'Receive your SSS member number.'
];

export default function Page1() {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <main className="card">
        <header className="document-header">
          <img className="sss-logo" src="/sss.png" alt="Social Security System logo" />
          <div className="document-header-text">
            <span className="republic">Republic of the Philippines</span>
            <span className="agency">SOCIAL SECURITY SYSTEM</span>
          </div>
        </header>

        <h1 className="page-title">PERSONAL RECORD</h1>
        <p className="lead">Create your record in a few simple steps.</p>

        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step}>
              <span className="step-number">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={() => navigate('/register')}
        >
          Start Registration
        </button>
      </main>
    </div>
  );
}
