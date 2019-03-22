const companies = [
  {
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2004
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
  }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ForEach

companies.forEach(function(company) {
  // or index or companies
  console.log(company.name);
});

// Filter

const canDrink = ages.filter(function(age) {
  if (age >= 21) {
    return true;
  }
});

const canDrink2 = ages.filter(age => age >= 21);

console.log(canDrink);
console.log(canDrink2);

const retailCompanies = companies.filter(
  retailCompany => retailCompany.category === "Retail"
);
console.log(retailCompanies);

const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);
console.log(eightiesCompanies);

const decadeCompanies = companies.filter(
  company => company.end - company.start >= 10
);

console.log(decadeCompanies);

// Map
const companyNames = companies.map(function(company) {
  return company.name;
});

console.log(companyNames);

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

const agesRootedDoubled = ages.map(age => Math.sqrt(age)).map(age => age * 2);

console.log(agesRootedDoubled);

// Sort
const sortedCompanies = companies.sort(function(c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);
console.log(sortedCompanies2);

const sortedAges = ages.sort((a, b) => a - b); // a-b for ascended order, b-a for descended
console.log(sortedAges);

// reduce
const ageSum = ages.reduce(function(total, age) {
  return total + age;
}, 0);

const ageSum2 = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);
console.log(ageSum2);

const totalCompanyExistence = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalCompanyExistence);

// Combine methods
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
