document.addEventListener('DOMContentLoaded', () => {
  const PASSWORD = '0830';
  const SECOND_PASSWORD = 'grimshaw';

  const passwordForm = document.getElementById('password-form');
  const passwordInput = document.getElementById('password-input');
  const feedback = document.getElementById('feedback');
  const feedbackText = document.getElementById('feedback-text');

  const lockboxContent = document.getElementById('lockbox-content');
  const protectedContent = document.getElementById('protected-content');
  const lockButton = document.getElementById('lock-button');

  passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = passwordInput.value.trim();
    if (value === PASSWORD) {
      showFeedback('Correct password!', 'success');
      setTimeout(() => {
        lockboxContent.classList.add('hidden');
        protectedContent.classList.remove('hidden');
        passwordInput.value = '';
      }, 500);
    } else {
      showFeedback('Incorrect password. Try again.', 'error');
      passwordInput.value = '';
    }
  });

  lockButton?.addEventListener('click', () => {
    protectedContent.classList.add('hidden');
    lockboxContent.classList.remove('hidden');
  });

  function showFeedback(message, type) {
    feedbackText.textContent = message;
    feedback.className = `${type}`;
    feedback.classList.remove('hidden');
    setTimeout(() => {
      feedback.classList.add('hidden');
    }, 3000);
  }

  // ===== Second Lockbox Logic =====
  const secondTrigger = document.getElementById('second-lock-trigger');
  const secondBox = document.getElementById('second-lockbox');
  const secondForm = document.getElementById('second-password-form');
  const secondInput = document.getElementById('second-password-input');
  const secondFeedback = document.getElementById('second-feedback');
  const secondFeedbackText = document.getElementById('second-feedback-text');

  secondTrigger?.addEventListener('click', () => {
    secondBox.classList.remove('hidden');
    secondTrigger.classList.add('hidden');
  });

  secondForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = secondInput.value.trim().toLowerCase();
    if (value === SECOND_PASSWORD) {
      secondFeedbackText.textContent = '✅ Correct!';
      secondFeedback.className = 'success';
      setTimeout(() => {
        window.location.href = 'memory.html';
      }, 500);
    } else {
      secondFeedbackText.textContent = '❌ Incorrect. Try again.';
      secondFeedback.classList.remove('hidden');
      setTimeout(() => {
        secondFeedback.classList.add('hidden');
      }, 3000);
    }
  });
});
