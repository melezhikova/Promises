export default class GameSaving {
    constructor(obj = {id, created, userInfo}) {
        this.id = obj.id;
        this.created = obj.created;
        this.userInfo = obj.userInfo;
    }
}
