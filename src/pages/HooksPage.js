import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import Clock from '../components/Clock';
import ExpensiveCalculation from '../components/ExpensiveCalculation';
import Stopwatch from '../components/Stopwatch';
import MeasureBox from '../components/MeasureBox';
import ImperativeDemo from '../components/ImperativeDemo';
import SearchWithTransition from '../components/SearchWithTransition';
import DeferredValueDemo from '../components/DeferredValueDemo';
import CustomHooksDemo from '../components/CustomHooksDemo';

function HooksPage() {
  return (
    <div>
      <h2>Démonstration des Hooks React</h2>
      <p>Cette page présente différents hooks React et leurs cas d'utilisation.

      </p>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/" className="btn-link">Retour à l'accueil</Link>
      </div>
      
      <div className="hooks-grid">
        <Counter />
        <Clock />
        <ExpensiveCalculation />
        <Stopwatch />
        <MeasureBox />
        <ImperativeDemo />
        <SearchWithTransition />
        <DeferredValueDemo />
        <CustomHooksDemo />
      </div>
    </div>
  );
}

export default HooksPage;