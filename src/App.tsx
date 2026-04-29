import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Play, RotateCcw, CheckCircle2, AlertCircle, Coins, Wallet, Landmark } from 'lucide-react';

interface Banknote {
  id: number;
  value: number;
  type: 'C' | 'D' | 'U';
}

const App: React.FC = () => {
  const [target, setTarget] = useState<number>(0);
  const [isConfigured, setIsConfigured] = useState(false);
  const [centenas, setCentenas] = useState<Banknote[]>([]);
  const [decenas, setDecenas] = useState<Banknote[]>([]);
  const [unidades, setUnidades] = useState<Banknote[]>([]);
  const [showFeedback, setShowFeedback] = useState<'success' | 'error' | 'over' | null>(null);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const total = centenas.length * 100 + decenas.length * 10 + unidades.length * 1;

  const handleAdd = (type: 'C' | 'D' | 'U') => {
    const value = type === 'C' ? 100 : type === 'D' ? 10 : 1;
    const newNote = { id: Date.now(), value, type };
    if (type === 'C') setCentenas([...centenas, newNote]);
    if (type === 'D') setDecenas([...decenas, newNote]);
    if (type === 'U') setUnidades([...unidades, newNote]);
    setShowFeedback(null);
  };

  const handleRemove = (type: 'C' | 'D' | 'U', id: number) => {
    if (type === 'C') setCentenas(centenas.filter(n => n.id !== id));
    if (type === 'D') setDecenas(decenas.filter(n => n.id !== id));
    if (type === 'U') setUnidades(unidades.filter(n => n.id !== id));
    setShowFeedback(null);
  };

  const resetGame = () => {
    setCentenas([]);
    setDecenas([]);
    setUnidades([]);
    setShowFeedback(null);
    setFeedbackMsg('');
  };

  const checkResult = () => {
    if (total === target) {
      setShowFeedback('success');
      setFeedbackMsg(`¡Excelente! Descompusiste el ${target} perfectamente.`);
    } else if (total < target) {
      setShowFeedback('error');
      setFeedbackMsg('¡Falta un poco más! Todavía no llegamos al objetivo.');
      setTimeout(() => setShowFeedback(null), 3000);
    } else {
      setShowFeedback('over');
      setFeedbackMsg('¡Te pasaste! Quitá algunos billetes o monedas.');
      setTimeout(() => setShowFeedback(null), 3000);
    }
  };

  if (!isConfigured) {
    return (
      <div className="setup-container">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="setup-card">
          <h1><Settings size={32} /> Modo Padres</h1>
          <p>Define el número objetivo (1 - 199)</p>
          <input 
            type="number" 
            min="1" 
            max="199" 
            value={target || ''} 
            onChange={(e) => setTarget(Math.min(199, Math.max(0, parseInt(e.target.value) || 0)))}
            placeholder="Ej: 168"
          />
          <button onClick={() => target > 0 && setIsConfigured(true)} disabled={target <= 0}>
            <Play size={20} /> ¡A jugar!
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="game-container">
      <header>
        <div className="target-display">Objetivo: <span>{target}</span></div>
        <div className="current-total">Llevamos: <span>${total}</span></div>
        <button className="reset-btn" onClick={() => { setIsConfigured(false); resetGame(); }}>
          <Settings size={20} />
        </button>
      </header>

      <main>
        <div className="board">
          <DropZone 
            title="Centenas" 
            icon={<Landmark color="#1e40af" />} 
            notes={centenas} 
            type="C" 
            onRemove={handleRemove} 
            color="#dbeafe"
          />
          <DropZone 
            title="Decenas" 
            icon={<Wallet color="#991b1b" />} 
            notes={decenas} 
            type="D" 
            onRemove={handleRemove} 
            color="#fee2e2"
          />
          <DropZone 
            title="Unidades" 
            icon={<Coins color="#166534" />} 
            notes={unidades} 
            type="U" 
            onRemove={handleRemove} 
            color="#dcfce7"
          />
        </div>

        <div className="decomposition-formula">
          {centenas.length > 0 && <span>{centenas.length * 100}</span>}
          {decenas.length > 0 && <span>{centenas.length > 0 ? ' + ' : ''}{decenas.length * 10}</span>}
          {unidades.length > 0 && <span>{(centenas.length > 0 || decenas.length > 0) ? ' + ' : ''}{unidades.length}</span>}
          {(total > 0) && <span> = {total}</span>}
        </div>
      </main>

      <div className="bank">
        <button onClick={() => handleAdd('C')} className="bank-note c-note" disabled={centenas.length >= 1 && target < 200}>
          $100
        </button>
        <button onClick={() => handleAdd('D')} className="bank-note d-note">
          $10
        </button>
        <button onClick={() => handleAdd('U')} className="bank-note u-note">
          $1
        </button>
      </div>

      <div className="actions">
        <button className="check-btn" onClick={checkResult}>PAGAR</button>
        <button className="clear-btn" onClick={resetGame}><RotateCcw size={20} /></button>
      </div>

      <AnimatePresence>
        {showFeedback && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: 50, opacity: 0 }}
            className={`feedback ${showFeedback === 'over' ? 'error' : showFeedback}`}
          >
            {showFeedback === 'success' ? (
              <>
                <CheckCircle2 size={48} color="#22c55e" />
                <h2>¡Lo lograste!</h2>
                <p>{feedbackMsg}</p>
                <button className="next-btn" onClick={() => { setIsConfigured(false); resetGame(); }}>Otro número</button>
              </>
            ) : (
              <>
                <AlertCircle size={48} color={showFeedback === 'over' ? '#f59e0b' : '#ef4444'} />
                <h2>{showFeedback === 'over' ? '¡Epa!' : '¡Ups!'}</h2>
                <p>{feedbackMsg}</p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DropZone = ({ title, icon, notes, type, onRemove, color }: any) => (
  <div className="drop-zone" style={{ backgroundColor: color }}>
    <h3>{icon} {title}</h3>
    <div className="notes-container">
      <AnimatePresence>
        {notes.map((note: any, index: number) => (
          <motion.div
            key={note.id}
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: (index % 2 === 0 ? 5 : -5) }}
            exit={{ scale: 0 }}
            className={`note-item ${type.toLowerCase()}-item`}
            onClick={() => onRemove(type, note.id)}
          >
            ${note.value}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  </div>
);

export default App;
