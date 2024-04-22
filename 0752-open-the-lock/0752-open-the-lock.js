/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    if (deadends.includes("0000")) {
        return -1;
    }

    const children = (lock) => {
        const res = [];

        for (let i = 0; i < 4; i++) {
            let digit = ((parseInt(lock[i]) + 1) % 10).toString();
            res.push(lock.slice(0, i) + digit + lock.slice(i + 1));
            digit = ((parseInt(lock[i]) + 9) % 10).toString();
            res.push(lock.slice(0, i) + digit + lock.slice(i + 1));
        }

        return res;
    };

    const q = [["0000", 0]];
    const visited = new Set(deadends);

    while (q.length > 0) {
        const [lock, turns] = q.shift();

        if (lock === target) {
            return turns;
        }

        for (const child of children(lock)) {
            if (!visited.has(child)) {
                visited.add(child);
                q.push([child, turns + 1]);
            }
        }
    }

    return -1;
};