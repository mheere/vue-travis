const addFamilyMember = surname => {
    return child => `${child} ${surname}`;
}

// construct a function so the surname is preserved (closure)
const addChildToSmithFam = addFamilyMember("Smith");

// now we can simply add children into the Smith family without referring to Smith
// since this was already captured (closure) previously.
addChildToSmithFam("Sammie");




// manual js return a function OR use partial application (Ramda)
