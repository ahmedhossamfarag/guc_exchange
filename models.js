exports.head = function(title){
return `<head>
        <meta charset="utf-8">
        <title>${title}</title>
        <link rel="stylesheet" href="style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        </head>`;
}

semester = function(num){
return `<div class="panel panel-default"><a href="/?semester=${num}">Semester ${num}</a><i class="glyphicon glyphicon-menu-right"></i></div>`;
}

tutorial = function(data){
return `<div class="flex">
            <div class="panel panel-default" data-toggle="collapse" data-target="#T${data.i}">
                <label>Tutorial ${data.i}</label><i class="glyphicon glyphicon-menu-down"></i>
            </div>
            <div id="T${data.i}" class="collapse">
                <div>
                <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.data}
                </tbody>
                </table>
                </div>
                <div><button class="btn btn-primary"><a href="?new=true&semester=${data.semester}&tutorial=${data.i}">Add New</a></button></div>
            </div>
        </div>`;
}

member = function(m){
    return `<tr>
                <td>${m.name}</td>
                <td>${m.phone}</td>
                <td>${m.gender}</td>
                <td><a href="/?delete=true&name=${m.name}">Delete</a></td>
            </tr>`;
}

repeat = function(fun, args){
    var result = "";
    for (const iterator of args) {
      result += fun(iterator);
    }
    return result;
}

exports.semesters = function(){
    return repeat(semester, Array.from({ length: 10 }, (_, i) => i + 1));
}

exports.tutorials = function(arr, _semester){
     var a = [];
     for (index = 0; index < arr.length; index++) {
         a.push({i: index + 1, semester: _semester, data: repeat(member, arr[index])});
     }
    return repeat(tutorial, a);
}

exports.add = function(semester, tutorial){
    return `<div class="outer">
    <div class="inner">
        <div class="plane">
            <form class="form-horizontal" action="/">
                <div class="form-group">
                <label class="control-label col-sm-2" for="semester"><i class="glyphicon glyphicon-send"></i></label>
                <div class="col-sm-10">
                    <input type="text" name="name" class="form-control" id="semester" placeholder="Enter Semester" value='${semester}' disabled>
                </div>
                </div>
                <div class="form-group">
                <label class="control-label col-sm-2" for="tutorial"><i class="glyphicon glyphicon-send"></i></label>
                <div class="col-sm-10">
                    <input type="text" name="name" class="form-control" id="tutorial" placeholder="Enter Tutorial" value='${tutorial}' disabled>
                </div>
                </div>
                <div class="form-group">
                <label class="control-label col-sm-2" for="name"><i class="glyphicon glyphicon-user"></i></label>
                <div class="col-sm-10">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Enter Name">
                </div>
                </div>
                <div class="form-group">
                <label class="control-label col-sm-2" for="phone"><i class="glyphicon glyphicon-earphone"></i></label>
                <div class="col-sm-10">
                    <input type="text" name="phone" class="form-control" id="phone" placeholder="Enter Phone Number">
                </div>
                </div>
                <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <label class="radio-inline">
                        <input type="radio" name="gender" value="Male" >Male
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="gender" value="Female">Female
                    </label>
                </div>
                </div>
                <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default">Submit</button>
                </div>
                </div>
            </form>
        </div>
    </div>
</div>`;
}