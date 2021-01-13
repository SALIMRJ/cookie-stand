"use strict";

function Locations (Name,Max,Min,CookAvg, ){
 this.name =Name;
 this.maxCustomers=Max;
 this.minCustomers=Min;
 this.CookiesAvg=CookAvg;
 this.customersList=[];
 this.cookiesList=[];

}
var  totalHouers =[0];
for( var i=0;i<15;i++){
    totalHouers[i]=0;
};

Locations.prototype.getcustomersList =function(){

    for(var i =0 ; i<=14; i++){
      this.customersList[i]=GetRandom(this.maxCustomers,this.minCustomers);
    };
  this.getcookiesList();
};

Locations.prototype.getcookiesList=function(){
  for(var i=0; i<this.customersList.length;i++){
    this.cookiesList[i]=Math.ceil(this.customersList[i]*this.CookiesAvg);
    
     }
     
     this.locationRender();
};


var DivShow =document.getElementById('SaleInfo');
var tableInfo=document.createElement('table');
function houerRender(){
 
 DivShow.appendChild(tableInfo);
 var time_TR= document.createElement('tr')
 tableInfo.appendChild(time_TR);
 var Fcell= document.createElement('th');
  Fcell.textContent=' ';
 time_TR.appendChild(Fcell);
  var time=6;
  var am_pm = 'am';
 for(var i =0 ;i<15;i++){
     if(time>12){
      time=1 ;
      am_pm='pm';
     };
   var HouerTh = document.createElement('th');
   HouerTh.textContent=time+am_pm;
   time_TR.appendChild(HouerTh);
   time++;
  }
  var HouerTh = document.createElement('th');
  HouerTh.textContent='Total';
  time_TR.appendChild(HouerTh);
  
};


Locations.prototype.locationRender=function(){
  
 var Srow =document.createElement('tr');
 tableInfo.appendChild(Srow);
 var nameLoc=document.createElement('th');
 nameLoc.textContent=this.name;
 Srow.appendChild(nameLoc);
 var total = 0;
for(var i =0;i<this.cookiesList.length;i++){
     var cookiesInfi =document.createElement('td');
     cookiesInfi.textContent=this.cookiesList[i];
     Srow.appendChild(cookiesInfi);
     total+=this.cookiesList[i];
     totalHouers[i]+=this.cookiesList[i];
};

var cookiesInfi =document.createElement('th');
     cookiesInfi.textContent=total;
     Srow.appendChild(cookiesInfi);

     
};

Locations.prototype.renderTotalHouer=function(){

    var Srow =document.createElement('tr');
    tableInfo.appendChild(Srow);
    var nameLoc=document.createElement('th');
    nameLoc.textContent='Total';
    Srow.appendChild(nameLoc);
    var FTotal=0
    for(var i =0;i<this.cookiesList.length;i++){
        var cookiesInfi =document.createElement('th');
        cookiesInfi.textContent=totalHouers[i];
        Srow.appendChild(cookiesInfi);
        FTotal+=totalHouers[i];
        
   };
   var cookiesInfi =document.createElement('th');
   cookiesInfi.textContent=FTotal;
   Srow.appendChild(cookiesInfi);

};


  
 
   

houerRender();

var Seattle	= new Locations("Seattle",65,23,6.3);
Seattle.getcustomersList();

var Tokyo	= new Locations("Tokyo",3,24,1.2);
Tokyo.getcustomersList(); 

var Dubai	= new Locations("Dubai",11,38,3.7);
Dubai.getcustomersList(); 

var Paris	= new Locations("Paris",20,38,2.3);
Paris.getcustomersList(); 

var Lima	= new Locations("Lima",2,16,4.6);
Lima.getcustomersList(); 
Lima.renderTotalHouer();









  function GetRandom (max,min){
    console.log('GetRandom');
    //var Rnumber = Math.floor(Math.random()*max+1+min);
     var Rnumber =  Math.floor(Math.random() * (max - min + 1) ) + min;
     return Rnumber ;
  };

 
  



