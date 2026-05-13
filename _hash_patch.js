
  // ─────────────────────────────────────────────────────────────
  // URL HASH → PHASE SYNC
  // Allows the embedded iframe to receive a phase via #phase=N
  // (e.g. https://trainguy12.github.io/TampaTransitPlans/#phase=2)
  // ─────────────────────────────────────────────────────────────
  function getPhaseFromHash() {
    const m = (window.location.hash || '').match(/phase=([1-4])/i);
    return m ? parseInt(m[1], 10) : null;
  }

  function applyPhaseFromHash() {
    const p = getPhaseFromHash();
    if (p) setPhase(p);
  }

  // React to hash changes after load (e.g. parent frame updates the src)
  window.addEventListener('hashchange', applyPhaseFromHash);
