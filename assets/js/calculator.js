const date_birth = "1997"
const current_year = new Date().getFullYear();
const age = current_year - date_birth;

document.getElementById('age').innerHTML = `${age}`;