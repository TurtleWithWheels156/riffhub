import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        console.log('returning dummy data');
        //return {data:[{id:'1234', type:'songs', attributes: {info:'hey'}}]};
        return [{info:'song1'}, {info:'song2'}, {info:'song3'}, {info:'song4'}]
    },
});
