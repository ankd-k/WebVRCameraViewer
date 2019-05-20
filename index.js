navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
var URL = window.URL || window.webkitURL;
var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
var RTCSessionDescription = window.RTCSessionDescription || window.webkitRTCSessionDescription || window.mozRTCSessionDescription;
var RTCIceCandidate = window.RTCIceCandidate || window.webkitRTCIceCandidate || window.mozRTCIceCandidate;

var debugDOM = window.getElementById('debug');
debugDOM.innerText = 'debug';

// フロント（イン）カメラの場合
// const medias = {audio : false, video : { facingMode: "user" }},
//       video  = document.getElementById("video");

// リア（バック/アウト）カメラの場合
const medias = {audio : false, video : { facingMode: { exact: "environment" } }};
const video  = document.getElementById("video");

navigator.getUserMedia(medias, successCallback, errorCallback);

function successCallback(stream) {
  debugDOM.innerText = 'success.';
  video.srcObject = stream;
};

function errorCallback(error) {
  // alert(error);
  debugDOM.innerText = error;
};
