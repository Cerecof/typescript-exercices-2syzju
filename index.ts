// Import stylesheets
import './style.css';

// Data models
import { companies, users, franckMonod } from './models';

// Interfaces

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const myCompany = {};
const usersName = [];

let sumAge = 0;

// /!\ Le terme affiché correspond à de simple console.log()

/**
 * Consignes - Level 1 :
 */
console.log('LEVEL 1');

// 1. Faire la somme des ages de tout les "users", afficher la valeur de sumAge.
const sumAges = users
  .filter((user) => user.age !== null)
  .map((user) => user.age)
  .reduce((sum, age) => sum + age, 0);
console.log(sumAges);

// 2. Récupérer les noms des "users" dans le tableau "usersName", afficher sa valeur.
const allUserName = users.map((user) => {
  return user.name;
});
console.log(allUserName);

/**
 * Consignes - Level 2 :
 */
console.log('LEVEL 2');

// 1. Ajouter l'utilisateur "franckMonod" à la liste "users".
const newUsers: User[] = users.concat(franckMonod);
console.log(newUsers);

// 2. Récupérer les "users" avec le status "alternant" dans le tableau "usersAlternant" grâce à une boucle "for", afficher sa valeur.

const alternant = newUsers.filter((poste) => {
  return poste.status === 'alternant';
});
console.log(alternant);

// 3. Changer le status de l'utilisateur "Thomas" en "cofondateur".

const newStatus = users.find((user): boolean => {
  return user.name === 'Thomas';
});
if (newStatus) {
  newStatus.status = 'cofondateur';
}
console.log(newStatus.status);

// 4. Récupérer les "users" avec le status "cofondateur", afficher ces utilisateurs en 1 seul console.log.

const coFounder = newUsers.filter((user) => {
  return user.status === 'cofondateur';
});

console.log(coFounder);

/**
 * Consignes - Level 3 :
 */
console.log('LEVEL 3');

// 1. Trouver le nom de l'entreprise de l'utilisateur ayant un id = 2.

const companyName = users.find((user) => {
  return user.id === 2;
});
if (companyName) {
  console.log(companyName.company);
}

// 2. Trouver le nom de la localisation de l'utilisateur ayant pour indice 2 dans le tableau "users".

const locationCompany = companyName.company.location;
console.log(locationCompany);

// 3. Changer la localisation des entreprises ayant pour nom "PRISMO" en "Cran-Gevrier".

const filteredNewUsers = newUsers.filter((user) => {
  return user.company !== null;
});

filteredNewUsers.forEach((user) => {
  if (user.company.name === 'PRISMO') {
    user.company.location = 'Cran-Gevrier';
  }
});

console.log(filteredNewUsers);

/*
 * Consignes - Level 4 :
 */
console.log('LEVEL 4');

// L'utilisatrice Leïla n'a pas de compagnie associée. Elle souhaite ajouter une entreprise sur son profil. Pour ce faire, elle doit :
// - Trouver l'entreprise "PRISMO", dans la liste des "companies";
// - Associer les valeurs de "PRISMO" à la propriété "company" de son compte
// - Afficher son compte
const newCompanyLeila = newUsers.map((user) => {
  if (user.name === 'Leïla' && user.company === null) {
    return { ...user, company: companies[1] };
  }
  return user;
});
console.log(newCompanyLeila[0]);

/**
 * Consignes - Bonus :
 */
console.log('Bonus');

// - Créer une interface correspondant à l'objet "user"

export interface Company {
  id?: number
  name?: string
  location?: string
}


export interface User {
  id: number,
  name: string,
  age?: number,
  company?: Company & string,
  status?: string
}



// - Créer une interface correspondant à l'objet "company"
// - Typer son code
