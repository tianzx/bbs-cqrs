/**
 * Created by tianzx on 2016/5/23.
 */


const Actor =  require('cqrs').Actor;

class Topic extends Actor {
    constructor(data) {
        //super(data);
        super({
            title:data.title,
            body:data.body,
            fine:false,
            top:false,
            createTime:Date.now(),
            updateTime:Date.now(),
            accessNum:0
        });
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
    update(data,service) {
        service.apply('update',{title:data.title,body:data.body})
    }

    when(event){
        switch (event.name){
            case 'access':
                ++this._data.accessNum;
                break;
            case 'top':
                this._data.top = true;
                break;
            case 'untop':
                this._data.untop = true;
                break;
            case  'fine':
                this._data.fine = true;
                break;
            case 'unfine':
                this._data.unfine  = true;
                break;
        }
    }
}