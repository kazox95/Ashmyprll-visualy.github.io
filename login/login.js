var credentials = [
    { username: 'utilisateur1', password: 'motdepasse1' },
    { username: 'utilisateur2', password: 'motdepasse2' },
    { username: 'salut', password: 'salut' },
    
  ];
  
  function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
   
    var isValidCredentials = credentials.some(function(credential) {
      return credential.username === username && credential.password === password;
    });
  
    if (isValidCredentials) {
      ('Connexion réussie');
     
      window.location.href = './infex.html';
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  }
  

  document.getElementById('username').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      login(); 
    }
  });
  
  document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      login(); 
    }
  });