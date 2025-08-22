document.getElementById('formularz').addEventListener('submit', function(e) {
  e.preventDefault();
  var email = document.getElementById('email').value;
  alert('Dziękujemy za zapis! Email: ' + email);
  document.getElementById('email').value = '';
});