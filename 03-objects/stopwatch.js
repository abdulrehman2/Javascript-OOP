function CreateStopWatch() {
    let duration = 0;
    let isStopped = true;
    let startTime = null;


    this.stop = function () {
        if (!isStopped) {
            let elasped = new Date() - startTime;
            isStopped = true;
            duration = elasped / 1000;

        }
        else
           throw new Error("Already Stopped");
    }

    this.start = function () {
        debugger;
        if (isStopped) {

            if (startTime == null) {
                startTime = new Date();
            }
            isStopped=false;
        }
        else
        throw new Error("Already Started");
    }

    Object.defineProperty(this, "duration", {
        get: function () {
            return duration;
        }
    });

}
this.reset = function () {
    duration = 0;
    isStopped = true;
    startTime = null;

}