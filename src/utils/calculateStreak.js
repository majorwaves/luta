const calculateStreak = fights => {
  let streaks = [0];
  let currentStreak = 0;
  let onStreak = false;

  const record = [...fights].reverse();

  record.forEach(fight => {
    // Check result of fight, if it's a win add to current streak
    if (fight.result === "win") {
      onStreak = true;
      if (streaks[currentStreak]) {
        // if this is a ongoing streak, add to it
        streaks[currentStreak] = streaks[currentStreak] + 1;
      } else {
        // if not, start a streak
        streaks[currentStreak] = 1;
      }
    } else {
      if (onStreak) {
        currentStreak = currentStreak + 1;
        onStreak = false;
      }
      // if it's a loss, begin a new streak
    }
  });

  return {
    longest: Math.max(...streaks),
    current: onStreak ? streaks[currentStreak] : "—"
  };
};

export default calculateStreak;
