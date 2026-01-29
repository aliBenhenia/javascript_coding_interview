const waiter = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("s");
            resolve("done");
        }, 100);
    });
};

const resolving = async () => {
    try {
        const resolved = await Promise.all([waiter(), waiter()]);
        console.log(resolved);
        return resolved;
    } catch (e) {
        console.error(e);
    }
};

resolving();
