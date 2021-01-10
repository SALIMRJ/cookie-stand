  var Branches ={
   
    nameLoc :'',
    MaxCustomers :0,
    MinCustomers :0,
    AvgCookies :0,
    CookiespHour:[],
    RandomCustomers :[],
    gitRandom:function(){
        console.log('gitRandom');
        for(var i = 0;i<15;i++){
            this.RandomCustomers[i]=GetRandom(this.MaxCustomers,this.MinCustomers);
           
        };
        this.gitCookiespHouer()
    } ,
    gitCookiespHouer:function(){
        console.log('gitCookiespHouer');
       for(var i =0;i<this.RandomCustomers.length;i++){
           this.CookiespHour[i]=Math.floor(this.AvgCookies*this.RandomCustomers[i]) ;
       };
       this.ShowIfo();
    },


    ShowIfo:function(){
        console.log('ShowIfo');
        var parent =document.getElementById('SaleInfo');
        var name = document.createElement('p');
        name.textContent=this.nameLoc; 
        parent.appendChild(name);
        var listInfo=document.createElement('ul');
        parent.appendChild(listInfo);
        
        var houer = 6 ;
        var am_pm='am';
        var total = 0; 
        for(var i =0 ;i<this.CookiespHour.length;i++){
            if(houer>12){
                am_pm='pm';
                houer=1; };
            var liOFlu = document.createElement('li');
            total+=this.CookiespHour[i];
            liOFlu.textContent=houer+am_pm+' :'+this.CookiespHour[i]+' '+'cookies';
            houer++;
            listInfo.appendChild(liOFlu);
        }
        var liOFlu = document.createElement('li');
        liOFlu.textContent='Total :'+total+' '+ 'cookies';
        listInfo.appendChild(liOFlu);

    },

  };

  function GetRandom (max,min){
    console.log('GetRandom');
    var Rnumber = Math.floor(Math.random()*max+1+min);
     return Rnumber ;
  };

  Branches.nameLoc='Seattle';
  Branches.MinCustomers=23;
  Branches.MaxCustomers=65;
  Branches.AvgCookies=6.3;
  Branches.gitRandom();
  //---------------------
  Branches.nameLoc='Tokyo';
  Branches.MinCustomers=3;
  Branches.MaxCustomers=24;
  Branches.AvgCookies=1.2;
  Branches.gitRandom();
//-----------------------
Branches.nameLoc='Dubai';
Branches.MinCustomers=11;
Branches.MaxCustomers=38;
Branches.AvgCookies=3.7;
Branches.gitRandom();
//-----------------------
Branches.nameLoc='Paris';
Branches.MinCustomers=20;
Branches.MaxCustomers=38;
Branches.AvgCookies=2.3;
Branches.gitRandom();
//-----------------------
Branches.nameLoc='Lima';
Branches.MinCustomers=2;
Branches.MaxCustomers=16;
Branches.AvgCookies=4.6;
Branches.gitRandom();   
//-----------------------

 