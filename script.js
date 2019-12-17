
/* Runs the simulation once. If the boolean variable 'changeSelection' is true, then the contestant changes his mind after the host opens a door.
If it is false, the contestant will not change his mind */
function runSingleSimulation(changeSelection, doors, tests) {

    var prizeDoor, chosenDoor, shownDoor, switchDoor;

    // randomly pick a door excluding input doors
    function pick(excludeA, excludeB) {
        var door;
        do {
            door = Math.floor(Math.random() * doors);
        } while (door === excludeA || door === excludeB);
        return door;
    }

    // run tests
    for (var i = 0; i < tests; i++) {

        // pick set of doors

        // the position for the car behind of the 3 doors
        prizeDoor = pick();
        // the position of the contestant's choice - the chosen door
        chosenDoor = pick();
        /*
        Monty opens a door, which cannot be:
        - the door with the car behind it
        - the door that the contestant chosen
        */
        shownDoor = pick(prizeDoor, chosenDoor); // openedDoorIndex
        /*
        If the contestant changed his choice, we only have one door left that he can choose:
        - the door that is not the one that he initially chose
        - the door that was opened
        */
        if (changeSelection) {
            switchDoor = pick(chosenDoor, shownDoor); // remainingDoorIndex
            chosenDoor = switchDoor;
        }

        return (chosenDoor == prizeDoor)
    }
}

/* We have to count how many times each set of contestants will if they either change their mind or if they'll stick with the initial door 
In this example, we will run the simulation for 100.000 times first for the contestants that will change their mind and then 100.000 times more
for the ones that will not change their initial door, so the boolean variable 'changeSelection' will first be 'true' for the ones that changed
and then 'false' for the contestants that didn't change their initial choice.
*/
function runMontyHallSimulation(timesToRun, changeSelection, doors) {
    var wins = 0;
    for (var count = 0; count < timesToRun; ++count) {
        if (runSingleSimulation(changeSelection, doors, timesToRun)) {
            ++wins;
        }
    }
    return wins;
}

// utility variables to update the values that are shown in the table
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

function updateDisplay4(totalCountChanged4, changedAndWon4, simulationWithChangesDuration4, totalCountDidNotChange4, didNotChangeAndWon4, simulationWithoutChangesDuration4) {
    var totalCountChangedElement4 = document.getElementById("totalCountChanged4");
    totalCountChangedElement4.innerText = totalCountChanged4;

    var changedAndWonElement4 = document.getElementById("changedAndWon4");
    changedAndWonElement4.innerText = changedAndWon4;

    var changedAndWonPercentageElement4 = document.getElementById("changedAndWonPercentage4");
    changedAndWonPercentageElement4.innerText = Math.round(changedAndWon4 * 1000.0 / totalCountChanged4) / 10.0;

    var simulationWithChangesDurationElement4 = document.getElementById("simulationWithChangesDuration4");
    simulationWithChangesDurationElement4.innerText = Math.round(simulationWithChangesDuration4);

    var totalCountDidNotChangeElement4 = document.getElementById("totalCountDidNotChange4");
    totalCountDidNotChangeElement4.innerText = totalCountDidNotChange4;

    var didNotChangeAndWonElement4 = document.getElementById("didNotChangeAndWon4");
    didNotChangeAndWonElement4.innerText = didNotChangeAndWon4;

    var didNotChangeAndWonPercentageElement4 = document.getElementById("didNotChangeAndWonPercentage4");
    didNotChangeAndWonPercentageElement4.innerText = Math.round(didNotChangeAndWon4 * 1000.0 / totalCountDidNotChange4) / 10.0;

    var simulationWithoutChangesDurationElement4 = document.getElementById("simulationWithoutChangesDuration4");
    simulationWithoutChangesDurationElement4.innerText = Math.round(simulationWithoutChangesDuration4);
}

function updateDisplay5(totalCountChanged5, changedAndWon5, simulationWithChangesDuration5, totalCountDidNotChange5, didNotChangeAndWon5, simulationWithoutChangesDuration5) {
    var totalCountChangedElement5 = document.getElementById("totalCountChanged5");
    totalCountChangedElement5.innerText = totalCountChanged5;

    var changedAndWonElement5 = document.getElementById("changedAndWon5");
    changedAndWonElement5.innerText = changedAndWon5;

    var changedAndWonPercentageElement5 = document.getElementById("changedAndWonPercentage5");
    changedAndWonPercentageElement5.innerText = Math.round(changedAndWon5 * 1000.0 / totalCountChanged5) / 10.0;

    var simulationWithChangesDurationElement5 = document.getElementById("simulationWithChangesDuration5");
    simulationWithChangesDurationElement5.innerText = Math.round(simulationWithChangesDuration5);

    var totalCountDidNotChangeElement5 = document.getElementById("totalCountDidNotChange5");
    totalCountDidNotChangeElement5.innerText = totalCountDidNotChange5;

    var didNotChangeAndWonElement5 = document.getElementById("didNotChangeAndWon5");
    didNotChangeAndWonElement5.innerText = didNotChangeAndWon5;

    var didNotChangeAndWonPercentageElement5 = document.getElementById("didNotChangeAndWonPercentage5");
    didNotChangeAndWonPercentageElement5.innerText = Math.round(didNotChangeAndWon5 * 1000.0 / totalCountDidNotChange5) / 10.0;

    var simulationWithoutChangesDurationElement5 = document.getElementById("simulationWithoutChangesDuration5");
    simulationWithoutChangesDurationElement5.innerText = Math.round(simulationWithoutChangesDuration5);
}

function start() {

    
    // The simulation for 3 doors 
    // with the contestants who changed their choice
    
    var totalCountChanged = 100000;
    var startTime = window.performance.now();
    // the number of games won by them
    var changedAndWon = runMontyHallSimulation(totalCountChanged, true, 3);
    // the duration for this simulation
    var simulationWithChangesDuration = window.performance.now() - startTime;
    
    // The simulation for the the contestants who changed did not their choice
    
    var totalCountDidNotChange = 100000;
    startTime = window.performance.now();
    // the number of games won by them
    var didNotChangeAndWon = runMontyHallSimulation(totalCountDidNotChange, false, 3);
    // the duration for this simulation
    var simulationWithoutChangesDuration = window.performance.now() - startTime;
    updateDisplay(totalCountChanged, changedAndWon, simulationWithChangesDuration, totalCountDidNotChange, didNotChangeAndWon, simulationWithoutChangesDuration);


    // The simulation for 4 doors 

    var totalCountChanged4 = 100000;
    var startTime4 = window.performance.now();
    // the number of games won by them
    var changedAndWon4 = runMontyHallSimulation(totalCountChanged4, true, 4);
    // the duration for this simulation
    var simulationWithChangesDuration4 = window.performance.now() - startTime4;

    // The simulation for the the contestants who changed did not their choice

    var totalCountDidNotChange4 = 100000;
    startTime4 = window.performance.now();
    // the number of games won by them
    var didNotChangeAndWon4 = runMontyHallSimulation(totalCountDidNotChange4, false, 4);
    // the duration for this simulation
    var simulationWithoutChangesDuration4 = window.performance.now() - startTime4;
    updateDisplay4(totalCountChanged4, changedAndWon4, simulationWithChangesDuration4, totalCountDidNotChange4, didNotChangeAndWon4, simulationWithoutChangesDuration4)
    
    
    // The simulation for 5 doors 

    var totalCountChanged5 = 100000;
    var startTime5 = window.performance.now();
    // the number of games won by them
    var changedAndWon5 = runMontyHallSimulation(totalCountChanged5, true, 5);
    // the duration for this simulation
    var simulationWithChangesDuration5 = window.performance.now() - startTime5;

    // The simulation for the the contestants who changed did not their choice

    var totalCountDidNotChange5 = 100000;
    startTime5 = window.performance.now();
    // the number of games won by them
    var didNotChangeAndWon5 = runMontyHallSimulation(totalCountDidNotChange5, false, 5);
    // the duration for this simulation
    var simulationWithoutChangesDuration5 = window.performance.now() - startTime5;
    updateDisplay5(totalCountChanged5, changedAndWon5, simulationWithChangesDuration5, totalCountDidNotChange5, didNotChangeAndWon5, simulationWithoutChangesDuration5)
}
