// Map the Debris
// According to Kepler's Third Law, the orbital period  T  of two point masses orbiting each other in a circular or elliptic orbit is:

// T=2πa3μ−−−√

// a  is the orbit's semi-major axis
// μ=GM 
// G 
// M 
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    return arr.reduce((acc, item) => {
        const orbitalPeriod = Math.round((2 * Math.PI) * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));

        acc.push(
            {
                name: item.name,
                orbitalPeriod: orbitalPeriod
            }
        )

        return acc;
    }, [])
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))
// [{ name: "sputnik", orbitalPeriod: 86400 }].
console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));
// // [{ name: "iss", orbitalPeriod: 5557 }, { name: "hubble", orbitalPeriod: 5734 }, { name: "moon", orbitalPeriod: 2377399 }].
