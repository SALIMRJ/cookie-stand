"use strict"


function Locations (Name,Max,Min,CookAvg, ){
 this.name =Name;
 this.maxCustomers=Max;
 this.minCustomers=Min;
 this.CookiesAvg=CookAvg;
 this.customersList=[];
 this.cookiesList=[];

}
var  totalHouers =[0];
for(var j=0;j<15;j++){
    totalHouers[j]=0;
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
var Srow =document.createElement('tr');
Locations.prototype.renderTotalHouer=function(){
  
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
    var Rnumber =  Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log(Rnumber);
     return Rnumber ;
  };

 
  var newloc=document.getElementById('new-location');
  newloc.addEventListener('submit',addloc);
  function addloc(event,salim){

    event.preventDefault();
    var name= event.target.location.value;
    console.log(name);
    var Nmax =parseInt(event.target.max.value) ;
    console.log(Nmax);
    var Nmin =parseInt(event.target.min.value );
console.log(Nmin);
    var NCavg=parseFloat( event.target.avg.value);
    console.log(NCavg);
    var locobj=new Locations(name,Nmax,Nmin,NCavg);
    console.log('lllllllllll',typeof(Nmax)) ; 
    console.log(max*2);
    console.log(min-5) ;
    console.log(max+min);
    locobj.getcustomersList();
    Srow.remove();
    Srow.textContent='';
    locobj.renderTotalHouer();


    
    
  };
  Locations.prototype.randomNew=function(mmax,mmin){
    for(var t=0;t<=14;t++){
      
     this.customersList[t] = 0 *(mmax - mmin + 1)  + mmin;
      console.log(this.customersList[t]);
      
    } 
    
   


  };



