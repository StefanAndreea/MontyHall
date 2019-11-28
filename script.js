function chooseRandomIndex() {
    return Math.floor(Math.random() * 3);
}

function runSingleSimulation(changeSelection) {
    var carIndex = chooseRandomIndex();
    var userIndex = chooseRandomIndex();
    var validOpenDoorIndexes = [0, 1, 2].filter(value => {
        return (value != carIndex) && (value != userIndex);
    });
    var openedDoorIndex = validOpenDoorIndexes[Math.floor(Math.random() * validOpenDoorIndexes.length)];
    if (changeSelection) {
        var remainingDoorIndex = [0, 1, 2].filter(value => {
            return (value != userIndex) && (value != openedDoorIndex);
        })[0]; userIndex = remainingDoorIndex;
    }
    return (userIndex == carIndex);
}

function runMontyHallSimulation(timesToRun, changeSelection) {
    var wins = 0;
    for (var count = 0; count < timesToRun; ++count) {
        if (runSingleSimulation(changeSelection))
        {
            ++wins;
        }
    }
    return wins;
}

function updateDisplay(totalCountChanged, changedAndWon, simulationWithChangesDuration, totalCountDidNotChange, didNotChangeAndWon, simulationWithoutChangesDuration) {
  
    var totalCountChangedElement = document.getElementById("totalCountChanged");
    totalCountChangedElement.innerText = totalCountChanged;

    var changedAndWonElement = document.getElementById("changedAndWon");
    changedAndWonElement.innerText = changedAndWon;

    var changedAndWonPercentageElement = document.getElementById("changedAndWonPercentage");
    changedAndWonPercentageElement.innerText = Math.round(changedAndWon * 1000.0 / totalCountChanged) / 10.0;

    var simulationWithChangesDurationElement = document.getElementById("simulationWithChangesDuration");
    simulationWithChangesDurationElement.innerText = Math.round(simulationWithChangesDuration);

    var totalCountDidNotChangeElement = document.getElementById("totalCountDidNotChange");
    totalCountDidNotChangeElement.innerText = totalCountDidNotChange;

    var didNotChangeAndWonElement = document.getElementById("didNotChangeAndWon");
    didNotChangeAndWonElement.innerText = didNotChangeAndWon;

    var didNotChangeAndWonPercentageElement = document.getElementById("didNotChangeAndWonPercentage");
    didNotChangeAndWonPercentageElement.innerText = Math.round(didNotChangeAndWon * 1000.0 / totalCountDidNotChange) / 10.0;

    var simulationWithoutChangesDurationElement = document.getElementById("simulationWithoutChangesDuration");
    simulationWithoutChangesDurationElement.innerText = Math.round(simulationWithoutChangesDuration);
}

function start() {
    var totalCountChanged = 100000;
    var startTime = window.performance.now();
    var changedAndWon = runMontyHallSimulation(totalCountChanged, true);
    console.log(changedAndWon);
    var simulationWithChangesDuration = window.performance.now() - startTime;

    var totalCountDidNotChange = 100000;
    startTime = window.performance.now();
    var didNotChangeAndWon = runMontyHallSimulation(totalCountDidNotChange, false);
    console.log(didNotChangeAndWon);
    console.log(changedAndWon + didNotChangeAndWon);
    var simulationWithoutChangesDuration = window.performance.now() - startTime;
    updateDisplay(totalCountChanged, changedAndWon, simulationWithChangesDuration, totalCountDidNotChange, didNotChangeAndWon, simulationWithoutChangesDuration);
}

/*

-> incercare 4 si 5 usi
-> descriere + explicatie paradox pe site 
-> documentatie completa pdf

*/