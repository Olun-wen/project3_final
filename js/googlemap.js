function init(){
  var el = document.getElementById('map');
  var guangzhou = new google.maps.LatLng(23.105678, 113.325105);
  var mapOptions = {
    zoom:17,
    center:guangzhou,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var myMap =new google.maps.Map(el,mapOptions);

  var marker = new google.maps.Marker({
    position:guangzhou,
    map:myMap,
    draggable:true,
    title:"Canton Tower",
    animation: google.maps.Animation.DROP
  });
  marker.addListener("click",toggleBounce);

function toggleBounce(){
  if (marker.getAnimation() !==null){
    marker.setAnimation(null);
  }else{
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
  var contentString = "<h1>Canton Tower</h1><p>Canton Tower, 600 meters above sea level, is located in the downtown of Guangzhou, where the new central axis of the city meets the Zhujiang River Landscape axis, facing Haixinsha Island and Zhujiang New Town across the river. </p>" ;
  var infowindow = new google.maps.InfoWindow({
    content:contentString,
  });
  marker.addListener("click",() => {
    infowindow.open({
      map:myMap,
      anchor:marker,
      shouldFocus:false,
    });
  });

  var quadCooeds = [
    {lat:23.107376, lng:113.325963},
    {lat:23.104505, lng:113.324911},
    {lat:23.104821, lng:113.323870},
    {lat:23.108050, lng:113.323404},
  ];
  var quad = new google.maps.Polygon({
    paths:quadCooeds,
    strokeColor:"#ff0000",
    fillColor:"#ff0000",
    strokeOpacity:1,
    strokeWeight:1,
    fillOpacity:0.2,
  });
  quad.setMap(myMap);
}
google.maps.event.addDomListener(window, 'load', init);