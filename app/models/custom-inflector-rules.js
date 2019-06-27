import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

// Tell the inflector that the plural of device_pool is device_pool
 inflector.irregular('songs', 'songs');

 // Tell the inflector that the plural of device_pool is device_pool
 inflector.uncountable('songs');

 //Modules need to export
 export default{};
