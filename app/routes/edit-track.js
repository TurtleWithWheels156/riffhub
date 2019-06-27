import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    //TODO: Should we be going to "store" here instead?
    /*return this.modelFor('device_pool').find((item) => {
      return item.get('id') == params.song_name;
    });*/
    // TODO: temp until flask server is spun up
    var song_list = [{info:'song1'}, {info:'song2'}, {info:'song3'}, {info:'song4'}]
    for (var i = 0; i < song_list.length; i++) {
      if (song_list[i].info == params.song_name) {
        return song_list[i];
      }
    }   
  }
});
