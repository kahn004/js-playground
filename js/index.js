/*
dog = pooper + barker
cat = pooper + meower
cleaningRobot = driver + cleaner
murderRobot = driver + killer
murderRobotDog = driver + killer + barker
*/

const barker = state => ({
    bark: () => console.log(`Woof, I am ${state.name}!`)
});

const driver = state => ({
    drive: () => {
        const newState = Object.assign({}, state, { position: state.position + state.speed });
        return newState;
    }
});

const killer = state => ({
    kill: () => console.log(`I'm a killer called ${state.name}!`)
});

const murderRobotDog = (name) => {
    const state = {
        name,
        speed: 100,
        position: 0
    };
    return Object.assign(
        {},
        driver(state),
        killer(state),
        barker(state)
    );
};

murderRobotDog('Doge').kill();
