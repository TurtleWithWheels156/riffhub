import Component from '@ember/component';
import { observer } from '@ember/object';
//import {Howl} from 'howler';

export default Component.extend({
  name: 'track 1',
  track: new Howl({
        src: ['https://archive.org/download/onclassical-quality-wav-audio-files-of-classical-music/onclassical_demo_fiati-di-parma_thuille_terzo-tempo_sestetto_small-version_64kb.mp3'],
          html5: true,
          onload: function() {
            console.log('loaded');
          },
          onplay: function () {
          },
          onpause: function () {
          }
  }),
  time_pos: 0,
  actions: {
    playTrack() {
      this.track.play();
      console.log(this.track);
      var time = this.track.seek();
    },

    pause() {
      console.log(this.track); 
      this.track.pause();
    },

    volume() {
      this.track.volume(2);
    },

    pan() {
      this.track.stereo(1.0);
    },
  },
});
