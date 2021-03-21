$(document).ready(function() {
  $('.unfollow_btn').hover(function(){
    $(this).removeClass('btn-primary');
    $(this).addClass('btn-danger');
    $(this).html("Unfollow");
  }, function(){
    $(this).html("Following");
    $(this).removeClass('btn-danger');
    $(this).addClass('btn-primary');
  });
})


// works, leave as is

//  var map;
//     function initMap() {
//      map = new google.maps.Map(document.getElementById('map'), {
//        center: coords,
//        zoom: 10,
//        scrollwheel: false
//      });
//
//      let image = {
//              url: '/gatortwo.png',
//              scaledSize: new google.maps.Size(75, 75)
//        };
//
//      let marker = new google.maps.Marker({
//              position: coords,
//              map: map,
//              icon: image,
//              animation: google.maps.Animation.BOUNCE
//            });
//
//          let contentString = '<h2>' + city + ', ' + state + ', the best place to fish in North Louisiana!</h2>';
//
//      let infoWindow = new google.maps.InfoWindow({
//          content: contentString
//      })
//
//      google.maps.event.addListener(marker, 'click', () => infoWindow.open(map, marker));
//
//    }

// above working code stops here

// below code starts here




// caddo lake starts here, works
//
//        var map2;
//
//            function initMap() {
//              map = new google.maps.Map(document.getElementById('map'), {
//                center: coords3,
//                zoom: 10,
//                scrollwheel: false
//              });
//
//              let image = {
//                      url: '/gatortwo.png',
//                      scaledSize: new google.maps.Size(75, 75)
//                };
//
//              let marker = new google.maps.Marker({
//                      position: coords3,
//                      map: map,
//                      icon: image,
//                      animation: google.maps.Animation.BOUNCE
//                    });
//
//
//                  let contentString2 = '<h2>The best place to fish in North Louisiana!</h2>';
//
//
//
//
//              let infoWindow = new google.maps.InfoWindow({
//                  content: contentString2
//              })
//
//              google.maps.event.addListener(marker, 'click', () => infoWindow.open(map, marker));
//
//            }
//
// above code stops here


// this block starts here, 3
//
        var map2;

                    function initMap() {
                      map = new google.maps.Map(document.getElementById('map'), {
                        center: coords3,
                        zoom: 10,
                        scrollwheel: true
                      });

                      let image = {
                              url: '/gatortwo.png',
                              scaledSize: new google.maps.Size(75, 75)
                        };

                      let marker = new google.maps.Marker({
                              position: coords3,
                              map: map,
                              icon: image,
                              animation: google.maps.Animation.BOUNCE
                            });

                       let marker2 = new google.maps.Marker({
                                                    position: coords,
                                                    map: map,
                                                    icon: image,
                                                    animation: google.maps.Animation.BOUNCE
                                                  });

                       let marker3 = new google.maps.Marker({
                                                     position: coords4,
                                                     map: map,
                                                     icon: image,
                                                     animation: google.maps.Animation.BOUNCE
                                                   });

//                              let contentString2 = '<h2>The best place to fish in North Louisiana!</h2>';
//
//                                                   let infoWindow = new google.maps.InfoWindow({
//                                                       content: contentString2
//                                                   })
//                                                   google.maps.event.addListener(marker, 'click', () => infoWindow.open(map, marker));
//
////                                                 }
                        let marker5 = new google.maps.Marker({
                                                      position: coords6,
                                                      map: map,
                                                      icon: image,
                                                      animation: google.maps.Animation.BOUNCE
                                                    });

                        let marker6 = new google.maps.Marker({
                                                      position: coords7,
                                                      map: map,
                                                      icon: image,
                                                      animation: google.maps.Animation.BOUNCE
                                                    });


                        let marker7 = new google.maps.Marker({
                                                      position: coords8,
                                                      map: map,
                                                      icon: image,
                                                      animation: google.maps.Animation.BOUNCE
                                                    });

                        let marker8 = new google.maps.Marker({
                                                                              position: coords9,
                                                                              map: map,
                                                                              icon: image,
                                                                              animation: google.maps.Animation.BOUNCE
                                                                            });


                       let marker4 = new google.maps.Marker({
                                                     position: coords5,
                                                     map: map,
                                                     icon: image,
                                                     animation: google.maps.Animation.BOUNCE
                                                                          });

                      let contentString = '<h2>The best place to fish in North Louisiana!</h2>';

                      let infoWindow = new google.maps.InfoWindow({
                          content: contentString2
                      })
                      google.maps.event.addListener(marker, 'click', () => infoWindow.open(map, marker));

                    }
//
// this block stops here, 3







//  var map2;
//    let coords = {lat: 32.5221828, lng: -93.7651944}
//    function initMap() {
//      map = new google.maps.Map(document.getElementById('map'), {
//        center: coords,
//        zoom: 10,
//        scrollwheel: false
//      });
//
//  //    let image = {
//  //            url: '/cheems.png',
//  //            scaledSize: new google.maps.Size(50, 50)
//  //      };
//
//      let marker = new google.maps.Marker({
//              position: coords,
//              map: map,
//  //            icon: image,
//  //            animation: google.maps.Animation.BOUNCE
//            });
//
//     // let contentString = `<h2> ${city}, ${state} </h2>`;
//     // let contentString = '<h2>' + city + ', ' + state + ', where your dreams come true!</h2>';
//          let contentString2 = '<h2>' ' the 2nd best place to live in the world!</h2>';
//
//
//
//
//      let infoWindow = new google.maps.InfoWindow({
//          content: contentString2
//      })
//
//      google.maps.event.addListener(marker, 'click', () => infoWindow.open(map, marker));
//
//    }
//



//  original
//  var map;
//  //  let coords = {lat: 39.9612, lng: -82.9988}
//    function initMap() {
//      map = new google.maps.Map(document.getElementById('map'), {
//        center: coords,
//        zoom: 10,
//        scrollwheel: false
//      });
//
//  //    let image = {
//  //            url: '/cheems.png',
//  //            scaledSize: new google.maps.Size(50, 50)
//  //      };
//
//      let marker = new google.maps.Marker({
//              position: coords,
//              map: map,
//  //            icon: image,
//  //            animation: google.maps.Animation.BOUNCE
//            });
//
//     // let contentString = `<h2> ${city}, ${state} </h2>`;
//     // let contentString = '<h2>' + city + ', ' + state + ', where your dreams come true!</h2>';
//          let contentString = '<h2>' + city + ', ' + state + ', the best place to live in the world!</h2>';
//
//
//
//
//      let infoWindow = new google.maps.InfoWindow({
//          content: contentString
//      })
//
//      google.maps.event.addListener(marker, 'click', () => infoWindow.open(map, marker));
//
//    }