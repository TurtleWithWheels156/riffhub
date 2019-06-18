import Component from '@ember/component';
//import {Howl} from 'howler';

export default Component.extend({

  actions: {
    playTrack() {
      var sound1 = new Howl({
          //src: ['sound1.mp3'],
        src: ['https://archive.org/download/onclassical-quality-wav-audio-files-of-classical-music/onclassical_demo_fiati-di-parma_thuille_terzo-tempo_sestetto_small-version_64kb.mp3'],
          html5: true
      });
      sound1.play();
    }
  },
});
