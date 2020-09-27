// imidiate invoked funciton


(function(){
 let customers = [];
 let index = 0;


 //Object constructor making in his block 

  function Customer(name,img,text){
      this.name = name;
      this.img = img;
      this.text = text;
  }

  //create Custmer out of Customer  constructor
  function createCustomer (name,img,text){
    let fullImg = `img/customer-${img}.jpg`;
      let customer = new Customer(name,fullImg,text);//creating new Cusstomer with full img path
      customers.push(customer);
  };

  //call function out of createCustomer
  createCustomer('Nikola',1,'Volim Nyx puno puno');
  createCustomer('Nenad',2,'asda Nyx aasdasdsdasd puno');
  createCustomer('Mataruga',3,'Volim Nyx asdasdasdasd puno');
  createCustomer('Cajic',4,'asdasdasd');






//now attach all buttons eventLitener
  document.querySelectorAll('.btn').forEach(function (item) {
    item.addEventListener('click', function (event) {
     event.preventDefault();
     if (event.target.parentElement.classList.contains('prevBtn')) {
      if (index === 0) {
       index = customers.length;
      }
      index--;
      document.getElementById('customer-img').src = customers[index].img;
      document.getElementById('customer-name').textContent = customers[index].name;
      document.getElementById('customer-text').textContent = customers[index].text;
      //These two ifs statements means if the elemt we clicked contains prevBtn in html and when we are clickin on that button is equal to 0 in array its gonna return to 0 (beginning);
     }
     // end of prev
     if (event.target.parentElement.classList.contains('nextBtn')) {
      if (index === (customers.length - 1)) {
       index = 0;
      }
      index++;
  //These two ifs statements means if the elemt we clicked contains nextButton in html and when we are clickin on that button is bigger then lenght(last element of array) it's gonan return to zero beginning;
      document.getElementById('customer-img').src = customers[index].img;//get img from array
      document.getElementById('customer-name').textContent = customers[index].name;//get name from array
      document.getElementById('customer-text').textContent = customers[index].text;//get text from array
     }
    })
   })

})();

