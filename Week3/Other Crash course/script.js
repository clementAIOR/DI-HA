document.addEventListener('DOMContentLoaded', function () {
  // Materialize provides the responsive slide-out navigation.
  const menus = M.Sidenav.init(document.querySelectorAll('.sidenav'), { edge: 'right' });
  document.querySelectorAll('#mobile-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
      const menu = M.Sidenav.getInstance(document.getElementById('mobile-menu'));
      if (menu) menu.close();
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // For this crash-course demo, form submission validates and shows feedback.
  // To actually receive inquiries, connect a backend or a form service (e.g. Formspree).
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      feedback.textContent = 'Please complete the required fields correctly.';
      return;
    }
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name.length < 2 || message.length < 10) {
      feedback.textContent = 'Please enter your name and a message of at least 10 characters.';
      return;
    }
    feedback.textContent = 'Thank you, ' + name + '! Your message was captured in this demo. Connect a form service to receive real submissions.';
    M.toast({ html: 'Message validated — demo mode', displayLength: 3500 });
    form.reset();
    M.updateTextFields();
  });
});
