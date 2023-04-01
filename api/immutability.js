const person = {
  name: "Mahmoud Gamal",
  title: "MERN Stack",
  address: {
    city: "Assiut",
    country: "Egypt",
  },
};

const newPerson = Object.assign({}, person, {
  name: "Omar Adele",
  address: { ...person.address, city: "Aswan" },
});

const newOtherPerson = {
  ...person,
  name: "Abo Fiyad",
  address: { ...person.address, city: "Riyadh", country: "SUA" },
};

console.log(person);
console.log(newPerson);
console.log(newOtherPerson);

/* {
  name: 'Mahmoud Gamal',
  title: 'MERN Stack',
  address: { city: 'Assiut', country: 'Egypt' }
}
{
  name: 'Omar Adele',
  title: 'MERN Stack',
  address: { city: 'Aswan', country: 'Egypt' }
}
{
  name: 'Abo Fiyad',
  title: 'MERN Stack',
  address: { city: 'Riyadh', country: 'SUA' }
} */