const canAttendMeetings = (meetings: [number, number][]) => {
    // отсортировать по start value
    // проверить что end меньше start следующего интервала

    const sortedMeetings = meetings.toSorted((a, b) => a[0] - b[0])

    for (let i = 0; i < sortedMeetings.length; i++) {
        const currentMeeting = sortedMeetings[i]

        const nextMeeting = sortedMeetings[i + 1]

        if (nextMeeting && currentMeeting[1] > nextMeeting[0]) return false
    }

    return true
}

console.log(canAttendMeetings([
    [0, 30],
    [5, 15],
    [15, 20],
]))

console.log(canAttendMeetings([
    [7, 10],
    [2, 4],
]))