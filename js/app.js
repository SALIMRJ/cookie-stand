  var Seattle ={
   
    nameLoc :'Seattle',
    MaxCustomers :23,
    MinCustomers :65,
    AvgCookies :6.3,
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
           this.CookiespHour[i]=Math.ceil(this.AvgCookies*this.RandomCustomers[i]) ;
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



  var Tokyo ={
   
    nameLoc :'Tokyo',
    MaxCustomers :3,
    MinCustomers :24,
    AvgCookies :1.2,
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
           this.CookiespHour[i]=Math.ceil(this.AvgCookies*this.RandomCustomers[i]) ;
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






  var Dubai	 ={
   
    nameLoc :'Dubai	',
    MaxCustomers :11,
    MinCustomers :38,
    AvgCookies :3.7,
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
           this.CookiespHour[i]=Math.ceil(this.AvgCookies*this.RandomCustomers[i]) ;
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

  var Paris ={
   
    nameLoc :'Paris',
    MaxCustomers :20,
    MinCustomers :38,
    AvgCookies :2.3,
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
           this.CookiespHour[i]=Math.ceil(this.AvgCookies*this.RandomCustomers[i]) ;
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



  var Lima ={
   
    nameLoc :'Lima',
    MaxCustomers :2,
    MinCustomers :16,
    AvgCookies :4.6,
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
           this.CookiespHour[i]=Math.ceil(this.AvgCookies*this.RandomCustomers[i]) ;
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

 
  Seattle.gitRandom();
  //---------------------

  Tokyo.gitRandom();
//-----------------------

Dubai.gitRandom();
//-----------------------

Paris.gitRandom();
//-----------------------

Lima.gitRandom();   
//-----------------------

 
