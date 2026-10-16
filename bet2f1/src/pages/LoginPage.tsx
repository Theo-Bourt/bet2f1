import { useState, type FormEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Tabs } from '../components/ui/Tabs';
import { usePlayer } from '../context/PlayerContext';
import styles from './LoginPage.module.css';

// Responsable : personne 1
type AuthMode = 'login' | 'register';

export function LoginPage() {
  const { player, login } = usePlayer();
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (player) return <Navigate to="/" replace />;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email.includes('@')) {
      setError('Enter a valid email address.');
      return;
    }
    login(email); // connexion simulée (pas de back pour l'instant)
    navigate('/');
  }

  return (
    <div className={styles.layout}>
      <section className={styles.hero}>
        <span className="eyebrow">Free to play · Virtual points</span>
        <h1>Lights out.<br />Instincts on.</h1>
        <p className="muted">Predict simulated races, earn points, unlock cosmetics.</p>
      </section>

      <section className={styles.panel}>
        <span className="eyebrow">Welcome to the paddock</span>
        <h2>{mode === 'login' ? 'Sign in' : 'Create account'}</h2>

        <Tabs<AuthMode>
          options={[
            { value: 'login', label: 'Login' },
            { value: 'register', label: 'Create account' },
          ]}
          value={mode}
          onChange={setMode}
        />

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            label="Email address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError('');
            }}
            error={error}
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type="submit" fullWidth>
            {mode === 'login' ? 'Login' : 'Start with 5,000 pts'}
          </Button>
        </form>
      </section>
    </div>
  );
}
