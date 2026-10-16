import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function NotFoundPage() {
  return (
    <div className="page">
      <span className="eyebrow">Error 404</span>
      <h1>Off track.</h1>
      <p className="muted">This page doesn't exist.</p>
      <Link to="/">
        <Button>Back to paddock</Button>
      </Link>
    </div>
  );
}
