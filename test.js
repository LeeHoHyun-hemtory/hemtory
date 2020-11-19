const data = [
  {
    "time": "2020.5.3 0:00",
    "EC_slab1": 5.438761,
    "EC_slab2": 4.931374,
    "EC_drain_PC": 6.3,
    "WC_slab1": 67.476,
    "WC_slab2": 56.932,
    "CO2air": 560.0000004,
    "HumDef": 1.629999997,
    "Rhair": 90.3,
    "Tair": 19.6,
    "EnScr": 0,
    "BlackScr": 95,
    "PipeGrow": 36.59999999,
    "PipeLow": 0,
    "Iglob": 0,
    "RadSum": 2162.999782,
    "Tout": 9.99999998
  },
  {
    "time": "2020.5.3 0:05",
    "EC_slab1": 5.436839,
    "EC_slab2": 4.924302,
    "EC_drain_PC": 6.33,
    "WC_slab1": 67.476,
    "WC_slab2": 56.932,
    "CO2air": 563.9999996,
    "HumDef": 1.600000003,
    "Rhair": 90.5,
    "Tair": 19.6,
    "EnScr": 0,
    "BlackScr": 95,
    "PipeGrow": 36.50000001,
    "PipeLow": 0,
    "Iglob": 0,
    "RadSum": 0.000217561,
    "Tout": 9.80000002
  }
];

const obj = {...data[0]}

for(let key in obj) {
  obj[key] = [];
}

data.forEach(el => {
  for(let key in el) {
    obj[key].push(el[key]);
  }
})

const arr = Object.keys(obj).map(el => ({name: el}));

arr.forEach(el => {
  el['data'] = [...obj[el.name]];
})
console.log(arr);