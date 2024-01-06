const video = document.getElementById('video')
const play = document.getElementById('play')
const stop_btn = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// play and pause video 
function toggle_video_status(){
  if (video.paused) {
    video.play()
  }else{
    video.pause()
  }
}

// update play pause icon
function update_play_icon(){
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2xl"></i>'
  }else{
    play.innerHTML = '<i class="fa fa-pause fa-2xl"></i>'
  }
}

// update progress and timestamp
function update_progress(){
  return true
}

// set video time to progress
function set_video_progress(){
  return true
}

// stop video
function stop_video(){
  video.currentTime = 0
  video.pause()
}

// event listeners
video.addEventListener('click',toggle_video_status)
video.addEventListener('pause',update_play_icon)
video.addEventListener('play',update_play_icon)
video.addEventListener('timeupdate', update_progress)

play.addEventListener('click',toggle_video_status)
stop_btn.addEventListener('click',stop_video)
progress.addEventListener('change',set_video_progress)