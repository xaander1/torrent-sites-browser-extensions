document.addEventListener('DOMContentLoaded', function () {
if (localStorage.getItem("my_links") !== null && localStorage.getItem("my_links_names") !== null) {
    var user_links=getArrayInLocalStorage2('my_links');
    var user_links_names=getArrayInLocalStorage2('my_links_names');
    for (var i = user_links.length - 1; i >= 0; i--) {
    var secton = document.createElement("section");
    var lnk = document.createElement("a");
    var lnk2 = document.createElement("button");
    var breaktag = document.createElement("p");
    var imgr = document.createElement("img");
    var text = document.createTextNode(user_links_names[i]);
    var text2 = document.createTextNode("Remove");
    lnk.href=user_links[i];
    imgr.src="img/default.png";
    imgr.id="img";
    imgr.className="hvr-grow-shadow";
    lnk2.className="badge badge-dark w-100"
    lnk2.id="my_button";
    lnk2.onclick=function(){
        user_links.splice(i,1);
        user_links_names.splice(i,1);
        setArrayInLocalStorage('my_links',user_links);
        setArrayInLocalStorage('my_links_names',user_links_names);
        window.location.reload();
        }

    lnk.appendChild(imgr);
    breaktag.appendChild(text);
    breaktag.appendChild(lnk2);
    lnk2.appendChild(text2);
    secton.appendChild(lnk);
    secton.appendChild(breaktag);

    var element = document.getElementById("sitebody");
    element.appendChild(secton)
}

    }

});

document.addEventListener('DOMContentLoaded', function () {
 //making links work       
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});

document.addEventListener('DOMContentLoaded', function () {
 var glider=document.getElementById("glider");
    glider.onclick = function(){
        var input_val = document.getElementById("weka_input").value;
        var input_val2 = document.getElementById("weka_input2").value;
        var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if(input_val==""||input_val2==""){
            document.getElementById("red").innerHTML="";
            document.getElementById("norm").innerHTML="Fill all fields";

        }
        else if (!regex .test(input_val)) {
        document.getElementById("red").innerHTML=input_val;
        document.getElementById("norm").innerHTML=" is not a url.";
        }
        else{
        //storage
         if (localStorage.getItem("my_links") === null && localStorage.getItem("my_links_names") === null) {
        var my_link=[];
        var my_link_name=[];
        setArrayInLocalStorage('my_links',my_link);
        setArrayInLocalStorage('my_links_names',my_link_name);
        new_data=getArrayInLocalStorage('my_links',input_val);
        new_data2=getArrayInLocalStorage('my_links_names',input_val2);
        setArrayInLocalStorage('my_links',new_data);
        setArrayInLocalStorage('my_links_names',new_data2);
        //document.write(new_data,new_data2);
        }
        else{
        //document.getElementById("demo").innerHTML="passed";
        new_data=getArrayInLocalStorage('my_links',input_val);
        new_data2=getArrayInLocalStorage('my_links_names',input_val2);
        setArrayInLocalStorage('my_links',new_data);
        setArrayInLocalStorage('my_links_names',new_data2);
       
    }
     window.location.reload();
}
}


});


function setArrayInLocalStorage(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

function getArrayInLocalStorage(key,input_val) {
    dataSorage= JSON.parse(localStorage.getItem(key));
    dataSorage.push(input_val);
    return dataSorage;
}
function getArrayInLocalStorage2(key) {
    results = JSON.parse(localStorage.getItem(key));
    return results;
}