const music = new Audio('audio/1.mp3');
// music.play();



const songs=[
    {
        id:1,
        songName: `Blue Eyes <br><div class="subtitle">Yo Yo Honey Singh</div>`,
        poster:"image/1.jpg"
    },
    {
        id:2,
        songName: `Khushi Jab Bhi Teri <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"image/2.jpg"
    },
    {
        id:3,
        songName: `Dil pe Zakham <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"image/3.jpg"
    },
    {
        id:4,
        songName: `Filhaal 2 <br><div class="subtitle">b Praak</div>`,
        poster:"image/4.jpg"
    },
    {
        id:5,
        songName: `Barshaat ki Dhun <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"image/5.jpg"
    },
    {
        id:6,
        songName: `LUT GAYE <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"image/6.jpg"
    },
    {
        id:7,
        songName: `Bewafa Tera Masoom Chehra <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"image/7.jpg"
    },
    {
        id:8,
        songName: `Teri Galliyan <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"image/8.jpg"
    },
    {
        id:9,
        songName: `Dil Chahte Ho <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"image/9.jpg"
    },
    {
        id:10,
        songName: `Kinna Sona <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"image/10.jpg"
    },
    {
        id:11,
        songName: `Meri Aashiqui <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"image/11.jpg"
    },
    {
        id:12,
        songName: `Dil Galti Kar Baitha Hai <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"image/12.jpg"
    },
    {
        id:13,
        songName: `Dil Chori <br><div class="subtitle">Yo Yo Honey Singh</div>`,
        poster:"image/13.jpg"
    },
    {
        id:14,
        songName: `SUNNY SUNNY <br><div class="subtitle">Yo Yo Honey Singh</div>`,
        poster:"image/14.jpg"
    },
    {
        id:15,
        songName: `Baarish Ki Jaaye <br><div class="subtitle">b praak</div>`,
        poster:"image/15.jpg"
    },
    {
        id:16,
        songName: `Kya Loge Tum <br><div class="subtitle">b praak</div>`,
        poster:"image/16.jpg"
    },
    {
        id:17,
        songName: `Yaar Ka Sataya Hua Hai <br><div class="subtitle">b praak</div>`,
        poster:"image/17.jpg"
    },
    {
        id:18,
        songName: `Kuch Bhi Ho Jaye <br><div class="subtitle">b praak</div>`,
        poster:"image/18.jpg"
    },
    {
        id:19,
        songName: `Baarish Mein Tum <br><div class="subtitle">Neha Kakkar, RohanPreet Singh</div>`,
        poster:"image/19.jpg"
    },
    {
        id:20,
        songName: `Agar tum saath ho <br><div class="subtitle">Arjit Singh</div>`,
        poster:"image/20.jpg"
    },
    {
        id:21,
        songName: `Apna Bana Le <br><div class="subtitle">Arjit Singh</div>`,
        poster:"image/21.jpg"
    },
    {
        id:22,
        songName: `Ae Dil Hai Mushkil <br><div class="subtitle">Arjit Singh</div>`,
        poster:"image/22.jpg"
    },
    {
        id:23,
        songName: `Har Kisi Ko <br><div class="subtitle">Arjit Singh</div>`,
        poster:"image/23.jpg"
    },
    {
        id:24,
        songName: `Kesariya <br><div class="subtitle">Arjit Singh</div>`,
        poster:"image/24.jpg"
    },
    {
        id:25,
        songName: `Thodi Jagah <br><div class="subtitle">Arjit Singh</div>`,
        poster:"image/25.jpg"
    },
    {
        id:26,
        songName: `Tera Fitoor <br><div class="subtitle">Arjit Singh</div>`,
        poster:"image/26.jpg"
    },
    {
        id:27,
        songName: `Tere Pyar me <br><div class="subtitle">Arjit Singh</div>`,
        poster:"image/27.jpg"
    },
    {
        id:28,
        songName: `Tum Hi Ho <br><div class="subtitle">Arjit Singh</div>`,
        poster:"image/28.jpg"
    },
    {
        id:29,
        songName: `Tumse Bhi Zyada <br><div class="subtitle">Arjit Singh</div>`,
        poster:"image/29.jpg"
    }

]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;

});


//search box javascript start
let search_result = document.getElementsByClassName('search_results')[0];

songs.forEach(element =>{
    const {id,songName,poster}=element;
    let card =document.createElement('a');
    card.classList.add('card');
    card.href="#" + id;
    card.innerHTML=`<img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>`;
    search_result.appendChild(card);

});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as =items[index].getElementsByClassName('content')[0];
        let text_value=as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value)>-1) {
            items[index].style.display="flex";
            
        }
        else{
            items[index].style.display="none";

        }
        if (input.value==0) {
            search_result.style.display="none";
            
        } else {
            search_result.style.display="";

            
        }
        
    }
})
//search box javascript end



// Play/pause icon and wave javasript start 
let masterPlay= document.getElementById('masterPlay');
let wave= document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if(music.paused|| music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');

    }
});
// Play/pause icon and wave javasript End

//change playlist song icons when song is play or paused
const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
        
    });
}
//Hover effect on song
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105, 105, 105, .0)';
    });
}


// Play/pause music and poster changes javasript Start

let index = 0;
let poster_master_play=document.getElementById('poster_master_play');  
let download_music =document.getElementById('download_music'); // Download button javascript
let title=document.getElementById('title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        // console.log(index);
        music.src=`audio/${index}.mp3`;  // music target through index value
        poster_master_play.src=`image/${index}.jpg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        // Download button javascript 
        download_music.href = `audio/${index}.mp3`;

        let songTitles =songs.filter((els) =>{
            return els.id ==index;

        });
        songTitles.forEach(elss=>{
            let{songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        });
        // hover effect on  songs
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background="rgb(105, 105, 105, .10)";
    
        //change playlist song icons when song is play or paused
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

    });
});
// Play/pause music and poster changes javasript End

// timing javascript start
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];



music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;  //It will give music current time.
    // console.log(music_curr);
    let music_dur=music.duration;   //  It will give music duration
    // console.log(music_dur);

    let min1=Math.floor(music_dur/60); //it will give music duration minutes
    let sec1=Math.floor(music_dur%60); //it will give music duration second
    // console.log(sec1);
    
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(music_curr/60); //it will give music current time in minutes
    let sec2=Math.floor(music_curr%60); //it will give music current time in second

    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText=`${min2}:${sec2}`;


    let progressBar=parseInt((music_curr / music_dur) * 100);
    seek.value=progressBar;
    // console.log(seek.value);
    let seekbar=seek.value
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

});
// timing javascript End

//increase song timing my self
seek.addEventListener('change', ()=>{
    music.currentTime=seek.value * music.duration / 100;
});

//volume increase and volume decrease javascript start
let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    if (vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a /100;
});
//volume increase and volume decrease javascript end

// song next and previous javascript start
let back=document.getElementById('back');
let next=document.getElementById('next');

// previous
back.addEventListener('click',()=>{
    //index default value is 1
        index-=1;
        if(index < 1){
            index=Array.from(document.getElementsByClassName('songItem')).length;
        }
        music.src=`audio/${index}.mp3`;  // music target through index value
        poster_master_play.src=`image/${index}.jpg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');


        let songTitles =songs.filter((els) =>{
            return els.id ==index;

        });
        songTitles.forEach(elss=>{
            let{songName} = elss;
            title.innerHTML = songName;
        });
        // hover effect on  songs
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background="rgb(105, 105, 105, .10)";
    
        //change playlist song icons when song is play or paused
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})
//next
next.addEventListener('click',()=>{
        index++;
        if(index > Array.from(document.getElementsByClassName('songItem')).length){
            index = 1;
        }
        music.src=`audio/${index}.mp3`;  // music target through index value
        poster_master_play.src=`image/${index}.jpg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');


        let songTitles =songs.filter((els) =>{
            return els.id ==index;

        });
        songTitles.forEach(elss=>{
            let{songName} = elss;
            title.innerHTML = songName;
        });
        // hover effect on  songs
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background="rgb(105, 105, 105, .10)";
    
        //change playlist song icons when song is play or paused
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});


//Popular song arrow javascript start
let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];
//Popular arrow song javascript End



// Popular song arrow javascript start
pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;  // 300 means 300px
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 300;     // 300 means 300px
});
//Popular song arrow javascript End





//Shuffle javascript
let shuffle=document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click',()=>{
    let a =shuffle.innerHTML;
    switch(a){
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML='random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='next';
            break;
    }


});



//play next song after ending first song
const next_music = ()=>{
        if (index >= songs.length) {
            index=1;
            
        } else {
            index++;
        }
        music.src=`audio/${index}.mp3`;  // music target through index value
        poster_master_play.src=`image/${index}.jpg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        // Download button javascript 
        download_music.href = `audio/${index}.mp3`;

        let songTitles =songs.filter((els) =>{
            return els.id ==index;

        });
        songTitles.forEach(elss=>{
            let{songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        });
        // hover effect on  songs
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background="rgb(105, 105, 105, .10)";
    
        //change playlist song icons when song is play or paused
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

}

const repeat_music = ()=>{
        index;
        music.src=`audio/${index}.mp3`;  // music target through index value
        poster_master_play.src=`image/${index}.jpg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        // Download button javascript 
        download_music.href = `audio/${index}.mp3`;

        let songTitles =songs.filter((els) =>{
            return els.id ==index;

        });
        songTitles.forEach(elss=>{
            let{songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        });
        // hover effect on  songs
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background="rgb(105, 105, 105, .10)";
    
        //change playlist song icons when song is play or paused
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

}
const random_music = ()=>{
    if (index >= songs.length) {
        index = 1;
        
    } else {
        index = Math.floor((Math.random() * songs.length)+1);
    }
        // console.log(index);
        music.src=`audio/${index}.mp3`;  // music target through index value
        poster_master_play.src=`image/${index}.jpg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        // Download button javascript 
        download_music.href = `audio/${index}.mp3`;

        let songTitles =songs.filter((els) =>{
            return els.id ==index;

        });
        songTitles.forEach(elss=>{
            let{songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        });
        // hover effect on  songs
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background="rgb(105, 105, 105, .10)";
    
        //change playlist song icons when song is play or paused
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

}

music.addEventListener('ended',()=>{
   let b=shuffle.innerHTML;
   switch (b){
            case 'repeat':
                repeat_music();
                break;
            case 'next':
                next_music();
                break;
            case 'random':
                random_music();
                break;


   }            
    

});
