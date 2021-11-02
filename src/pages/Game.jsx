import React from 'react'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 1,
            starved: 0,
            peopleImmigrated: 5,
            population: 100,
            acres: 1000,
            harvested: 3,
            rats: 200,
            bushelsTotal: 2800,
            landCost: 17,
            acresMarket: 0,
            bushelsFed: 0,
            seedsPlanted: 0
        };
        this.gameLoop = this.gameLoop.bind(this);
        this.calculateScore = this.calculateScore.bind(this);
        this.getRandom = this.getRandom.bind(this);
    }

    gameLoop() {
        const { acres, year, population, starved, bushelsFed } = this.state;
        let populationFed = bushelsFed / 20;
        let newPopulation;
        // check if everyone was fed
        if (populationFed >= population) {
            newPopulation = population;
        } else {
            // if everyone wasn't fed update population with new value
            newPopulation = populationFed;
        }
        if (newPopulation <= 0) {
            this.calculateScore(false);
        } else if (year === 10) {
            this.calculateScore(true);
        } else {

            this.setState({
                year: year + 1,
                starved: 0
            });
        }
    }

    calculateScore(didPlayerWin) {
        if (didPlayerWin) {

        } else {

        }
    }

    getRandom(max) {
        return Math.ceiling(Math.random() * max);
    }

    render() {
        const { year, starved, peopleImmigrated, population, acres, harvested, rats, bushelsTotal, landCost, acresMarket,
        bushelsFed, seedsPlanted } = this.state;
        return (
            <div className='game'>
                <h1>Hammurabi I beg to report to you,</h1>
                <h2>in Year {year}, {starved} people starved.</h2>
                <h2>{peopleImmigrated} people came to the city.</h2>
                <h2>The city population is now {population}.</h2>
                <h2>The city now owns {acres} acres.</h2>
                <h2>You harvested {harvested} bushels per acre.</h2>
                <h2>Rats ate {rats} bushels.</h2>
                <h2>You now have {bushelsTotal} bushels in store.</h2>
                <h2>Land is trading at {landCost} bushels per acre.</h2>
                <input type='number' value={acres} onChange={event => this.setState({ acres: event.target.value})}/>
                <button onClick={() => this.gameLoop()}>Make It So!</button>
            </div>
        )
    }
}

export default Game