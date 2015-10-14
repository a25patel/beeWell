var vaccineDB = require('monk')('localhost/vaccines');
var Vaccines = vaccineDB.get('vaccines');

Vaccines.remove({})
.then(function() {
  return Promise.all([
    Vaccines.insert({
      name: 'Hepatitis A',
      what: 'Serious liver disease caused by Hepatitis A Virus(HAV)',
      transmission: [
        'Oral contact',
        'Contaminated fecal contact',
        'Food or drinking water with HAV'
      ],
      doses: {
        one: 0,
        two: 6
      },
      circumstances: [
        'Homosexual Men',
        'Laboratory setting',
        'International Adoption'
      ],
      conditions: [
        'Chronic Liver Disease',
        'Illicit Drug Abuse',
        'Clotting Factor Disorders'
      ],
      age: 12,
      travel: [
        'Canada',
        'Scandanavia',
        'Japan',
        'New Zealand',
        'Australia',
        'Western Europe'
      ]
    }),
    Vaccines.insert({
      name: 'Herpes Zoster (Shingles)',
      what: 'Painful skin rash often with blisters, on one side of the face or body',
      transmission: [
        'Chickenpox remains in the body and later can appear as Shingles',
        'Someone who has had Chickenpox can get Shingles',
        'CAN NOT catch Shingles from someone who has Shingles'
      ],
      doses: {
        one: 0
      },
      circumstances: [],
      conditions: [],
      age: 720,
      travel: []
    })
  ])
})
.then(function(){
  db.close();
})
