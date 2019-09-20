// use the call3Times function to print "Hello, world!" 3 times

function call3Times(fun) {
    fun();
    fun();
    fun();
}

function fun() {
    console.log("Hello, world!");
}

call3Times(fun);
