function hasType(key, type) {
    // Logic to check if 'key' has the type 'type'.
    // For simplicity, let's assume we have an object with predefined types.
    const types = {
        log: 'Log',   // Key 'log' has type 'Log'
        error: 'Error', // Key 'error' has type 'Error'
        info: 'Info'  // Key 'info' has type 'Info'
    };

    // Check if the key exists and if its type matches the provided type
    return types[key] === type;
}

// Example usage
const key = 'log';
const Log = 'Log';

console.log(hasType(key, Log)); // Should print true if the type matches
