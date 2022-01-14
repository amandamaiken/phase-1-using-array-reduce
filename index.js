const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(results, batteries) {
    return results + batteries;
})
// Code your solution here
