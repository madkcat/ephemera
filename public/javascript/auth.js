function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var clickedmodal = "";
var testResponse = {};
var modalParse;

$(document).ready(function(){
    $('.content').mouseenter(function() {
        $(".content-overlay").css({"opacity": "1"});
        $(".content-details").css({"top": "50%", "left": "50%", "opacity": "1"});
    });
    $('.content').mouseleave(function() {
        $(".content-overlay").css({"opacity": "0"});
        $(".content-details").css({"top": "0", "left": "0", "opacity": "0"});
    });
    // modal display
    $('.modal').modal();
    // on click function to open the modal
    $(document).on('click', function () {
        console.log(this);
        $('#modal1').modal('open');
        // displays the object insie the modal
        $("#signup").prepend(`
            <div class="signup">
                <div class="row">
                    <div class="col-md">
                        <form id="signup" name="signup" method="post" action="/signup">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="firstname">First Name</label>
                                <input type="text" name="firstname" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="lastname">Last Name</label>
                                <input type="text" name="lastname" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                                <button type="submit" class="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        `);
        
    });
    
});

