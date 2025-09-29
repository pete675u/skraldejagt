//playSound("assets/indian-song.mp3", true);
//setStyle("start_page","height:6000px");
//setStyle("start_page","width:600px");
//setStyle("divApplab","rotate: 0.5deg");
//setStyle("divApplab","overflow:visible");
//setStyle("divApplab","position: relative");
//setStyle("divApplab","top: -0,1px");
//setStyle("game_page","overscroll-behavior-'y: contain");
//playSound("assets/indian-song.mp3", true);


//setStyle("start_page","height:6000px");
//setStyle("divApplab","overflow:auto");


var mouse_x = 0;
var choosenAnimal = "d";
var tempChoosenAnimal = "d";
var mouse_y = 0;
var correntItem = "d";
var correntSortItems = [];
var closedGame = true;
var amountOfUnlockedAnimals = 0;
var score = 0;
var highScore = 0;
var lives = 3;
var trashCounter = {
  trash_bottle: 0,
  trash_straw: 0,
  trash_apple: 0,
  trash_banana: 0,
  trash_pizza: 0,
  trash_sponge: 0,
  trash_sheet: 0,
  trash_newspaper: 0,
  trash_candy_wrapper: 0,
  trash_mask: 0,
  trash_moldy_bread: 0,
  trash_popsicle_stick: 0,
};

var openLock = {
  animal_1: "lock_open_1",
  animal_2: "lock_open_2",
  animal_3: "lock_open_3",
  animal_4: "lock_open_4",
};

var closedLock = {
  animal_1: "lock_closed_1",
  animal_2: "lock_closed_2",
  animal_3: "lock_closed_3",
  animal_4: "lock_closed_4",
  
};



var trash_sort = {
  trash_bottle: "plastic",
  trash_straw: "plastic",
  trash_apple: "food",
  trash_banana: "food",
  trash_pizza: "rest",
  trash_sponge: "rest",
  trash_sheet: "paper",
  trash_newspaper: "paper",
  trash_candy_wrapper: "plastic",
  trash_mask: "rest",
  trash_moldy_bread: "food",
  trash_popsicle_stick: "rest",
  
  
};
var animal_text = {
  animal_1: "Kat (0/10) \n\t Smid 10 stykker papir ud for at låse op for katten",
  animal_2: "Hund (0/10) \n\t Smid 10 plastik flasker ud for at låse op for hunden",
  animal_3: "Guldfisk (0/10) \n\t Smid 10 æbler ud for at låse op for guldfisken",
  animal_4: "Ræv (0/10) \n\t Smid 10 mugne brød ud for at låse op for ræven",
};
var animal_text_unlocked = {
  animal_1: "Kat \n\t Klik på X for at vælge katten!",
  animal_2: "Hund \n\t Klik på X for at vælge hunden!",
  animal_3: "Guldfisk \n\t Klik på X for at vælge guldfisken!",
  animal_4: "Ræv \n\t Klik på X for at vælge ræven!",
};

var animal_image = {
  animal_1: "assets/cat.png",
  animal_2: "assets/dog.png",
  animal_3: "assets/fish.png",
  animal_4: "assets/fox.png",
};
var animal_unlocked = {
  animal_1: "false",
  animal_2: "false",
  animal_3: "false",
  animal_4: "false",
};
var animals = ["animal_1", "animal_2","animal_3","animal_4"];


var pages = ["game_page"];
var page_images = ["assets/city.png","assets/forest.png", "assets/beach.png"];



var trashItems = ["trash_popsicle_stick","trash_moldy_bread","trash_mask","trash_newspaper","trash_candy_wrapper","trash_sheet","trash_bottle", "trash_straw", "trash_apple", "trash_banana", "trash_pizza", "trash_sponge"];

trashItems.forEach(function(item) {
  onEvent(item, "mousedown", function(event) {
    correntItem = item;
    pickupTrash(event);
  });
  onEvent(item, "mouseup", function(event) {
    placeTrash(event);
    
  });
});


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
   return array;
}




setScreen("start_page");
onEvent("index_button", "click", function( ) {
  openIndex();
  });
onEvent("exit_animal","click",function() {
  openIndex();
});


function openIndex() {
  checkUnlock();

  setProperty("index_text_count", "text", "Dyr indsamlet \n\t" + amountOfUnlockedAnimals + "/4" );
  
  
  
  setProperty("index_animal", "image", animal_image[choosenAnimal]);
  setScreen("index_page");
  setPosition("black_screen_1",-100,-100, 0, 0);
  setPosition("animal_text", -300, -300, 100, 100);
  setSize("animal_image",0,0);
  setPosition("exit_animal", -100, -100, 40, 40);
  setPosition("animal_choose", -245, -235, 0, 0);
  for (var i = 0; i < 4; i++) {
    setPosition(closedLock[animals[i]], 5+i*80, 150, 0, 0);
    setPosition(openLock[animals[i]], 5+i*80, 150, 0, 0);
    if (animal_unlocked[animals[i]] == "false") {
      setPosition(closedLock[animals[i]], 5+i*80, 150, 30, 50);
  } else{
      setPosition(openLock[animals[i]], 5+i*80, 150, 30, 50);
  }
  }
}


onEvent("animal_choose", "click", function () {
  choosenAnimal = tempChoosenAnimal;
  setProperty("choosen_animal", "image", animal_image[tempChoosenAnimal]);
  openIndex();
  
});


animals.forEach(function(item) {
  
onEvent(item,"click", function () {
  animal_text = {
  animal_1: "Kat ("+trashCounter["trash_sheet"]+"/10) \n\t Smid 10 stykker papir ud for at låse op for katten",
  animal_2: "Hund ("+trashCounter["trash_bottle"]+ "/10) \n\t Smid 10 plastik flasker ud for at låse op for hunden",
  animal_3: "Guldfisk ("+trashCounter["trash_apple"]+"/10) \n\t Smid 10 æbler ud for at låse op for guldfisken",
  animal_4: "Ræv ("+trashCounter["trash_moldy_bread"]+"/10) \n\t Smid 10 mugne brød ud for at låse op for ræven",
};
  
  if (animal_unlocked[item] == "false") {
    
    
    setPosition("black_screen_1",0,0, 1000, 1000);
    setPosition("animal_text", 60, 190, 230, 90);
    setProperty("animal_text", "text", animal_text[item]);
    
    
    setSize("animal_image",100,80);
    setProperty("animal_image", "image", animal_image[item]);
    setPosition("exit_animal", 260, 180, 40, 40);
  } else {
    setPosition("black_screen_1",0,0, 1000, 1000);
    setPosition("animal_text", 60, 190, 230, 90);
    setProperty("animal_text", "text", animal_text_unlocked[item]);
    setPosition("animal_choose", 245, 235, 40, 40);
    setSize("animal_image",100,80);
    setProperty("animal_image", "image", animal_image[item]);
    setPosition("exit_animal", 260, 180, 40, 40);
    tempChoosenAnimal = item;
    
  }
  
  
  
});
});


function checkUnlock() {
  if (parseInt(trashCounter["trash_sheet"]) >= 10) {
    if (animal_unlocked["animal_1"] == "false") {
      amountOfUnlockedAnimals = amountOfUnlockedAnimals + 1;
//      playSound("assets/category_notifications/game_notification_83.mp3", false);
      
    }
    animal_unlocked["animal_1"] = "true";
  }
  if (parseInt(trashCounter["trash_bottle"]) >= 1) {
    if (animal_unlocked["animal_2"] == "false") {
      amountOfUnlockedAnimals = amountOfUnlockedAnimals + 1;
//      playSound("assets/category_notifications/game_notification_83.mp3", false);
    }
    animal_unlocked["animal_2"] = "true";
  }
  if (parseInt(trashCounter["trash_apple"]) >= 10) {
    if (animal_unlocked["animal_3"] == "false") {
      amountOfUnlockedAnimals = amountOfUnlockedAnimals + 1;
//      playSound("assets/category_notifications/game_notification_83.mp3", false);
    }
    animal_unlocked["animal_3"] = "true";
  }
  if (parseInt(trashCounter["trash_moldy_bread"]) >= 1) {
    if (animal_unlocked["animal_4"] == "false") {
      amountOfUnlockedAnimals = amountOfUnlockedAnimals + 1;
//      playSound("assets/category_notifications/game_notification_83.mp3", false);
    }
    animal_unlocked["animal_4"] = "true";
  }
  
  
  setProperty("index_text", "text", amountOfUnlockedAnimals+"/4");
}

onEvent("point_animal", "click", function () {

});





onEvent("index_page_exit", "click", function( ) {
  setScreen("start_page");
});
onEvent("start_button", "click", function( ) {
  score = 0;
  setProperty("score_counter", "text", "Point: "+score);
  startGame();
  lives = 3;
  setPosition("heart_3", 285, 400, 40, 45);
  setPosition("heart_2", 250, 400, 40, 45);
  
});




function startGame() {
  trashItems = shuffleArray(trashItems);
  for (var i = 0; i < trashItems.length; i++) {
    

    
    setPosition(trashItems[i], 0, 0, 0, 0);
    
    
    
  }
  
  
  for (var j = 0; j < 4; j++) {
    setPosition(trashItems[j], randomNumber(0, 220), randomNumber(100, 340), 100, 100);

    correntSortItems[j] = trashItems[j];
  }
  
  
  page_images = shuffleArray(page_images);
  setProperty("game_page", "image", page_images[0]);
  if  (animal_image[choosenAnimal] !== undefined) {
    setProperty("point_animal", "image", animal_image[choosenAnimal]);
  }
  setScreen("game_page");
  
  
}


onEvent("back_button", "click", function () {
  checkUnlock();
  closedGame = true;
  if (score > highScore) {
    highScore = score;
  }
  setProperty("highscore", "text", "HIGHSCORE: "+ highScore);
  
  setScreen("start_page");
});
  



function pickupTrash(event) {
  mouse_x = event.x;
  mouse_y = event.y ;
}
function placeTrash(event) {
  mouse_x = event.x;
  mouse_y = event.y ;
  trash();
  correntItem = "d";
}


pages.forEach(function(item) {

  onEvent(item, "mousemove", function(event ) {
    if ( correntItem!= "d") {setPosition(correntItem, event.x-50, event.y-50, 100, 100);
    }
  });
});

function trash(){
  if (5 < mouse_x && 80 > mouse_x && 10 < mouse_y && 90 > mouse_y) {
    if (trash_sort[correntItem] == "plastic") {
      rightTrashCan();
    }
    else {
      wrongTrashCan();
    }
}
  else if (90 < mouse_x && 165 > mouse_x && 10 < mouse_y && 90 > mouse_y) {
    if (trash_sort[correntItem] == "food") {
      rightTrashCan();
    }
    else {
      wrongTrashCan();
    }
}
  else if (175 < mouse_x && 250 > mouse_x && 10 < mouse_y && 90 > mouse_y) {
    if (trash_sort[correntItem] == "paper") {
      rightTrashCan();
    }
    else {
      wrongTrashCan();
    }
}



  else if (260 < mouse_x && 335 > mouse_x && 10 < mouse_y && 90 > mouse_y) {
    if (trash_sort[correntItem] == "rest") {
      rightTrashCan();
    }
    else {
      wrongTrashCan();
    }
}


    
}

function wrongTrashCan() {
  playSound("assets/category_alerts/cartoon_negative_bling.mp3", false);
  mouse_y = mouse_y + 120;
  setPosition(correntItem, mouse_x-50, mouse_y-50, 100, 115);
  lives = lives - 1;
  if (lives == 2) {
    setPosition("heart_3", 0, 0, 0, 0);
  }
  if (lives == 1) {
    setPosition("heart_2", 0, 0, 0, 0);
  }
  if (lives < 1) {
    checkUnlock();
    closedGame = true;
    if (score > highScore) {
      highScore = score;
    }
    
    
    setProperty("highscore", "text", "HIGHSCORE: "+ highScore);
  
    setScreen("start_page");
  }
}

function rightTrashCan() {
 setPosition(correntItem, mouse_x-50, mouse_y-50, 0, 0);
 trashCounter[correntItem] = parseInt(trashCounter[correntItem]) + 1;
  correntItem = "d";
    playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
    score = score + 1;
    setProperty("score_counter", "text", "Point: "+score);
    correntSortItems.splice(correntSortItems.indexOf(correntItem), 1);
    if (correntSortItems === undefined || correntSortItems.length == 0) {
      closedGame = false;
      setTimeout(function() {
          if (closedGame == false) {
            startGame();
            playSound("assets/category_achievements/peaceful_win_3.mp3");
          }
            
        }, 1000);
        
      }
  }
