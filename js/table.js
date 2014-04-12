$(function() {

  ////////// Market Report Table //////////

  function Property(street, city, state, price, posted) {

    this.constructor.all.push(this);

    this.street = street;
    this.city = city;
    this.state = state;
    this.price = price;
    this.posted = new Date(posted);

    var self = this;

    function isNew() {
      var currentDate = new Date(),
          daysListed = (((((currentDate - self.posted)/1000)/60)/60)/24);
      if (daysListed < Property.maxDays) {
        return '<span class="new">&#9733;</span> ';
      } 
      else {
        return '';
      }
    }

    this.el = '<tr>'+
                '<td>'+isNew()+this.street+'</td>'+
                '<td>'+this.city+'</td>'+
                '<td>'+this.state+'</td>'+
                '<td>'+this.price+'</td>'+
              '</tr>';

  }

  Property.all = [];
  Property.maxDays = 10;

  Property.displayContent = function() {
    $('.property-count').text(Property.all.length);
    $('.max-days').text(Property.maxDays);
    $.each(Property.all, function(i, property) {
      $('table').find('tbody').append(property.el);
    });
    $('table').stupidtable(); // jQuery table sort plugin
  };

<<<<<<< HEAD
  // get properties via api and create property instances
  function refresh (){
    $.get('http://exceptional-realty-property-ad.herokuapp.com/properties.json', function(response){
      //console.log(response);

      Property.all = []; // clear the array of property instances
      $('table').find('tbody').empty(); //empty table body 

      $.each(response, function(i, property){
        var property = new Property(property.street, property.city, property.state, property.price, property.posted);  
      });
      //console.log(Property.all);
      Property.displayContent();
    });
  }

  refresh(); //call the function once the page loads
  $('#refresh').click(refresh);
  setInterval(refresh, 5000);
  // var property1 = new Property("2345 Fairview Ln.", "Brooklyn", "NY", 1200000, "2014 Apr 3");
  // var property2 = new Property("974 Clapton St.", "Queens", "NY", 998000, "2014 Mar 14");
  // var property3 = new Property("14A Belmont Way", "Bronx", "NY", 874000, "2014 Mar 28");
  // var property4 = new Property("455 Crazy lane", "Queens", "NY", 555000, "2013 Apr 1");
=======
  // get properties via API and create property instances

  function refresh() {
    $.get('http://exceptional-realty-property-ad.herokuapp.com/properties.json', function(response){
      //console.log(response);
>>>>>>> 9c882fe1064ea2a82103871038681c55b340de83

      Property.all = []; //clear the array of property instances.
      $('table').find('tbody').empty(); //empty table body

      $.each(response, function(i, property) {
        var newProperty = new Property(property.street, property.city, property.state, property.price, property.posted);
      });

      //console.log(Property.all);
      Property.displayContent();
    });
  }

  refresh(); //call refresh on page load
  $('#refresh').click(refresh); //refresh on click
  setInterval(refresh, 5000); //repeat refresh every 5 seconds

});