/**
 * LSOS — LAUNCH SAFE ON SOLANA
 * Main Interaction Engine
 * Features:
 *  - Mainnet Countdown Timer (Target: Feb 1, 2027)
 *  - Interactive Engine Terminal Simulator (Tabs & Execution Log)
 *  - Real-Time Founder Fee & Savings Calculator
 *  - Genesis Cohort Slot Reservation System
 *  - Modal System with Keyboard & ARIA Support
 *  - Zero Heavy Dependencies (No GSAP, No Smooth Scroll hijacking)
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initTerminalEngine();
  initCalculator();
  initFormsAndModals();
});

/* ==========================================================================
   1. COUNTDOWN TIMER TO FEBRUARY 1, 2027
   ========================================================================== */
function initCountdown() {
  const cdContainer = document.getElementById('mainnet-countdown');
  if (!cdContainer) return;

  const targetDateStr = cdContainer.getAttribute('data-target') || '2027-02-01T00:00:00Z';
  const targetTime = new Date(targetDateStr).getTime();

  const elDays = document.getElementById('cd-days');
  const elHours = document.getElementById('cd-hours');
  const elMinutes = document.getElementById('cd-minutes');
  const elSeconds = document.getElementById('cd-seconds');

  function update() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      if (elDays) elDays.textContent = '00';
      if (elHours) elHours.textContent = '00';
      if (elMinutes) elMinutes.textContent = '00';
      if (elSeconds) elSeconds.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (elDays) elDays.textContent = String(days).padStart(2, '0');
    if (elHours) elHours.textContent = String(hours).padStart(2, '0');
    if (elMinutes) elMinutes.textContent = String(minutes).padStart(2, '0');
    if (elSeconds) elSeconds.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   2. INTERACTIVE CORE ENGINE TERMINAL
   ========================================================================== */
function initTerminalEngine() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const btnRunSim = document.getElementById('btn-run-sim');
  const logContainer = document.getElementById('terminal-log');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(`tab-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  if (btnRunSim && logContainer) {
    btnRunSim.addEventListener('click', () => {
      btnRunSim.disabled = true;
      btnRunSim.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 1 10 10"></path></svg>
        <span>Executing Bundle...</span>
      `;

      setTimeout(() => {
        const timestamp = new Date().toISOString().substring(11, 23);
        const randomSlot = Math.floor(290000000 + Math.random() * 500000);
        const newLog = document.createElement('div');
        newLog.className = 'log-line';
        newLog.innerHTML = `<span class="log-time">[${timestamp}]</span> <span class="log-shield">BUNDLE VERIFIED</span> Jito Tip: 0.015 SOL | Block #${randomSlot} landed without mempool propagation.`;
        logContainer.appendChild(newLog);
        logContainer.scrollTop = logContainer.scrollHeight;

        btnRunSim.disabled = false;
        btnRunSim.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          <span>Re-Execute Jito Bundle Simulation</span>
        `;
      }, 700);
    });
  }
}

/* ==========================================================================
   3. FOUNDER FEE & SAVINGS CALCULATOR
   ========================================================================== */
function initCalculator() {
  const raiseSlider = document.getElementById('raise-slider');
  const volumeSlider = document.getElementById('volume-slider');
  const raiseVal = document.getElementById('raise-val');
  const volumeVal = document.getElementById('volume-val');
  const totalSavingsVal = document.getElementById('total-savings-val');

  if (!raiseSlider || !volumeSlider || !totalSavingsVal) return;

  function calculate() {
    const raiseSol = parseFloat(raiseSlider.value);
    const volumeUsd = parseFloat(volumeSlider.value);

    // Update slider label texts
    raiseVal.textContent = `${raiseSol.toLocaleString()} SOL`;
    volumeVal.textContent = `$${volumeUsd.toLocaleString()}`;

    // Estimated SOL price baseline (for illustrative calculation)
    const solPriceUsd = 180;
    const raiseUsd = raiseSol * solPriceUsd;

    // Upfront fees saved (Typical other platforms: ~$1,000 deployment + liquidity lock costs)
    const upfrontSavings = 1000;

    // Market Maker Bot subscription saved (Standard: $1,500/month)
    const botSavings = 1500;

    // Trading Fee Arbitrage:
    // Traditional DEX: 1.00% fee on volume
    // LSOS: 0.175% fee on volume
    // Difference = 0.825%
    const feeSpreadSavings = volumeUsd * 0.00825;

    // Genesis SaaS Suite bonus value
    const saasSuiteValue = 7500;

    const totalSaved = Math.round(upfrontSavings + botSavings + feeSpreadSavings + saasSuiteValue);

    totalSavingsVal.textContent = `$${totalSaved.toLocaleString()}`;
  }

  raiseSlider.addEventListener('input', calculate);
  volumeSlider.addEventListener('input', calculate);
  calculate();
}

/* ==========================================================================
   4. FORMS, MODALS & GENESIS ALLOCATION
   ========================================================================== */
function initFormsAndModals() {
  const modal = document.getElementById('genesis-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const triggerBtns = document.querySelectorAll('.trigger-genesis-modal');
  const spotsClaimedEl = document.getElementById('spots-claimed');
  const spotsAvailableEl = document.getElementById('spots-available');
  const heroSlotsLeftEl = document.getElementById('hero-slots-left');
  const modalSlotsLeftEl = document.getElementById('modal-slots-left');

  // Stored allocation slots state
  let spotsClaimed = parseInt(localStorage.getItem('lsos_claimed_slots') || '7', 10);
  const totalSlots = 10;

  function syncSlotsDisplay() {
    const available = Math.max(0, totalSlots - spotsClaimed);
    if (spotsClaimedEl) spotsClaimedEl.textContent = spotsClaimed;
    if (spotsAvailableEl) spotsAvailableEl.textContent = available;
    if (heroSlotsLeftEl) heroSlotsLeftEl.textContent = available;
    if (modalSlotsLeftEl) modalSlotsLeftEl.textContent = available;
  }
  syncSlotsDisplay();

  // Modal open/close
  function openModal() {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const firstInput = modal.querySelector('input');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Modal Quick Application Submission
  const modalForm = document.getElementById('modal-form');
  const modalFeedback = document.getElementById('modal-feedback');

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const handle = document.getElementById('modal-handle').value.trim();
      const project = document.getElementById('modal-project').value.trim();

      if (!handle || !project) {
        if (modalFeedback) {
          modalFeedback.className = 'form-feedback error';
          modalFeedback.textContent = 'Please provide both your Telegram handle and project name.';
        }
        return;
      }

      if (spotsClaimed < totalSlots) {
        spotsClaimed += 1;
        localStorage.setItem('lsos_claimed_slots', spotsClaimed);
        syncSlotsDisplay();
      }

      if (modalFeedback) {
        modalFeedback.className = 'form-feedback success';
        modalFeedback.innerHTML = `✓ Genesis application received for <strong>${escapeHtml(project)}</strong>! Our core team will reach out via <strong>${escapeHtml(handle)}</strong> within 24 hours.`;
      }

      modalForm.reset();
      setTimeout(() => {
        closeModal();
        if (modalFeedback) modalFeedback.className = 'form-feedback';
      }, 3500);
    });
  }

  // Full Landing Page Genesis Application Form Submission
  const appForm = document.getElementById('genesis-application-form');
  const formFeedback = document.getElementById('form-feedback');

  if (appForm) {
    appForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const tgHandle = document.getElementById('telegram-handle').value.trim();
      const projName = document.getElementById('project-name').value.trim();
      const launchType = document.getElementById('launch-type').value;

      if (!tgHandle || !projName || !launchType) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback error';
          formFeedback.textContent = 'Please fill out all required fields marked with * (Telegram handle, Project name, Launch format).';
        }
        return;
      }

      if (spotsClaimed < totalSlots) {
        spotsClaimed += 1;
        localStorage.setItem('lsos_claimed_slots', spotsClaimed);
        syncSlotsDisplay();
      }

      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `
          <strong>✓ Genesis Partner Application Successfully Submitted!</strong><br>
          Your application for <em>${escapeHtml(projName)}</em> has been securely registered in the priority intake queue. The LSOS founding team will contact you on Telegram (<strong>${escapeHtml(tgHandle)}</strong>) to deliver your $7,500 SaaS Utility Suite onboarding packet.
        `;
      }

      appForm.reset();
      formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
}

// Utility function to prevent XSS in client-rendered text
function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}

