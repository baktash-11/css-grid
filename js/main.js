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


        const sortCompaniesByEnd = companies.sort ((c1, c2)=> c1.end > c2.end ? 1 : -1);
        console.log(sortCompaniesByEnd, "sort companies by End date")
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
      
      // filter companies
      const retailCompanies = companies.filter((retail) =>{
        if(retail.category === "Retail"){
          return true;
        }
      });
      console.log(retailCompanies);

      //filter financing companies
      const financeCompanies = companies.filter((finance)=> finance.category==="Finance");
      console.log(financeCompanies);
    
      // companies started around 80s 
      const companiesFrom80s = companies.filter(year => ( year.start >= 1980) && year.start < 1990);
      console.log(companiesFrom80s);

      // get companies lasted 10 years or longer
      const companiesLastTenYears = companies.filter(years =>(years.end - years.start)<= 10);
      console.log("companies last 10 years and longer are ", companiesLastTenYears);


      // map
      const companiesName=[];
      for (let i = 0; i < companies.length; i++) {
          companiesName.push(companies[i].name)
        
      }
      console.log(companiesName);

      //getting companies name using map 
      const mapCompaniesName= companies.map((company)=>{
        return company.name;
      });
      console.log(mapCompaniesName);

      const mapCompaniesNameShortHand = companies.map(company => `Name: ${company.name} [From ${company.start} to ${company.end}] `);
      console.log(mapCompaniesNameShortHand);

      // map age
      const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
      console.log(ageMap);


      // sort companies
      const sortCompanies = companies.sort(function(c1, c2){
        if(c1.start > c2.start){
          return 1;
        }else{
          return -1;
        }
      });
      console.log( sortCompanies , "Sorted Companies by Start");

      
      const sortAges = ages.sort((a , b)=>a - b);
      console.log(sortAges);

      // foreach
      // filter
      // sort
      // reduce
    window.addEventListener('load', Start)
})();