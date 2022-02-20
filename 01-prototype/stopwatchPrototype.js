function StopWatch() {
    let duration = 0;
    let isStopped = true;
    let startTime = null;

    Object.defineProperty(this, "duration", {
        get: function () {
            return duration;
        },
        set: function (value) {
            duration = value;
        }
    });

    Object.defineProperty(this, "isStopped", {
        get: function () {
            return isStopped;
        },
        set: function (value) {
            isStopped = value;
        }
    });

    Object.defineProperty(this, "startTime", {
        get: function () {
            return startTime;
        },
        set: function (value) {
            startTime = value;
        }
    });

}



StopWatch.prototype.stop = function () {
    if (!isStopped) {
        let elasped = new Date() - this.startTime;
        this.isStopped = true;
        this.duration = elasped / 1000;

    }
    else
        throw new Error("Already Stopped");
};

StopWatch.prototype.start = function () {
    debugger;
    if (this.isStopped) {

        if (this.startTime == null) {
            this.startTime = new Date();
        }
        this.isStopped = false;
    }
    else
        throw new Error("Already Started");
}

StopWatch.prototype.reset = function () {
    this.duration = 0;
    this.isStopped = true;
    this.startTime = null;
}