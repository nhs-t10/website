// When the user scrolls the page, execute myFunction
  window.onscroll = function() {scroll()};

  // Get the navbar
  var sticky = 500;
  var reloading = true;
  var vidId = google.script.run.withSuccessHandler(loadNHSN).latestNHSN();
  function loadNHSN(id){

    document.getElementById("yt").setAttribute("src", "https://www.youtube.com/embed/"+id.toString());
  }
  function myModalOpen(modal, modalbutton){

    document.getElementById(modal).setAttribute("style","z-index: 1000000003; display: block; opacity: 1; top: 10%; border-radius: 25px; animation: enlarge 0.25s linear;");
    setTimeout(() => {document.getElementById(modal).setAttribute("style","z-index: 1000000003; display: block; opacity: 1; top: 10%; border-radius: 25px; transform:scale(1);"); document.getElementById(modalbutton).setAttribute("onclick", "")}, 200);

  }
  function myModalClose(modal, modalbutton){
    document.getElementById(modal).setAttribute("style","z-index: 1000000003; display: block; opacity: 1; top: 10%; border-radius: 25px; animation: closeModal 0.25s linear;");
    setTimeout(() => {document.getElementById(modal).setAttribute("style","z-index: 1000000003; display: block; opacity: 1; top: 10%; border-radius: 25px; transform:scale(0);"); document.getElementById(modalbutton).setAttribute("onclick", "myModalOpen('athleticsModal','athButton');")}, 130);
  }
  function openModal(){
    var btn = document.getElementById("btn");
    var pop = document.getElementById("pop");
    var h1 = document.getElementById("h1");
    if(pop.className=="pop closed"){


      pop.setAttribute("class", "pop open");
      h1.setAttribute("class", "animate");



    }
    else if(pop.className=="pop open"){

      h1.setAttribute("class", "");
      pop.setAttribute("class", "pop closed");

    }
  }
  function openModal1(){
    var btn1 = document.getElementById("btn1");
    var pop1 = document.getElementById("pop1");
    var h1 = document.getElementById("h1_1");
    if(pop.className=="pop closed"){


      pop.setAttribute("class", "pop open");
      h1.setAttribute("class", "animate");



    }
    else if(pop.className=="pop open"){

      h1.setAttribute("class", "");
      pop.setAttribute("class", "pop closed");

    }
  }


  function changePage(page) {

    var main = document.getElementById("main");
    main.hidden = true;

    var newPage = document.getElementById(page);
    newPage.hidden = false;

    var footer = document.getElementById('footer');
    footer.hidden=false;

    if(page == "eventHub"){

      loadData1();
    }

  }
  function backToMain(page) {
    var main = document.getElementById("main");
    main.hidden = false;
    var oldPage = document.getElementById(page);
    oldPage.hidden = true;
    var footer = document.getElementById('footer');
    footer.hidden=true;
  }
  function hideButton(tab) {
    var reloader = document.getElementById("reloader");
    if(tab=="about"||tab=="calendar"||tab=="report"){
      reloader.hidden=true;
    }else if(reloading==false){
      reloader.hidden=false;
    }
  }

  function loadData1(){
    google.script.run.reloadSheet();
    var tab2 = document.getElementById("tab2");
    var tab3 = document.getElementById("tab3");
    var tab4 = document.getElementById("tab4");
    tab2.classList.add("disabled");
    tab3.classList.add("disabled");
    tab4.classList.add("disabled");
    var title1 = google.script.run.withSuccessHandler(loadTitle1).loadTitle1();
    var descr1 = google.script.run.withSuccessHandler(loadDesc1).loadDesc1();
    var img1 = google.script.run.withSuccessHandler(loadImg1).loadImg1();
    var time1 = google.script.run.withSuccessHandler(loadTime1).loadTime1();
    var tag1 = google.script.run.withSuccessHandler(loadTag1).loadTag1();
    loadData2();
    return;
  }
  function loadData2(){
    var title2 = google.script.run.withSuccessHandler(loadTitle2).loadTitle2();
    var descr2 = google.script.run.withSuccessHandler(loadDesc2).loadDesc2();
    var img2 = google.script.run.withSuccessHandler(loadImg2).loadImg2();
    var time2 = google.script.run.withSuccessHandler(loadTime2).loadTime2();
    var tag2 = google.script.run.withSuccessHandler(loadTag2).loadTag2();
    loadData3();
    return;
  }
  function loadData3(){
    var title3 = google.script.run.withSuccessHandler(loadTitle3).loadTitle3();
    var descr3 = google.script.run.withSuccessHandler(loadDesc3).loadDesc3();
    var img3 = google.script.run.withSuccessHandler(loadImg3).loadImg3();
    var time3 = google.script.run.withSuccessHandler(loadTime3).loadTime3();
    var tag3 = google.script.run.withSuccessHandler(loadTag3).loadTag3();
    loadData4();
    return;
  }
  function loadData4(){
    var title4 = google.script.run.withSuccessHandler(loadTitle4).loadTitle4();
    var descr4 = google.script.run.withSuccessHandler(loadDesc4).loadDesc4();
    var img4 = google.script.run.withSuccessHandler(loadImg4).loadImg4();
    var time4 = google.script.run.withSuccessHandler(loadTime4).loadTime4();
    var tag4 = google.script.run.withSuccessHandler(loadTag4).loadTag4();
    loadData5();
    return;
  }
  function loadData5(){
    var title5 = google.script.run.withSuccessHandler(loadTitle5).loadTitle5();
    var descr5 = google.script.run.withSuccessHandler(loadDesc5).loadDesc5();
    var img5 = google.script.run.withSuccessHandler(loadImg5).loadImg5();
    var time5 = google.script.run.withSuccessHandler(loadTime5).loadTime5();
    var tag5 = google.script.run.withSuccessHandler(loadTag5).loadTag5();
    loadData6();
    return;
  }
  function loadData6(){
    var title6 = google.script.run.withSuccessHandler(loadTitle6).loadTitle6();
    var descr6 = google.script.run.withSuccessHandler(loadDesc6).loadDesc6();
    var img6 = google.script.run.withSuccessHandler(loadImg6).loadImg6();
    var time6 = google.script.run.withSuccessHandler(loadTime6).loadTime6();
    var tag6 = google.script.run.withSuccessHandler(loadTag6).loadTag6();
    loadData7();
    return;
  }
  function loadData7(){
    var title7 = google.script.run.withSuccessHandler(loadTitle7).loadTitle7();
    var descr7 = google.script.run.withSuccessHandler(loadDesc7).loadDesc7();
    var img7 = google.script.run.withSuccessHandler(loadImg7).loadImg7();
    var time7 = google.script.run.withSuccessHandler(loadTime7).loadTime7();
    var tag7 = google.script.run.withSuccessHandler(loadTag7).loadTag7();
    loadData8();
    return;
  }
  function loadData8(){
    var title8 = google.script.run.withSuccessHandler(loadTitle8).loadTitle8();
    var descr8 = google.script.run.withSuccessHandler(loadDesc8).loadDesc8();
    var img8 = google.script.run.withSuccessHandler(loadImg8).loadImg8();
    var time8 = google.script.run.withSuccessHandler(loadTime8).loadTime8();
    var tag8 = google.script.run.withSuccessHandler(loadTag8).loadTag8();
    loadData9();
    return;
  }
  function loadData9(){
    var title9 = google.script.run.withSuccessHandler(loadTitle9).loadTitle9();
    var descr9 = google.script.run.withSuccessHandler(loadDesc9).loadDesc9();
    var img9 = google.script.run.withSuccessHandler(loadImg9).loadImg9();
    var time9 = google.script.run.withSuccessHandler(loadTime9).loadTime9();
    var tag9 = google.script.run.withSuccessHandler(loadTag9).loadTag9();
    preloader();
    return;
  }

  function preloader(){

    var loader = document.getElementById("loader");
    var home = document.getElementById("Home");
    var content = document.getElementById("EventsContent");
    var tab2 = document.getElementById("tab2");
    var tab3 = document.getElementById("tab3");
    var tab4 = document.getElementById("tab4");
    setTimeout(() => {  loader.hidden = true; content.hidden = false; home.setAttribute("style", "width: 100%;max-width: unset;background-color: transparent; height:fit-content;"); tab2.classList.remove("disabled"); tab3.classList.remove("disabled"); tab4.classList.remove("disabled");}, 3000);
    if(reloading){
      var reloader = document.getElementById("reloader");

      reloader.hidden=true;
      setTimeout(() => { reloader.hidden=false; reloading=false}, 3000);
    }


  }
  function reload(){
    var loader = document.getElementById("loader");
    var reloader = document.getElementById("reloader");
    var home = document.getElementById("Home");
    var content = document.getElementById("EventsContent");
    home.setAttribute("style", "width: 100%;max-width: unset;background-color: transparent; height:600px;")
    loader.hidden = false;
    content.hidden = true;
    reloading=true;
    setTimeout(() => { reloader.hidden=true;
    loadData1(); }, 1000);


  }

  function snackbarEventAdded() {

    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  }
  function createEvent1(){
    var eventtitle1 = document.getElementById("card1title").innerText;
    var eventdesc1 = document.getElementById("card1desc").innerText;

    google.script.run.createEvent1(eventtitle1, eventdesc1);
    snackbarEventAdded();

  }
  function createEvent2(){
    var eventtitle2 = document.getElementById("card2title").innerText;
    var eventdesc2 = document.getElementById("card2desc").innerText;

    google.script.run.createEvent2(eventtitle2, eventdesc2);
    snackbarEventAdded();
  }
  function createEvent3(){
    var eventtitle3 = document.getElementById("card3title").innerText;
    var eventdesc3 = document.getElementById("card3desc").innerText;

    google.script.run.createEvent3(eventtitle3, eventdesc3);
    snackbarEventAdded();

  }
  function createEvent4(){
    var eventtitle4 = document.getElementById("card4title").innerText;
    var eventdesc4 = document.getElementById("card4desc").innerText;

    google.script.run.createEvent4(eventtitle4, eventdesc4);
    snackbarEventAdded();

  }
  function createEvent5(){
    var eventtitle5 = document.getElementById("card5title").innerText;
    var eventdesc5 = document.getElementById("card5desc").innerText;

    google.script.run.createEvent5(eventtitle5, eventdesc5);
    snackbarEventAdded();

  }
  function createEvent6(){
    var eventtitle6 = document.getElementById("card6title").innerText;
    var eventdesc6 = document.getElementById("card6desc").innerText;

    google.script.run.createEvent6(eventtitle6, eventdesc6);
    snackbarEventAdded();

  }
  function createEvent7(){
    var eventtitle7 = document.getElementById("card7title").innerText;
    var eventdesc7 = document.getElementById("card7desc").innerText;

    google.script.run.createEvent7(eventtitle7, eventdesc7);
    snackbarEventAdded();

  }
  function createEvent8(){
    var eventtitle8 = document.getElementById("card8title").innerText;
    var eventdesc8 = document.getElementById("card8desc").innerText;

    google.script.run.createEvent8(eventtitle8, eventdesc8);
    snackbarEventAdded();

  }
  function createEvent9(){
    var eventtitle9 = document.getElementById("card9title").innerText;
    var eventdesc9 = document.getElementById("card9desc").innerText;

    google.script.run.createEvent9(eventtitle9, eventdesc9);
    snackbarEventAdded();

  }
  function loadTitle1(title){
    var y = document.getElementById("card1title")
    y.innerText = title;
  }
  function loadDesc1(descr){
    y = document.getElementById("card1desc");
    y.innerText = descr;
  }
  function loadImg1(imglnk){
    y = document.getElementById("card1");
    y.style = "--bg-img: url("+imglnk+")"
  }
  function loadTime1(time){
    y = document.getElementById("card1time");
    y.innerText = time;
  }
  function loadTitle2(title){
    var y = document.getElementById("card2title")
    y.innerText = title;
  }
  function loadDesc2(descr){
    y = document.getElementById("card2desc");
    y.innerText = descr;
  }
  function loadImg2(imglnk){
    y = document.getElementById("card2");
    y.style = "--bg-img: url("+imglnk+")"
  }
  function loadTime2(time){
    y = document.getElementById("card2time");
    y.innerText = time;
  }
  function loadTitle3(title){
    var y = document.getElementById("card3title")
    y.innerText = title;
  }
  function loadDesc3(descr){
    y = document.getElementById("card3desc");
    y.innerText = descr;
  }
  function loadImg3(imglnk){
    y = document.getElementById("card3");
    y.style = "--bg-img: url("+imglnk+")"
  }
  function loadTime3(time){
    y = document.getElementById("card3time");
    y.innerText = time;
  }
  function loadTag1(tag){
    y = document.getElementById("card1tag");
    y.innerText = tag;
  }
  function loadTag2(tag){
    y = document.getElementById("card2tag");
    y.innerText = tag;
  }
  function loadTag3(tag){
    y = document.getElementById("card3tag");
    y.innerText = tag;
  }
  function loadTitle4(title){
    var y = document.getElementById("card4title")
    y.innerText = title;
  }
  function loadDesc4(descr){
    y = document.getElementById("card4desc");
    y.innerText = descr;
  }
  function loadImg4(imglnk){
    y = document.getElementById("card4");
    y.style = "--bg-img: url("+imglnk+")"
  }
  function loadTime4(time){
    y = document.getElementById("card4time");
    y.innerText = time;

  }
  function loadTag4(tag){
    y = document.getElementById("card4tag");
    y.innerText = tag;
  }
  function loadTitle5(title){
    var y = document.getElementById("card5title")
    y.innerText = title;
  }
  function loadDesc5(descr){
    y = document.getElementById("card5desc");
    y.innerText = descr;
  }
  function loadImg5(imglnk){
    y = document.getElementById("card5");
    y.style = "--bg-img: url("+imglnk+")"
  }
  function loadTime5(time){
    y = document.getElementById("card5time");
    y.innerText = time;

  }
  function loadTag5(tag){
    y = document.getElementById("card5tag");
    y.innerText = tag;
  }
  function loadTitle6(title){
    var y = document.getElementById("card6title")
    y.innerText = title;
  }
  function loadDesc6(descr){
    y = document.getElementById("card6desc");
    y.innerText = descr;
  }
  function loadImg6(imglnk){
    y = document.getElementById("card6");
    y.style = "--bg-img: url("+imglnk+")"
  }
  function loadTime6(time){
    y = document.getElementById("card6time");
    y.innerText = time;

  }
  function loadTag6(tag){
    y = document.getElementById("card6tag");
    y.innerText = tag;
  }


  function loadTitle7(title){
    var y = document.getElementById("card7title")
    y.innerText = title;
  }
  function loadDesc7(descr){
    y = document.getElementById("card7desc");
    y.innerText = descr;
  }
  function loadImg7(imglnk){
    y = document.getElementById("card7");
    y.style = "--bg-img: url("+imglnk+")"
  }
  function loadTime7(time){
    y = document.getElementById("card7time");
    y.innerText = time;

  }
  function loadTag7(tag){
    y = document.getElementById("card7tag");
    y.innerText = tag;
  }
  function loadTitle8(title){
    var y = document.getElementById("card8title")
    y.innerText = title;
  }
  function loadDesc8(descr){
    y = document.getElementById("card8desc");
    y.innerText = descr;
  }
  function loadImg8(imglnk){
    y = document.getElementById("card8");
    y.style = "--bg-img: url("+imglnk+")"
  }
  function loadTime8(time){
    y = document.getElementById("card8time");
    y.innerText = time;

  }
  function loadTag8(tag){
    y = document.getElementById("card8tag");
    y.innerText = tag;
  }
  function loadTitle9(title){
    var y = document.getElementById("card9title")
    y.innerText = title;
  }
  function loadDesc9(descr){
    y = document.getElementById("card9desc");
    y.innerText = descr;
  }
  function loadImg9(imglnk){
    y = document.getElementById("card9");
    y.style = "--bg-img: url("+imglnk+")"
  }
  function loadTime9(time){
    y = document.getElementById("card9time");
    y.innerText = time;

  }
  function loadTag9(tag){
    y = document.getElementById("card9tag");
    y.innerText = tag;
  }
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function scroll() {
    var navbar = document.getElementById("navbar");
    var header = document.getElementById("Header1");
    console.log(navbar.offsetTop);

    // Get the offset position of the navbar

    if (window.pageYOffset >= sticky) {

      navbar.classList.add("sticky");
      navbar.setAttribute("style", "border-radius:25px;width:80vw;z-index:1000;margin-left:9.7vw;");
      header.setAttribute("style", "background-size: auto; background-position: center center; background-image: url('https://media.newscentermaine.com/assets/WCSH/images/aef48409-628e-453f-92e3-231fd9728399/aef48409-628e-453f-92e3-231fd9728399_1920x1080.jpg'); transform: translate3d(0px, 0px, 0px); height:300px;")
    } else {
      navbar.classList.remove("sticky");
      navbar.setAttribute("style", "border-radius:25px;width:80vw;z-index:1000;margin-left:0px; animation:unStick 0.25s linear, AnimationName 6s ease infinite;");
      header.setAttribute("style", "background-size: auto; background-position: center center; background-image: url('https://media.newscentermaine.com/assets/WCSH/images/aef48409-628e-453f-92e3-231fd9728399/aef48409-628e-453f-92e3-231fd9728399_1920x1080.jpg'); transform: translate3d(0px, 0px, 0px); height:300px; animation: unStick 0.25s linear;")
    }
  }