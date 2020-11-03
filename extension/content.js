var nm1 = ["br","c","cr","dr","g","gh","gr","k","kh","kr","n","q","qh","sc","scr","str","st","t","tr","thr","v","vr","x","z","","","","",""];
var nm2 = ["ae","aa","ai","au","uu","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm3 = ["c","k","n","q","t","v","x","z","c","cc","cr","cz","dr","gr","gn","gm","gv","gz","k","kk","kn","kr","kt","kv","kz","lg","lk","lq","lx","lz","nc","ndr","nkr","ngr","nk","nq","nqr","nz","q","qr","qn","rc","rg","rk","rkr","rq","rqr","sc","sq","str","t","v","vr","x","z","q'","k'","rr","r'","t'","tt","vv","v'","x'","z'","","","","","","","","","","","","","","","","",""];
var nm4 = ["","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","oi","ie","ai","ei","eo","ui"];
var nm5 = ["d","ds","k","ks","l","ls","n","ns","ts","x"];

var nm6 = ["b","bh","ch","d","dh","f","h","l","m","n","ph","r","s","sh","th","v","y","z","","","","","","","","",""];
var nm7 = ["ae","ai","ee","ei","ie","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm8 = ["c","d","g","h","l","m","n","r","s","v","z","c","ch","d","dd","dh","g","gn","h","hl","hm","hn","hr","l","ld","ldr","lg","lgr","lk","ll","lm","ln","lph","lt","lv","lz","m","mm","mn","mh","mph","n","nd","nn","ng","nk","nph","nz","ph","phr","r","rn","rl","rz","s","ss","sl","sn","st","v","z","s'","l'","n'","m'","f'","h'"];
var nm10 = ["a","e","i","o","u","a","e","i","o","u","oi","ie","ai","ea","ae"];
var nm11 = ["","","","","d","ds","h","l","ll","n","ns","r","rs","s","t","th"];

var nm12 = ["b","bh","br","c","ch","cr","d","dh","dr","f","g","gh","gr","h","k","kh","kr","l","m","n","q","qh","ph","r","s","sc","scr","sh","st","str","t","th","thr","tr","v","vr","y","x","z","","","","","","",""];
var nm13 = ["ae","aa","ai","au","ee","ei","ie","uu","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm14 = ["c","d","g","h","k","l","m","n","q","r","s","t","v","z","c","d","g","h","k","l","m","n","q","r","s","t","v","z","c","cc","ch","cr","cz","d","dd","dh","dr","g","gm","gn","gr","gv","gz","h","hl","hm","hn","hr","k","k'","kk","kn","kr","kt","kv","kz","l","ld","ldr","lg","lgr","lk","ll","lm","ln","lph","lq","lt","lv","lx","lz","m","mh","mm","mn","mph","n","nc","nd","ndr","ng","ngr","nk","nkr","nn","nph","nq","nqr","nz","ph","phr","q","q'","qn","qr","r","r'","rc","rg","rk","rkr","rl","rn","rq","rqr","rr","rz","s","sc","sl","sn","sq","ss","st","str","t","t'","tt","v","v'","vr","vv","x","x'","z","z'","","","","","","","","","","",""];
var nm15 = ["","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","oi","ie","ai","ea","ae"];
var nm16 = ["d","ds","k","ks","l","ll","ls","n","ns","r","rs","s","t","ts","th","x","","","",""];

console.log("Alien wikipedia is running!!!!")


var charToNum = {'a':23,'b':5,'c':8,'d':11,'e':13,'f':7,'g':10,'h':12,
'i':14,'j':15,'k':17,'l':22,'m':76,'n':9,
'o':16,'p':18,'q':19,'r':26,'s':24,'t':1,'u':2,'v':17,'w':25,'x':26,'y':29,
'z':31,'-':30};

// words i don't want to switch out for alien names
var bannedWords = ['The','It','Had','Then','As','There','Am','And','If','On','Had','Great','Big','Dictator','Revolution','Movement','War','Civil','Coup','World','Duel','Power'];

function wordToNumber(word){
    var characters = word.toLowerCase().split('');
    // console.log(characters);
    var number = 0;
    for (const character of characters){
        number = number + charToNum[character];
        // console.log("number");
        // console.log(number);
    }
    return number;
};

function getAlienName(word){
    // returns a deterministic alien name based on name
    var nameNumber = wordToNumber(word);
    if (nameNumber % 3 === 0){
        rnd = nameNumber % nm1.length;// | 0;
        rnd2 = nameNumber % nm2.length;// | 0;
        rnd3 = nameNumber % nm3.length;// | 0;
        rnd4 = nameNumber % nm4.length;// | 0;
        rnd5 = nameNumber % nm5.length;// | 0;
        if (nm3[rnd3] === ""){
            rnd4 = 0;
        }
        name = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
    }
    else if (nameNumber % 3 === 1){
        rnd = (nameNumber+3) % nm6.length;// | 0;
        rnd2 = (nameNumber+3) % nm7.length;// | 0;
        rnd3 = (nameNumber+3) % nm8.length;// | 0;
        rnd4 = (nameNumber+3) % nm10.length;// | 0;
        rnd5 = (nameNumber+3) % nm11.length;// | 0;
        name = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm10[rnd4] + nm11[rnd5];
    }
    else if (nameNumber % 3 === 2){
        rnd = (nameNumber+2) % nm12.length;// | 0;
        rnd2 = (nameNumber+13) % nm13.length;// | 0;
        rnd3 = (nameNumber+23) % nm14.length;// | 0;
        rnd4 = (nameNumber+2) % nm15.length;// | 0;
        rnd5 = (nameNumber+12) % nm16.length;// | 0;
        if (nm14[rnd3] === ""){
            rnd4 = 0;
        }
        name = nm12[rnd] + nm13[rnd2]+ nm14[rnd3] + nm15[rnd4] + nm16[rnd5];
    }
    else {
        console.log(nameNumber % 3)
        // console.log("AAAAAA NOT WORKING!!! NOT WORKING!!!")
    }
    var capitalName = name.replace(/^\w/,function(c){
        return c.toUpperCase();
    });
    return capitalName;
};

// filters arrays, returns unique array
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function remove_array_element(array, n){
   var index = array.indexOf(n);
   if (index > -1) {
    // console.log(array)
    // console.log(index)
        array.splice(index, 1);
    }
   return array;
 }

// still needs some work, make it better... 
// make it so that things that are linked also get changed...
function getWordsToReplace(){
    var ps = document.getElementsByTagName("p");
    var matchesBig = [];
    for (var paragraph of ps){
        var parContent = paragraph.textContent;
        var parInner = paragraph.innerHTML;
        var sentenceSplit = parContent.split(".").join("#").split("?").join("#").split("!").join("#").split("#");
        var sentencesFirstWordMissing = [];
        for (var sentence of sentenceSplit){
            allButFirstWord = sentence.split(" ").slice(2).join(" ");
            sentencesFirstWordMissing.push(allButFirstWord)
        }
        var candidates = sentencesFirstWordMissing.join(" ");
        var matches = candidates.match(/([A-Z][a-zA-Z-]+)()/g);
        
        matchesBig = matchesBig.concat(matches);
    }
    matchesBig = matchesBig.filter(function(obj) { return obj });
    matchesBig = matchesBig.filter(onlyUnique);
    for (var w of bannedWords){
        console.log(w);
        matchesBig = remove_array_element(matchesBig,w);
    }
    console.log(matchesBig);
    return matchesBig;
}

function alienify(toReplace,alienString){
    for (var word of toReplace){
        alienString = alienString.replaceAll(word,getAlienName(word));
        // alienString = alienString.replaceAll(word.toLowerCase(),getAlienName(word).toLowerCase());
    }
    return alienString;
}

function replaceWords(){
    toReplace = getWordsToReplace();
    
    // replace paragraph
    var ps = document.getElementsByTagName("p");
    for (var paragraph of ps){
        parInner = paragraph.innerHTML;
        paragraph.innerHTML = alienify(toReplace,parInner);
    }

    // replace title 
    var title = document.getElementById("firstHeading");
    titleInner = title.innerHTML;
    title.innerHTML = alienify(toReplace,titleInner);

    // replace fn, table of contents, subtitles, summary(right sidebar)
    var element = document.querySelectorAll(".fn,.toctext,.summary,.mw-headline");
    for (var i of element){
        iInner = i.innerHTML;
        i.innerHTML = alienify(toReplace,iInner);
    };
}


replaceWords();
document.body.style.backgroundColor = "green";
document.getElementById("firstHeading").style.backgroundColor = "yellow";
