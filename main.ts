let speed = 40
let rev_cnt = 0
/**
 * if reflected - no line - light is on
 * 
 * if not reflected - line
 * 
 * sensors should not see the line
 * 
 *  - if left sees the line, then 
 * 
 *         move left by turning your right wheel faster than left wheel
 * 
 * - if right sees line then,
 * 
 *         move right by turning your left wheel faster than right wheel
 * 
 * - if both sees line, then
 * 
 *         keep going straight
 * 
 * - if no one sees line, then
 * 
 *         stop
 */
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 65)
        rev_cnt += 1
        if (rev_cnt > 3) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 65)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 65)
            basic.pause(100)
            rev_cnt = 0
        } else {
            basic.pause(50)
        }
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 65)
        basic.pause(75)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed - 40)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        basic.pause(75)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed - 40)
        basic.pause(75)
    }
})
