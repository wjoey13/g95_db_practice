
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('student_info').insert([
        {
          first:"Joey",
          last:"Walter",
          lat:"40.0150",
          long:"105.2705",
          favAnimal:"https://2.bp.blogspot.com/-Oz9tTxpw6Qk/WqLPVFXfLfI/AAAAAAAB41Q/Y2jyYo1QuhUstXG2Z3TZ06LOqRmys_sKwCLcBGAs/s1600/funny-animals-307-01.jpg"
        },
        {
          first: 'Maddie',
          last: 'Kreamer',
          lat: '41.673153',
          long: '-93.697342',
          favAnimal: 'https://pbs.twimg.com/media/B6CO2wGIEAAaDcc.jpg'
        },
        {
          first:'cory',
          last:'pease',
          lat: '39.739235',
          long: '-104.990250',
          favAnimal: 'https://vignette.wikia.nocookie.net/best-tv-shows1923/images/3/30/Property-header-catdog-480x270.png/revision/latest?cb=20180405002021'
        }
      ]);
    });
};
