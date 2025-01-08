module.exports = function(superAdmin, admin) {
    return function(req, res, next) {
        const { user } = res.locals;
        const { users } = res.locals;


        if (superAdmin === user.role || admin === user.role) {
            if(users){
                if(user.role === superAdmin){
                    const updateUsers = users.filter((us) => us.role !== superAdmin);
                    res.locals.users = updateUsers;
                    }else if(user.role === admin){
                        const updateUsers = users.filter((us) => us.role !== admin && us.role !== superAdmin);
                        res.locals.users = updateUsers;
                    }
            }
            next();
        } else {
            res.send('нет доступа');
        }
    }
}


// res.send('Duq ays functiaic ogtvel cheq karox');
