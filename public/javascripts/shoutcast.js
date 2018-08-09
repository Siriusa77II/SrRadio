console.log('%c Sirius Radio', 'font-size:100px;color:#fff;text-shadow:0 3px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);')
console.log('Git: https://github.com/Siriusa77II/SrRadio')
console.log('Version 2.0')
console.log('Environement: Production')

checkStation();
setInterval(function (){
    checkStation();
}, 5000);
function checkStation(){
var xhr = new XMLHttpRequest()
            xhr.open("GET", "https://broadcaster2.cloudsdaleradio.com/api/nowplaying/1", true)
            xhr.onreadystatechange = function(channel) {
                if(xhr.readyState == 4) {
                var data = JSON.parse(xhr.responseText)
                var elm  = document.getElementById("info")
                if(data["station"] === null){
                    console.log('Querying Cloudsdale Radio API');
                    setTimeout('', 100);
                    console.log('API OFFLINE. Probably under maintenance Please check https://status.cloudsdalegroup.com');
                    $('.song').text('API Cloudsdale Radio - Offline');
                    console.log('API Cloudsdale Radio');
                    $('.listen').text('API Cloudsdale Radio - Offline');
                    console.log('API Cloudsdale Radio');
                    $('.next').text('API Cloudsdale Radio - Offline');
                }else{

                    //Now Playing
                    $('.song').text('Now Playing: ' + data.now_playing.song.text);
                    //Check if requested or not. if true  show it.
                    $('.nowRequest').text('Now Playing: ' + data.now_playing.song.text);


                    //song cover
                    $('.art').html('<img src="' + data.now_playing.song.art + '"> ');
                    $('.navArt').html('<img src="' + data.now_playing.song.art +'" width="21px" >');

                    //Listner count
                    $('.listen').html('<i class="fas fa-users"> </i> ' + data.listeners.total);

                    //Next Playing
                    $('.next').text(data.playing_next.song.text);
                    
                    //Next song cover
                    $('.nextArt').html('<img src="' + data.playing_next.song.art +'"> ');
                    
                    //Hisotia
                    //$('.history').text(data.song_history.song.text);
                }
                
                if(data.live.is_live !== null) {
                    //IKD dude!  ¯\_(ツ)_/¯
                }else{
                    $('.live').text('We Are Live!');

                }
                
            }
            // Script reexecute it self every 5 sec
            }
            xhr.send();

        }