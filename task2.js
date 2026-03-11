let person = {};

let handler = {

    set(target, property, value) {

        if(property === "name") {

            if(typeof value !== "string" || value.length !== 7) {
                throw new Error("Name must be string with 7 characters");
            }

        }

        else if(property === "address") {

            if(typeof value !== "string") {
                throw new Error("Address must be string");
            }

        }

        else if(property === "age") {

            if(typeof value !== "number" || value < 25 || value > 60) {
                throw new Error("Age must be between 25 and 60");
            }

        }

        target[property] = value;
        return true;
    }

};

let proxyPerson = new Proxy(person, handler);

// right test case

proxyPerson.name = "Mohamed";
proxyPerson.address = "Cairo";
proxyPerson.age = 30;

// wrong test case

// proxyPerson.name = "Ali";
// proxyPerson.age = 20;


console.log(proxyPerson);

