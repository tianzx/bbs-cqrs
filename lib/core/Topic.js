/**
 * Created by tianzx on 2016/5/23.
 */


const Actor =  require('cqrs').Actor;

class Topic extends Actor {
    constructor(data) {
        super(data);
    }
    top(data,serivce){
        service.apply('top');
    }
    untop(data,service) {
        service.apply('untop');
    }
    fine(data,service){
        service.apply('fine');
    }
    unfine(data,service){
        service.apply('unfine');
    }
    access(data,service){
        service.apply('access');
    }
}