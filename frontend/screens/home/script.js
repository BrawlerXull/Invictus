const isLoggedIn = localStorage.getItem('isLoggedIn');
console.log(isLoggedIn)
if (isLoggedIn === 'false') {
  window.location.href = '../auth/index.html';
}


function signOut(){
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = '../auth/index.html';
}