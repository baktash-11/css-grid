(()=>{
   

      const companies = [
        {name:'Company one', category: 'Finance', start: 1981, end: 2003},
        {name:'Company two', category: 'Retail', start: 1991, end: 2008},
        {name:'Company three', category: 'Auto', start: 1999, end: 2007},
        {name:'Company four', category: 'Retail', start: 1980, end: 2010},
        {name:'Company five', category: 'Technology', start: 2009, end: 2014},
        {name:'Company six', category: 'Finance', start: 1978, end: 2010},
        {name:'Company seven', category: 'Auto', start: 1986, end: 1996},
        {name:'Company Eight', category: 'Technology', start: 2011, end: 2019},
        {name:'Company Nine', category: 'Retail', start: 1981, end: 2009}
      ]
      const ages =[33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 65, 32, 81];

      function Start() {
        console.log("Start function is started?");

        companies.forEach((element, index ,array )=> {
          console.log(index, element.end - element.start );
        });

         ageCanDrink();
         console.log(filterCanDrink);
      }
      const canDrink = [];

      function ageCanDrink() {
        //filter an array using for loop
        for (let i = 0; i < ages.length; i++) {
          if (ages[i] > 24) {
            canDrink.push(ages[i]);
          }
        }
        console.log(canDrink);
      }
      // using array method filter 
      const filterCanDrink = ages.filter((age)=>{
        if(age>=24){
          return true;
        }
      });

      // or
      const filterCanDrink2 = ages.filter(age => age >= 24);
      console.log(filterCanDrink2)
      
      
    
      // foreach
      // filter
      // sort
      // reduce
    window.addEventListener('load', Start)
})();