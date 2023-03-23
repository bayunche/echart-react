

var timeParse = function (time, config) {
    if (time > config * 2) {
        console.log("别瞎几把传")

    } else {
        let timeReverse = time - config
        if (timeReverse <= 0) {
            let trueTimeM = config + timeReverse
            // console.log("现在是上午" + trueTimeM + "点")
            return trueTimeM
        } else if (timeReverse >= 0) {
            let trueTimeA = timeReverse
            // console.log("现在是下午" + trueTimeA + "点")
            return trueTimeA
        }
    }

}

timeParse(12)