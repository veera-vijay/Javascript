
function taskOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 1000); // 1 second delay
    });
}

// Function 2: Simulates an async task
function taskTwo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve();
        }, 500); // 0.5 second delay
    });
}

// Function 3: Simulates an async task
function taskThree() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve();
        }, 700); // 0.7 second delay
    });
}


// Main async function to run tasks in correct order
async function runTasksInOrder() {
    try {
        await taskOne();   // Wait for Task 1
         await taskTwo();// Wait for Task 2
        await taskThree(); // Wait for Task 3
        console.log("All tasks completed in order ✅");
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

// Run the sequenc
taskTwo()
runTasksInOrder();