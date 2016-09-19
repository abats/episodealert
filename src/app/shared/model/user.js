"use strict";
var User = (function () {
    function User() {
    }
    User.prototype.getDisplayName = function () {
        return this.name + this.email;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map