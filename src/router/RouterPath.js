const prefix = "/";
export default class RouterPath {
    static HOME = prefix + '';
    static LOGIN = '/login';
    static nhacungcap = '/nhacungcap';
    static add = '/nhacungcap/add';
    static edit = '/nhacungcap/edit/:id';
    static detail = '/nhacungcap/detail/:id';

    static getRouteWithId (path, id) {
        return path.replace(":id", id)
    }
}