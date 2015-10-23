// ==UserScript==
// @name        Native Youtube interface for VK.com
// @name:ru     Родной интерфейс ютуба ВКонтакте
// @description Changes user interface for youtube videos to native instead of default one
// @description:ru  Возвращает элементы управления видео к их оригинальному виду
// @namespace   https://github.com/nokeya
// @domain      vk.com
// @include     http://vk.com/*
// @include     https://vk.com/*
// @match       http://vk.com/*
// @match       https://vk.com/*
// @update      https://github.com/nokeya/vk-native-youtube/vk-native-youtube.user.js
// @version     1.0
// @grant       none
// ==/UserScript==
function enableControls() {
    // native youtube UI
    var vid = document.getElementById('video_yt_player');
    if (vid != null) {
        if (vid.src.indexOf('controls=0') != -1) // enable user interface
        {
            vid.src = vid.src.replace('controls=0', 'controls=1');
        }
        if (!vid.hasAttribute('allowfullscreen')) // enable fullscreen mode
        {
            vid.setAttribute('allowfullscreen', '1');
        }
        if (vid.src.indexOf('fs=0') != -1) // enable fullscreen button
        {
            vid.src = vid.src.replace('fs=0', 'fs=1');
        }
    }
    // remove VK user interface

    var vkui = document.getElementById('video_yt_ui');
    if (vkui != null) {
        vkui.parentNode.removeChild(vkui);
    }
}
document.addEventListener('DOMNodeInserted', enableControls, true);
enableControls();
